import * as React from "react";

import * as styles from "./post.module.css";

const Post = ({ post }) => {
  const author = post.author || "AUTHOR";

  return (
    <article className={styles.post}>
      <h2>{post.title} <span className={styles.subtitle}> by {author}</span></h2>
      <div className={styles.dateBlock}> {post.date} </div>
      <div dangerouslySetInnerHTML={{ __html: post.body.data.childMarkdownRemark.html }}/>
    </article>
  );
};

export default Post;
