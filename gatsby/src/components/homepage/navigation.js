import * as React from "react";
import { Link } from "gatsby";

import * as styles from "./navigation.module.css";


const Navigation = () => {
    return <div className={styles.navigation}>
        {/* the pages are not implemented */}
        <Link style={{color:"silver", textDecoration:"line-through"}}> Posts </Link>
        <Link style={{color:"silver", textDecoration:"line-through"}}> Editors </Link>
        <Link style={{color:"silver", textDecoration:"line-through"}}> About us </Link>
    </div>;
};




export default Navigation;
