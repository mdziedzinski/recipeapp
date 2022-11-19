import * as React from "react";
import { NavLink } from "react-router-dom";
import { FaDrumstickBite, FaEgg, FaCarrot } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import styles from "./styles/Category.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWheatAwnCircleExclamation } from "@fortawesome/free-solid-svg-icons";

function Category(props) {
  return (
    <div className={styles.category}>
      <h1>What do you want to cook?</h1>
      <div className={styles.list}>
        <NavLink className={styles.categoryLink} to={"/diet/omnivore"}>
          <GiKnifeFork />
          <h4>Something good</h4>
        </NavLink>
        <NavLink className={styles.categoryLink} to={"/diet/glutenfree"}>
          <FontAwesomeIcon icon={faWheatAwnCircleExclamation} />
          <h4>Gluten Free</h4>
        </NavLink>
        <NavLink className={styles.categoryLink} to={"/diet/ketogenic"}>
          <FaDrumstickBite />
          <h4>Ketogenic</h4>
        </NavLink>
        <NavLink className={styles.categoryLink} to={"/diet/vegetarian"}>
          <FaEgg />
          <h4>Vegetarian</h4>
        </NavLink>
        <NavLink className={styles.categoryLink} to={"/diet/Vegan"}>
          <FaCarrot />
          <h4>Vegan</h4>
        </NavLink>
      </div>
    </div>
  );
}

export default Category;
