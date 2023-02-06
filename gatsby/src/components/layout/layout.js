import * as React from "react";

import RootPathLayout from "./rootPathLayout";
import PageLayout from "./pageLayout";

import * as styles from "./layout.module.css";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  let content;
  if (isRootPath) {
    content = <RootPathLayout children={children} title={title} />;
  } else {
    content = <PageLayout children={children} title={title} />;
  }

  return (
    <div
      className={styles.wrapper}
      data-is-root-path={isRootPath}>
      {content}
      <footer className={styles.footer}>© {new Date().getFullYear()}, {title}</footer>
    </div>
  );
};

export default Layout;
