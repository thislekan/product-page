import SingleProduct from "./Product";

const arr = [1, 2, 3, 4];
const AllProducts = (props) => (
  <div className="products">
    <div className="products__wrapper">
      {
        arr.map(val => (<SingleProduct key={val} />))
      }
      
    </div>
  </div>
)

export default AllProducts;