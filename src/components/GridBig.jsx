import styles from "./styles/GridBig.module.scss";

import React from "react";

const Grid = (props) => {
  return <div className={styles.grid}>{props.children}</div>;
};

export default Grid;
