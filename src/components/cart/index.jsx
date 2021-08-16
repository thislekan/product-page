import { useState, useEffect } from "react";
import { DropDowns } from "../reusabales";
import { ReactComponent as ChevronDown } from "../../images/chevron.svg";

const Cart = (props) => {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState({});
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    const body = document.querySelector("body");
    const cartItems = JSON.parse(localStorage.getItem("__cart")) || [];
    const newCart = cartItems.map((item) =>
      props?.products?.find((obj) => obj?.id === item?.id)
    );
    localStorage.setItem("__cart", JSON.stringify(newCart));
    body.style.overflow = "hidden";
    setItems([]);
    setTotalAmount();

    return () => {
      body.style.overflow = "auto";
    };
  }, [props?.products]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("__cart")) || [];
    if (cartItems?.length) {
      const uniqueItems = [];
      const repeatedObj = {};
      const uniqueList = new Set();
      cartItems.forEach((obj) => uniqueList.add(obj?.id));
      uniqueList.forEach((value) => {
        const foundItem = cartItems.find((obj) => obj?.id === value);
        const __count = cartItems.filter((obj) => obj?.id === value);
        uniqueItems.push(foundItem);
        repeatedObj[value] = __count.length;
      });
      items?.length !== uniqueItems?.length && setItems(uniqueItems);
      if (Object.keys(count).length !== Object.keys(repeatedObj).length) {
        setCount(repeatedObj);
      }
    }
  }, [count, items]);

  const addOrRemove = (item, remove) => {
    const cartItems = JSON.parse(localStorage.getItem("__cart")) || [];
    props?.cartActivity?.(true);
    if (!remove && item) {
      const newItems = [...cartItems, item];
      localStorage.setItem("__cart", JSON.stringify(newItems));
      const increased = (count[item.id] += 1);
      setCount({ ...count, [item.id]: increased });
    }

    if (remove && item) {
      const index = cartItems.findIndex((obj) => obj.id === item.id);
      if (index || index === 0) {
        cartItems.splice(index, 1);
        localStorage.setItem("__cart", JSON.stringify(cartItems));
        const decreased = (count[item.id] -= 1);
        const newObj = { ...count, [item.id]: decreased };
        if (decreased === 0) delete newObj[item.id];
        setCount(newObj);
        if (!Object.keys(newObj).length) props.toggleCart();
      }
    }

    setTotalAmount();
  };

  const setTotalAmount = () => {
    const cartItems = JSON.parse(localStorage.getItem("__cart")) || [];
    if (cartItems?.length) {
      const total = cartItems.reduce((acc, item) => acc + item?.price, 0);
      setSubTotal(total);
    }
  };

  return (
    <div className={`cart${props?.openCart ? " cart--extended" : ""}`}>
      <div className="cart__wrapper">
        <div className="cart__wrapper__title">
          <span className="close" onClick={props?.toggleCart}>
            <ChevronDown height="15px" className="close__arrow" />
          </span>
          <p>YOUR CART</p>
        </div>
        <div className="cart__wrapper__currency">
          <DropDowns
            data={props?.currencies}
            name="currencies"
            value={props?.currency}
            valueFunc={(e) => props?.changeCurrency?.(e?.target?.value)}
            initialValue="USD"
            classProps="dropdown"
          />
        </div>
        <div className="cart__wrapper__list">
          <div className="wrapper">
            {!items?.length ? (
              <p className="empty">There are no items in your cart</p>
            ) : (
              <div className="item">
                {items.map((item, index) => {
                  if (!count[item.id]) return null;
                  return (
                    <div className="item__product" key={index}>
                      <div className="item__product__content">
                        <h4 className="title">Classic Maintenance Set</h4>
                        <p className="combo">Combination | __</p>
                        <p className="description">
                          One time purchase of Two Month supply.
                        </p>
                        <div className="pricing">
                          <div className="control">
                            <button
                              className="minus"
                              onClick={() => addOrRemove(item, true)}
                            >
                              -
                            </button>
                            <span className="number">{count[item?.id]}</span>
                            <button
                              className="plus"
                              onClick={() => addOrRemove(item)}
                            >
                              +
                            </button>
                          </div>
                          <p className="price">
                            {props?.currency} {item?.price}
                          </p>
                        </div>
                      </div>
                      <div className="item__product__img">
                        <img src={item?.image_url} alt="Product stuff" />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      {Object.keys(count).length ? (
        <div className="checkout">
          <div className="checkout__wrapper">
            <div className="checkout__wrapper__subtotal">
              <p>Subtotal</p>
              <p className="total">
                {props?.currency} {subTotal}
              </p>
            </div>
            <button className="checkout__wrapper__banner">
              MAKE THIS A SUBSCRIPTION (SAVE 20%)
            </button>
            <button
              className="checkout__wrapper__btn"
              onClick={props?.toggleCartContent}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
