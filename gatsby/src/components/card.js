import * as React from "react";

import * as styles from "./card.module.css";

const Card = ({ children }) => {
  return (
    <div className={styles.card}>
      { children }
    </div>
  );
};

export default Card;
