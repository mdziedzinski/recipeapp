import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Grid from "../components/Grid";
import Gradient from "../components/Gradient";
import Card from "../components/Card";
import styles from './Searched.module.scss'

const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <Grid>
      {searchedRecipes.map((item) => {
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
  );
};

export default Searched;
