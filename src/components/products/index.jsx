import SingleProduct from "./Product";
import LoaderInterface from "../skeleton";

const AllProducts = (props) => {
  return (
    <div className="products">
      <div className="products__wrapper">
        {props?.data?.map((obj, index) => {
          if (props.loading) return <LoaderInterface key={index} />;
          return (
            <SingleProduct
              key={index}
              info={obj}
              userCurrency={props.userCurrency}
              addToCart={props.addToCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllProducts;
