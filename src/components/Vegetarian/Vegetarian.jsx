import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styles from "./vegetarian.module.scss";
import { Link } from "react-router-dom";

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
    <div className={styles.color}>
      Testowy napis do pokolorowania
      <Wrapper>
        <h3>Vegetarian Recipes</h3>
        <Splide
          options={{
            perPage: 3,
            drag: "free",
            gap: "1rem",
          }}
        >
          {vegetarian.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                  <Link to={"/recipe/" + recipe.id}>
                <Card>
                    <div className="recipeImageText">
                      <p className="recipeAboveTitleText">
                        {recipe.readyInMinutes} minutes |{" "}
                        {recipe.extendedIngredients.length} ingredients
                      </p>
                      <p className="recipeTitle"> {recipe.title}</p>
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

const Card = styled.div`
  min-height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%:
    object-fit: cover;

  }

.recipeImageText {
  position: absolute;
  z-index: 10;
  margin: 1rem;

}
.recipeTitle, .recipeAboveTitleText {
  
padding-inline: 1rem;
color: white;
font-weight: 600;
font-size: 1rem;
  

}

.recipeAboveTitleText {
  font-weight: 400;
  color: rgba(234, 234, 234, 0.95);
}



`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.85));
`;

export default Vegetarian;
