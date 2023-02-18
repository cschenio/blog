import * as React from "react";

import * as styles from "./info.module.css";

const PostInfo = ({ date, author, avatar }) => {
  let avatarBlock;
  if(avatar) {
    avatarBlock = <img className={styles.avatar} src="http://via.placeholder.com/100x100"/>
  } else {
    avatarBlock = <img className={styles.avatar} src="http://via.placeholder.com/100x100"/>
  }

  const authorDateBlock = (
    <div className={styles.author}>
      <div className={styles.authorName}>{ author }</div>
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
