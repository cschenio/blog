import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import * as styles from "./info.module.css";

const PostInfo = ({ date, author }) => {
  const image = getImage(author.avatar.localFile);
  const avatarBlock = (
    <Link to={`/editors/${author.user.username}`}>
      <GatsbyImage
        className={styles.avatar}
        image={image}
        alt={"avatar of " + author.fullName} />
    </Link>
  );


  const authorDateBlock = (
    <div className={styles.author}>
      <Link className={styles.authorName} to={`/editors/${author.user.username}`}>
        <div>{ author.fullName }</div>
      </Link>
      <div className={styles.date}>{ date }</div>
    </div>
  );

  return (
    <div className={styles.info}>
      { avatarBlock }
      { authorDateBlock }
    </div>
  );
};

export default PostInfo;
