import * as React from "react";

import * as styles from "./introItem.module.css";


const IntroItem = ({ post, kind }) => {
    return <div>
        "title:"{post.title}
        <br/>
        "date:"{post.date}
        <br/>
        "author:"{post?.author || "AUTHOR"}
        <br/>
        "body id:"{post.body.data.id}
        <br/>
        <div dangerouslySetInnerHTML={{ __html: post.body.data.childMarkdownRemark.html }}/>
        <br/>
        "kind:"{kind}
    </div>;
};




export default IntroItem;
