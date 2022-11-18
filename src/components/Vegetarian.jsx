import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styles from "./styles/Vegetarian.module.scss";
import { Link } from "react-router-dom";
import Grid from "./Grid";
import Card from "./Card";
import Wrapper from "./Wrapper";
import Gradient from "./Gradient";

function Vegetarian() {
  const [vegetarian, setVegetarian] = useState([]);

  useEffect(() => {
    getVegetarian();
  }, []);

  const getVegetarian = async () => {
    const check = localStorage.getItem("vegetarian");

    if (check) {
      setVegetarian(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6&tags=vegetarian`
      );

      const data = await api.json();
      setVegetarian(data.recipes);
      localStorage.setItem("vegetarian", JSON.stringify(data.recipes));

      // console.log(data.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Vegetarian Recipes</h3>
        <Grid>
          {vegetarian.map((recipe) => {
            return (
              <Link to={"/recipe/" + recipe.id}>
                <Card>
                  <div className={styles.recipeImageText}>
                    <p className={styles.recipeAboveTitleText}>
                      {recipe.readyInMinutes} minutes |{" "}
                      {recipe.extendedIngredients.length} ingredients
                    </p>
                    <p className={styles.recipeTitle}> {recipe.title}</p>
                  </div>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Card>
              </Link>
            );
          })}
        </Grid>
      </Wrapper>
    </div>
  );
}

export default Vegetarian;
