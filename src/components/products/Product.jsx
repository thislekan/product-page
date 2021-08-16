const SingleProduct = (props) => {
  const addToCartFn = () => {
    const allItems = JSON.parse(localStorage.getItem("__cart")) || [];
    allItems.push(props.info);
    const newItems = JSON.stringify(allItems);
    localStorage.setItem("__cart", newItems);
    props?.addToCart();
  };
  return (
    <div className="product">
      <div className="product__description">
        <img
          src={props?.info?.image_url}
          alt="product"
          className="product__description__img"
        />
        <h5>Correction Trio Set</h5>
      </div>
      <p className="product__price">
        {props?.userCurrency} {Math.round(props?.info?.price).toLocaleString()}
      </p>
      <button className="product__btn" onClick={addToCartFn}>
        Add to cart
      </button>
    </div>
  );
};

export default SingleProduct;
