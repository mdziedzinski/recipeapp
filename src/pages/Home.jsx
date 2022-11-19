import Popular from "../components/Popular";
import Vegetarian from "../components/Vegetarian";
import Category from "../components/Category";

import React from "react";

function Home(props) {
  return (
    <div>
      <Category />
      <Popular />
      <Vegetarian />
    </div>
  );
}

export default Home;
