import * as React from "react";


import * as styles from "./homepageLayout.module.css";

const HomepageLayout = ({children }) => {
  return (
    <>
      <div className={styles.wrapper}>
        {children}
      </div>
    </>
  );
};

export default HomepageLayout;
