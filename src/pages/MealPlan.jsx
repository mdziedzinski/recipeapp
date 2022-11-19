import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";


import styles from "./MealPlan.module.scss";
import MealList from "../components/MealList";

const MealPlan = (props) => {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);
  const [dietType, setDietType] = useState("omnivore");

  const handleChange = (e) => {
    setCalories(e.target.value);
  };

  const handleChoice = (e) => {
    setDietType(e.target.value);
  };

  const getMealData = async (name) => {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_API_KEY}&timeFrame=day&targetCalories=${calories}&diet=${dietType}`
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
      <main className={styles.main}>
          <h1>Generate daily meal plan</h1>
      <div className={styles.controls}>
        <p className={styles.inputChoice}>
          My diet preference is <br />
          <span>{dietType} </span>diet
        </p>
        <select className={styles.select} onChange={handleChoice}>
          <option value="omnivore">omnivore</option>
          <option value="glutenfree">gluten free</option>
          <option  value="vegetarian">
            vegetarian
          </option>
          <option value="vegan">vegan</option>>
        </select>
        <p className={styles.inputChoice}>
          My daily goal is <br />
          <span>{calories} </span>kcal
        </p>
        <input
          onChange={handleChange}
          type="range"
          min="1000"
          max="4000"
          defaultValue="2000"
        ></input>
        <button onClick={getMealData}>Get meal plan for the day</button>
      </div>
      {mealData && <MealList mealData={mealData} />}
    </main>
  );
};

export default MealPlan;
