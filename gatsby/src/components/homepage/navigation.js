import * as React from "react";
import { Link } from "gatsby";

import * as styles from "./Navigation.module.css";


const Navigation = () => {
    return <div>
        <Link to="/">Posts</Link>
        <Link to="/">Editors</Link>
        <Link to="/">About us</Link>
    </div>;
};




export default Navigation;
