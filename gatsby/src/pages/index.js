import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import IntroItem from "../components/introItem";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allStrapiPost.nodes;

  // TODO: use database to find the latest post
  // TODO: use database to random get limit posts
  function compareDate(a, b){
    return a.date > b.date;
  }
  posts.sort(compareDate);
  // Find the newest one
  const postNewest = posts[0];
  // Random find another one
  const randonIdx = Math.round(Math.random() * (posts.length-1))
  const postRandom = posts[randonIdx];

  //test
  const markdowns = data.allMarkdownRemark;

  return (
    <Layout
      location={location}
      title={siteTitle}>

      <h3>Newest posts</h3>
      <IntroItem post={postNewest} kind={"Big"}/>
      <h3>Focus</h3>
      <IntroItem post={postRandom} kind={"Small"}/>
      <h3>Post List</h3>
      <ul>
      { posts.map((p) => (
        <li>
          <Link to={"/posts/" + p.slug}>{ p.title }</Link>
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
    allStrapiPost {
      nodes {
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
  }
`;

