import { useState } from "react";
import { useQuery } from "@apollo/client";
import FilterComponent from "./filter";
import Footer from "./navigation/Footer";
import Navbar from "./navigation/Nav";
import AllProducts from "./products";
import Cart from "./cart";
// import LoaderInterface from "./skeleton";
import { QUERY } from "./constants";

function App() {
  const [userCurrency, setUserCurrency] = useState("NGN");
  const [filterValue, setFilterValue] = useState("");
  const [openCart, setOpenCart] = useState(false); // opens cart
  const [confirmOrder, setconfirmOrder] = useState(false); // adds to cart from product
  const { loading, error, data } = useQuery(QUERY, {
    variables: { currency: `${userCurrency}` },
  });
  const onCartClick = () => setOpenCart(!openCart); // open or close cart
  const toggleConfirmOrder = (value) => {
    if (!openCart) setOpenCart(true);
    setconfirmOrder(value || !confirmOrder);
  };
  const onFilter = (e) => setFilterValue(e.target.value);
  const onCurrencyChange = (val) => {
    const cartItems = JSON.parse(localStorage.getItem("__cart"));
    const newCart = cartItems.map((item) =>
      data?.products?.find((obj) => obj?.id === item?.id)
    );
    localStorage.setItem("__cart", JSON.stringify(newCart));
    setUserCurrency(val);
    onCartClick?.();
  };

  // if (loading) return <LoaderInterface />;
  if (error) return <p>Error </p>;

  return (
    <div className="app">
      <Navbar
        onCartClick={onCartClick}
        isAddedToCart={confirmOrder}
        resetCartActivity={setconfirmOrder}
      />
      <main>
        <FilterComponent setValue={onFilter} filterValue={filterValue} />
        <AllProducts
          loading={loading}
          data={data?.products}
          error={error}
          userCurrency={userCurrency}
          addToCart={toggleConfirmOrder}
        />
        {openCart && (
          <Cart
            currencies={data?.currency}
            currency={userCurrency}
            changeCurrency={onCurrencyChange}
            openCart={openCart}
            toggleCart={onCartClick} // closes cart
            cartActivity={toggleConfirmOrder}
            products={data?.products}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
