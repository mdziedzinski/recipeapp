import React from "react";
import Meal from "./Meal";
import Grid from "./Grid";
import styles from './styles/MealList.module.scss'

import { Link } from "react-router-dom";

const MealList = ({ mealData }) => {
  const nutrients = mealData.nutrients;

  return (
    <main>
      <section className={styles.nutrients}>
       
        <ul>
          <li>
            <span>Energy:</span> {nutrients.calories} kcal
          </li>
          <li><span>Protein:</span>  {nutrients.protein} g</li>
          <li><span>Carbohydrates:</span>  {nutrients.carbohydrates} g</li>
          <li><span>Fat: </span> {nutrients.fat} g</li>
        </ul>
      </section>

      <Grid>
        {mealData.meals.map((recipe) => {
          {
            return (
              <Link key={recipe.id} to={"/recipe/" + recipe.id}>
                <Meal recipe={recipe} />
              </Link>
            );
          }
        })}
      </Grid>
    </main>
  );
};

export default MealList;
