import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import styles from "./Popular.module.scss";
import Grid from "./Grid";
import Card from "./Card";

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

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

// const Card = styled.div`
//   min-height: 15rem;
//   border-radius: 2rem;
//   overflow: hidden;
//   position: relative;
//   display: flex;
//   justify-content: flex-start;
//   align-items: flex-end;

//   img {
//     border-radius: 2rem;
//     position: absolute;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;

//   }

// .recipeImageText {
//   position: absolute;
//   z-index: 10;
//   margin: 1rem;

// }
// .recipeTitle, .recipeAboveTitleText {

// padding-inline: 1rem;
// color: white;
// font-weight: 600;
// font-size: 1rem;

// }

// .recipeAboveTitleText {
//   font-weight: 400;
//   color: rgba(234, 234, 234, 0.95);
// }

// `;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(89, 131, 252, 0) 0%,
    rgba(0, 0, 0, 0.9) 100%
  );
`;

export default Popular;
