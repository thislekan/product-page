import cart from '../../images/cart.png'
const SingleProduct = (props) => (
  <div className="product">
    <div className="product__description">
      <img src={cart} alt='product' className="product__description__img" />
      <h5>Correction Trio Set</h5>
    </div>
    <p className="product__price">$345</p>
    <button className="product__btn">Add to cart</button>
  </div>
)

export default SingleProduct;