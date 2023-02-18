import * as React from "react";

import PostInfo from "./post/info";

import * as styles from "./post.module.css";

const Post = ({ post }) => {
  const author = post.author || "Author Chen";

  return (
    <article className={styles.post}>
      <h2>{post.title}</h2>
      <PostInfo author={author} date={post.date} avatar={true} />
      <div className={styles.body} dangerouslySetInnerHTML={{ __html: post.body.data.childMarkdownRemark.html }}/>
    </article>
  );
};

export default Post;
