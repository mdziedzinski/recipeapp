import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Category from "../components/Category";

import { Link, useParams } from "react-router-dom";
import Grid from "../components/Grid";
import Card from "../components/Card";
import Gradient from "../components/Gradient";
import styles from "./Cuisine.module.scss";

const Cuisine = (props) => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <>
      <Category />
      <Grid>
        {cuisine.map((item) => {
          return (
            <Link key={item.id} to={`/recipe/` + item.id}>
              <Card key={item.id}>
                <div className={styles.recipeImageText}>
                  <p className={styles.recipeTitle}> {item.title}</p>
                </div>
                <img src={item.image} alt={item.title} />

                <Gradient />
              </Card>
            </Link>
          );
        })}
      </Grid>
    </>
  );
};

export default Cuisine;
