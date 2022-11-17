import styles from "./Nav.module.scss";
import { FaHome, FaBookOpen, FaRegHeart, FaPlus } from "react-icons/fa";
import Search from "./Search";
import { Link, NavLink } from "react-router-dom";

import React from "react";

const Nav = (props) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.menu}>
        <NavLink className={styles.link} to="/">
          <FaHome />
          Home
        </NavLink>

        <Link className={styles.link} to="/">
          <FaRegHeart />
          Favorites
        </Link>
        <Link className={styles.link} href="/">
          <FaPlus />
          Add
        </Link>
      </div>
      <Search />
    </nav>
  );
};

export default Nav;
