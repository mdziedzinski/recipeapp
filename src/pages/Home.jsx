import Popular from "../components/Popular";
import Vegetarian from "../components/Vegetarian";
import { motion } from "framer-motion";

import React from "react";

function Home(props) {
  return (
    <div>
      <Popular />
      <Vegetarian />
    </div>
  );
}

export default Home;
