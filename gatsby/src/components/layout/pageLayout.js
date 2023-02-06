import * as React from "react";
import { Link } from "gatsby";
import * as styles from "./pageLayout.module.css";

import Navbar from "../navbar";

const PageLayout = ({ title, children }) => {
    return <>
        <Navbar title={title} linkTo="/" />
        <main>{children}</main>
    </>;
};

export default PageLayout;
