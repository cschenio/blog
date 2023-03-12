import * as React from "react";
import { Link } from "gatsby";
import * as styles from "./hero.module.css";

const Hero = ({ title, linkTo }) => {
  return (
    <nav className={styles.hero}>
      <h1><Link to={linkTo}>{ title }</Link></h1>
    </nav>
  );
};

export default Hero;
