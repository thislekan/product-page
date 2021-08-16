import { useState, useEffect } from "react";
import cartImg from "../../images/cart.png";
import { ReactComponent as ChevronDown } from "../../images/chevron.svg";

const Navbar = ({ onCartClick, isAddedToCart, resetCartActivity }) => {
  const [showLinks, setShowLinks] = useState(false);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    if (isAddedToCart) {
      const items = JSON.parse(localStorage.getItem("__cart"));
      setTotalItems(items?.length || 0);
      resetCartActivity?.();
    }
  }, [isAddedToCart, resetCartActivity]);

  const toggleNav = () => setShowLinks(!showLinks);
  const toggleActive = (e) => {
    const btns =
      document.querySelectorAll(".navbar__links-div__top button") || [];
    btns.forEach((btn) => {
      if (btn.classList.contains("selected")) {
        btn.classList.remove("selected");
      }
    });
    e.target.classList.add("selected");
  };

  return (
    <div className="navbar">
      <span className="navbar__link-wrapper">
        <div className="navbar__link-wrapper__hamburger" onClick={toggleNav}>
          <span className="bars"></span>
          <span className="bars"></span>
          <span className="bars"></span>
        </div>
        <a href="/" className="logo">
          LUMIN
        </a>
        <button onClick={toggleNav}>Shop</button>
        <button onClick={toggleNav}>Learn</button>
      </span>

      <div
        className={`navbar__links-div${
          showLinks ? " navbar__links-div--extend" : ""
        }`}
      >
        <div className="navbar__links-div__top">
          <a href="/" className="logo">
            LUMIN
          </a>
          <button onClick={toggleActive}>Shop</button>
          <button onClick={toggleActive}>Learn</button>
          <span className="close" onClick={toggleNav}>
            <ChevronDown className="close__arrow" />
          </span>
        </div>
      </div>
      <div className="navbar__cart-div">
        <a href="/">Account</a>
        <button className="navbar__cart-div__btn" onClick={onCartClick}>
          <span className="count">{totalItems}</span>
          <img src={cartImg} alt="cart representation" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
