import * as React from "react";
import { Link } from "gatsby";
import * as styles from "./navbar.module.css";

const Navbar = ({ title, linkTo }) => {
  return (
    <nav className={styles.navbar}>
      <h1><Link to={linkTo}>{ title }</Link></h1>
    </nav>
  );
};

export default Navbar;
