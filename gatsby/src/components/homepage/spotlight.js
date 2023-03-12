import * as React from "react";

import * as styles from "./spotlight.module.css";
import IntroItem from "../introItem";


const Spotlight = ({post1, post2}) => {
    return <div className={styles.spotlight}>
        <div className={styles.spotlightItem}>
        <IntroItem post={post1} kind={"Big"}/>
        </div>
        <div className={styles.spotlightItem}>
        Coming soon...
        </div>
    </div>;
};




export default Spotlight;
