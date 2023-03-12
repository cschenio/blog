import * as React from "react";

import * as styles from "./introItem.module.css";


const IntroItem = ({ post, kind }) => {
    if(kind === "Big"){
        return <div>
            "title:"{post.title}
            <br/>
            "date:"{post.date}
            <br/>
            "author:"{post.author?.fullName || "AUTHOR"}
            <br/>
            "body id:"{post.body.data.id}
            <br/>
            <div dangerouslySetInnerHTML={{ __html: post.body.data.childMarkdownRemark.html }}/>
            <br/>
            "kind:"{kind}
        </div>;
    } else if (kind === "Medium"){
        return <div>
            "title:"{post.title}
            <br/>
            "date:"{post.date}
            <br/>
            "author:"{post.author?.fullName || "AUTHOR"}
            <br/>
            "kind:"{kind}
        </div>;
    } else if (kind === "Small"){
        return <div>
            "title:"{post.title}
        </div>;
    } else{
        throw "kind is not in [Big, Medium, Small]";
    }
        
};




export default IntroItem;
