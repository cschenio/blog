import * as React from "react";

import * as styles from "./spotlight.module.css";
import IntroItem from "../introItem";


const Spotlight = ({post1, post2}) => {
    return <div>
       <h3>Newest posts</h3>
       <IntroItem post={post1} kind={"Big"}/>
       {/* <IntroItem post={post2} kind={"Big"}/> */}
    </div>;
};




export default Spotlight;
