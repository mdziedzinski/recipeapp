import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

import styles from "./Cuisine.module.scss";
import MealList from "../components/MealList";

const MealPlan = (props) => {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  const handleChange = (e) => {
    setCalories(e.target.value);
  };

  const getMealData = async (name) => {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_API_KEY}&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  };

  return (
    <div >
      <input
        onChange={handleChange}
        type="number"
        placeholder="Calories"
      ></input>
      <button onClick={getMealData}>Get meal plan for the day</button>
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
};

export default MealPlan;
