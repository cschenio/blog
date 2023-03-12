import * as React from "react";

import * as styles from "./recommend.module.css";
import IntroItem from "../introItem";


const Recommend = ({posts}) => {
    return <div className={styles.recommend}>
       { posts.map((p) => (
            <div className={styles.recommendItem}>
                <IntroItem key={p.slug} post={p} kind={"Small"}/>
            </div>
        ))}
    </div>;
};




export default Recommend;
