import styles from "./styles/Wrapper.module.scss";

import React from "react";

const Wrapper = (props) => {
  return <div className={styles.wrapper}>{props.children}</div>;
};

export default Wrapper;
