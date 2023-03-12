import * as React from "react";
import { Link } from "gatsby";

import * as styles from "./EditorList.module.css";
import Avatar from "../avatar";


const EditorList = ({ editors }) => {
    return <div>
        <h3>Editors</h3>
        { editors.map((e) => (
        <li>
          <Avatar author={e}/>
          <Link to={"/editors/" + e.slug}>{ e.fullName }</Link>
        </li>
      ))
      }
    </div>;
};




export default EditorList;
