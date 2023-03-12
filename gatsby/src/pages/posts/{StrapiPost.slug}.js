import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/layout/layout";
import Post from "../../components/post";
import Seo from "../../components/seo";


function PostPage({ data, location }) {
  const { strapiPost, site } = data;
  const siteTitle = site.siteMetadata?.title || `Title`;
  return (
    <Layout title={siteTitle}>
      <Post post={strapiPost} />
    </Layout>
  );
};

export default PostPage;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ data }) => <Seo title={data.strapiPost?.title} />;

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
      body {
        data {
          id
          childMarkdownRemark {
            id
            html
          }
        }
      }
      author {
        fullName
        slug
        avatar {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 100)
            }
          }
        }
      }
    }
  }
`;
