import React from "react";
import NavBar from "./routes/NavBar/NavBar";

import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import Cart from "./screens/Cart/Cart";
import PlaceOrder from "./screens/PlaceOrder/PlaceOrder";

const App = () => {
  return (
    <div className="appContainer">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
      </Routes>
    </div>
  );
};

export default App;
