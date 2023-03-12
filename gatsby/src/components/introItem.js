import * as React from "react";
import { Link } from "gatsby";
import removeMd from "remove-markdown";
import * as styles from "./introItem.module.css";


const IntroItem = ({ post, kind }) => {
    const plainBody = removeMd(post.body.data.body).slice(0, 300) + "...";

    if(kind === "Big"){
        return <div>
            <Link to={"/posts/" + post.slug}>{ post.title }</Link>
            <br/>
            <Link to={"/editors/" + post.author.slug}>{ post.author.fullName }</Link>
            <span style={{color:"gray", fontSize:"12pt"}}>{post.date}</span>
            <br/>
            {plainBody}
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
            <Link to={"/posts/" + post.slug}>{ post.title }</Link>
            <br/>
            <span style={{color:"gray", fontSize:"12pt"}}>{post.date}</span>
        </div>;
    } else{
        throw "kind is not in [Big, Medium, Small]";
    }
        
};




export default IntroItem;
