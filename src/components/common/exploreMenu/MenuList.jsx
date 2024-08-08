import React from "react";
import "./MenuList.css";

import { menuData } from "../../../constants/constantData";

const MenuList = (props) => {
  return (
    <div className="menuDiv">
      <h2>Explore our menu</h2>
      <p className="menuDescriptionText">
        Discover delicious dishes crafted with passion, perfect for every taste
        and occasion
      </p>
      <div className="menuListDiv">
        {menuData.map((item, index) => {
          return (
            <div
              className="menuListItemDiv"
              onClick={() =>
                props.setCategory((prev) =>
                  prev === item.name ? "All" : item.name
                )
              }
            >
              <img
                src={item.image}
                alt=""
                className={props.category === item.name ? "Active" : ""}
              />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default MenuList;
