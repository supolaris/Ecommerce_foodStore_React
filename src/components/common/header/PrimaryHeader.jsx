import React from "react";
import "./PrimaryHeader.css";

const PrimaryHeader = () => {
  return (
    <div className="headerDiv">
      <div className="headerContentDiv">
        <h2>Place your order</h2>
        <p>
          Select your food from delicious menu, offering world wide dishes.
          Chef's specilities
        </p>
        <div className="menuButtonDiv">
          <button>View Menu</button>
        </div>
      </div>
    </div>
  );
};

export default PrimaryHeader;
