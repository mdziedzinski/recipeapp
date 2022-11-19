import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import styles from "./Recipe.module.scss";

const Recipe = (props) => {
  
  let params = useParams();
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);



  return (
    <>
      <div className={styles.detailWrapper}>
        <div className={styles.image}>
          <h1>{details.title}</h1>
          <img src={details.image} alt={details.title} />
        </div>
        <h4>
          Servings: {details.servings} | Preparation time:{" "}
          {details.readyInMinutes} minutes
        </h4>
       
        {console.log(details)}
        <h2>Ingredients</h2>
        <ul>
          {details.extendedIngredients &&
            details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}> {ingredient.original}</li>
            ))}
        </ul>
        <h2>Instructions</h2>
        <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
      </div>
    </>
  );
};

export default Recipe;
