import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import styles from "./Popular.module.scss";
import Grid from "./Grid";
import Card from "./Card";
import Gradient from "./Gradient";
import Wrapper from "./Wrapper";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6`
      );

      const data = await api.json();
      setPopular(data.recipes);
      localStorage.setItem("popular", JSON.stringify(data.recipes));

      // console.log(data.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <Grid>
          <h3>Popular Recipes</h3>
        </Grid>
        <Splide
          options={{
            perPage: 3,
            drag: "free",
            gap: "1rem",
          }}
        >
          {console.log(popular)}
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
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
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

export default Popular;
