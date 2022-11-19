import React from "react";
import Meal from "./Meal";

const MealList = (mealData) => {
  const nutrients = mealData.nutrients;

  return (
    <main>
      <section>
        <h1>Nutrients</h1>
        <ul>
          {/* <li>Calories: {nutrients.calories}</li>
          <li>Protein: {nutrients.protein}</li>
          <li>Carbohydrates {nutrients.carbohydrates}</li>
          <li>Fat: {nutrients.fat}</li> */}
        </ul>
      </section>
    </main>
  );
};

export default MealList;
