import React, { useContext } from "react";
import "./FoodDisplay.css";

import { StoreContext } from "../../../context/StoreContext";

const FoodDisplay = () => {
  const { foodList } = useContext(StoreContext);

  return (
    <div className="mainDiv" id="mainDiv">
      <h2>Top dishes new you</h2>
    </div>
  );
};

export default FoodDisplay;
