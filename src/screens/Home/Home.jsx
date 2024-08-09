import React, { useState } from "react";
import "./Home.css";

import PrimaryHeader from "../../components/common/header/PrimaryHeader";
import MenuList from "../../components/common/exploreMenu/MenuList";
import FoodDisplay from "../../components/common/FoodDisplay/FoodDisplay";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <PrimaryHeader />
      <MenuList category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default Home;
