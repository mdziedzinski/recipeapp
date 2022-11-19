import React from "react";
import { useState, useEffect } from "react";
import Grid from "./Grid";
import Meal from "./Meal";
import MealList from "./MealList";


const Vegetarian = () => {
  const [data, setData] = useState();

  

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await (
        await fetch(
          `https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_API_KEY}&timeFrame=day&targetCalories=2000`
        )
      ).json();

      // set state when the data received
      setData(data);
    };

    dataFetch();
  }, []);

  return (
    <>
      <h2>Mealplan for the day</h2>
     {data && <MealList mealData={data} />}
    </>
  );
};

export default Vegetarian;
