import styles from "./styles/Gradient.module.scss";

import React from "react";

const Gradient = (props) => {
  return <div className={styles.gradient}>{props.children}</div>;
};

export default Gradient;
