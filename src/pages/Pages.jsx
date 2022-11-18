import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { Routes, Route, useLocation } from "react-router-dom";

function Pages(props) {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact={true} path="/diet/:type" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/recipe/:name" element={<Recipe />} />
    </Routes>
  );
}

export default Pages;
