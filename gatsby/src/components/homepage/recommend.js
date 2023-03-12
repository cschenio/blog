import * as React from "react";

import * as styles from "./recommend.module.css";
import IntroItem from "../introItem";


const Recommend = ({posts}) => {
    return <div>
       <h3>Recommended posts</h3>
       { posts.map((p) => (
        <>
            <IntroItem key={p.slug} post={p} kind={"Medium"}/>
            <br />
        </>
        ))}
    </div>;
};




export default Recommend;
