import React, { useState } from "react";
import "./NavBar.css";

import Logo from "../../assets/Images/navBar/FoodStoreLogo.png";
import searchIcon from "../../assets/Images/navBar/searchIcon.png";
import cartIcon from "../../assets/Images/navBar/cartIcon.png";

const NavBar = () => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className="navContainer">
      <div className="logoDiv">
        <img className="logo" src={Logo} alt="" />
      </div>

      <div className="navMenuDiv">
        <ul className="navMenu">
          <li
            onClick={() => setMenu("Home")}
            className={menu === "Home" ? "navMenuLinkActive" : "navMenuLink"}
          >
            Home
          </li>
          <li
            onClick={() => setMenu("Menu")}
            className={menu === "Menu" ? "navMenuLinkActive" : "navMenuLink"}
          >
            Menu
          </li>
          <li
            onClick={() => setMenu("MobileApp")}
            className={
              menu === "MobileApp" ? "navMenuLinkActive" : "navMenuLink"
            }
          >
            Mobile App
          </li>
          <li
            onClick={() => setMenu("ContactUs")}
            className={
              menu === "ContactUs" ? "navMenuLinkActive" : "navMenuLink"
            }
          >
            Contact us
          </li>
        </ul>
      </div>

      <div className="navBarRight">
        <img className="searchIcon" src={searchIcon} alt="search icon" />
        <div className="cartIconDiv">
          <img className="cartIcon" alt="" src={cartIcon} />
          <div className="cartDot"></div>
        </div>

        <button className="signInButton">Sign in</button>
      </div>
    </div>
  );
};

export default NavBar;
