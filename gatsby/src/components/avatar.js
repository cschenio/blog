import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import * as styles from "./avatar.module.css";

const Avatar = ({ author, swoosh }) => {
  const imageClassName = (swoosh) ? styles.avatarSwoosh : styles.avatar;

  const image = getImage(author.avatar.localFile);
  return (
    <Link to={`/editors/${author.slug}`}>
      <GatsbyImage
        className={imageClassName}
        image={image}
        alt={"avatar of " + author.fullName} />
    </Link>
  );
}

export default Avatar;
