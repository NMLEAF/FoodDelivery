import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useStore } from "../../hooks/useStore";

const Navbar = ({ setShowLogin }) => {
  const { getTotalCartAmount } = useStore();
  const [menu, setMenu] = useState("home");
  const { pathname } = useLocation();

  return (
    <div className="navbar" id="home-top">
      <Link to="/">
        <img src={assets.logo} className="logo" alt="" />
      </Link>

      {pathname === "/" && (
        <ul className="navbar-menu">
          <a
            href="#home-top"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active-nav" : ""}
          >
            home
          </a>
          <a
            href="#explore-menu"
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active-nav" : ""}
          >
            menu
          </a>
          <a
            href="#app-download"
            onClick={() => setMenu("mobile-app")}
            className={menu === "mobile-app" ? "active-nav" : ""}
          >
            mobile-app
          </a>
          <a
            href="#footer"
            onClick={() => setMenu("contact us")}
            className={menu === "contact us" ? "active-nav" : ""}
          >
            contact us
          </a>
        </ul>
      )}

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount?.() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
