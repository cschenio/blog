import * as React from "react";
import { Link } from "gatsby";
import * as styles from "./rootPathLayout.module.css";

import Hero from "../hero";

const RootPathLayout = ({ title, children }) => {
    return <>
        <Hero title={title} linkTo="/" />
        <main>{children}</main>
    </>;
};

export default RootPathLayout;
