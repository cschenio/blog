import * as React from "react";
import { Link } from "gatsby";

import Card from "./card";
import Avatar from "./avatar";

import * as styles from "./editor.module.css";

const Editor = ({ editor }) => {
  const { bio, fullName, posts } = editor;

  // TODO: use database to find the latest post
  // TODO: use database to random get limit posts
  function compareDate(a, b){
    return a.date > b.date;
  }
  posts.sort(compareDate);

  return (
    <>
      <Card>
        <div>
          <h1 className={styles.editorName}>{ fullName }</h1>
          <Avatar author={editor} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: bio.data.childMarkdownRemark.html }}/>
      </Card>
      <h2>Posts</h2>
      <ul>
        {
          posts.map(post => <li>
            <Link to={"/posts/" + post.slug}>{ post.title }</Link>
            <div>
              { post.date }
            </div>
          </li>)
        }
      </ul>
    </>
  );
};

export default Editor;
