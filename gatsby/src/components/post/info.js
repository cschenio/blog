import * as React from "react";
import { Link } from "gatsby";

import Avatar from "../avatar";

import * as styles from "./info.module.css";

const PostInfo = ({ date, author }) => {
  const authorDateBlock = (
    <div className={styles.author}>
      <Link className={styles.authorName} to={`/editors/${author.slug}`}>
        <div>{ author.fullName }</div>
      </Link>
      <div className={styles.date}>{ date }</div>
    </div>
  );

  return (
    <div className={styles.info}>
      <Avatar author={author} />
      { authorDateBlock }
    </div>
  );
};

export default PostInfo;
