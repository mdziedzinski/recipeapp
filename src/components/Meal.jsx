import React, { useState, useEffect } from "react";
import stylesRecipe from "./styles/RecipeCard.module.scss";
import Card from "./Card";
import Gradient from "./Gradient";

const Meal = ({ recipe }) => {
  const [imageUrl, setImageUrl] = useState("image");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);

        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  }, [recipe.id]);

  return (
    <>
      <Card>
        <div className={stylesRecipe.recipeImageText}>
          <p className={stylesRecipe.recipeAboveTitleText}>
            {" "}
            Ready in {""}
            {recipe.readyInMinutes} minutes
          </p>
          <p className={stylesRecipe.recipeTitle}> {recipe.title}</p>
        </div>
        <img src={imageUrl} alt={recipe.title} />

        <Gradient />
      </Card>
    </>
  );
};

export default Meal;
