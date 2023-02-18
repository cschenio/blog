import * as React from "react";

import Navbar from "../navbar";

import * as styles from "./layout.module.css";

const Layout = ({ title, children }) => {
  return (
    <>
    <Navbar title={title} linkTo="/" />
    <div className={styles.wrapper}>
      {children}
      <footer className={styles.footer}>© {new Date().getFullYear()}, {title}</footer>
    </div>
    </>
  );
};

export default Layout;
