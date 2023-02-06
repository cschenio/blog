import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout/layout";
import Seo from "../components/seo";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allStrapiPost.nodes;
  return (
    <Layout
      location={location}
      title={siteTitle}>
      <ul>
        { posts.map((p) => (
          <li>
            <Link to={p.slug}>{ p.title }</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default BlogIndex;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
    allStrapiPost {
      nodes {
        title
        slug
      }
    }
  }
`;
