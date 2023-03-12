import * as React from "react";
import { Link } from "gatsby";

import * as styles from "./editorList.module.css";
import Avatar from "../avatar";


const EditorList = ({ editors }) => {
    return <div className={styles.editorList}>
        { editors.map((e) => (
        <div className={styles.editor}>
          <Avatar author={e}/>
          <Link to={"/editors/" + e.slug}>{ e.fullName }</Link>
        </div>
      ))
      } 
    </div>;
};




export default EditorList;
