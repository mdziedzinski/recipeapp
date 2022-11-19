import React from "react";
import styles from "./styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>
        Created by{" "}
        <a href="https://github.com/mdziedzinski">Marcin Dziedziński 2022</a>
      </p>
    </div>
  );
};

export default Footer;
