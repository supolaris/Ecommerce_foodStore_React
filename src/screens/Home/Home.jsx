import React, { useState } from "react";
import "./Home.css";

import PrimaryHeader from "../../components/common/header/PrimaryHeader";
import MenuList from "../../components/common/exploreMenu/MenuList";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <PrimaryHeader />
      <MenuList category={category} setCategory={setCategory} />
    </div>
  );
};

export default Home;
