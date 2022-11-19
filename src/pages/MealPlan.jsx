import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Grid from "../components/Grid";
import Card from "../components/Card";
import Gradient from "../components/Gradient";
import styles from "./Cuisine.module.scss";
import MealList from "../components/MealList";

const MealPlan = (props) => {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  let params = useParams();

  const getMealData = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_API_KEY}&timeFrame=day&targetCalories=${calories}`
    );
    const recipes = await data.json();
      setMealData(recipes);
     console.log(recipes)
  };

  useEffect(() => {
    getMealData(params.search);
  }, [params.search]);

  const handleChange = (e) => {
    setCalories(e.target.value);
  };

  return (
    <div className={styles.controls}>
      <input
        onChange={handleChange}
        type="number"
        placeholder="Calories"
      ></input>
          <button onClick={getMealData}>Get meal plan for the day</button>
          {mealData && <MealList mealData={mealData}/>} 
    </div>
  );
};

export default MealPlan;
