import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/layout/layout";
import Post from "../../components/post";

function PostPage({ data, location }) {
  const { strapiPost, site } = data;
  const siteTitle = site.siteMetadata?.title || `Title`;
  return (
    <Layout location={location} title={siteTitle}>
      <Post post={strapiPost}/>
    </Layout>
  );
};

export default PostPage;

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }

    strapiPost(slug: { eq: $slug }) {
      id
      title
      slug
      date(formatString: "MMMM DD, YYYY")
      body{
        data{
          id
          childMarkdownRemark{
            id
            html
          }
        }
      }
    }
  }
`;
