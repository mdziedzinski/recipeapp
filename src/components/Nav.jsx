import styles from "./styles/Nav.module.scss";
import { FaHome, FaRegHeart, FaCalendar } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";
import Search from "./Search";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiMenuUnfoldFill } from "react-icons/ri";

import React from "react";

const Nav = (props) => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={showLinks ? `${styles.hidden}` : `${styles.menu}`}>
        <NavLink className={styles.link} to="/">
          <FaHome />
          Home
        </NavLink>

        <NavLink className={styles.link} to="diet/omnivore/">
          <GiOpenBook />
          Categories
        </NavLink>

        <Link className={styles.link} to="/">
          <FaRegHeart />
          Favorites
        </Link>
        <Link className={styles.link} to="/mealplan/">
          <FaCalendar />
          Generate Mealplan
        </Link>
      </div>
      <button
        onClick={() => setShowLinks(!showLinks)}
        className={styles.button}
      >
        <RiMenuUnfoldFill />
      </button>
      <Search />
    </nav>
  );
};

export default Nav;
