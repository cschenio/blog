import * as React from "react";
import { Link, graphql } from "gatsby";

import Hero from "../components/homepage/hero";
import Seo from "../components/seo";
import IntroItem from "../components/introItem";
import Avatar from "../components/avatar";
import Spotlight from "../components/homepage/spotlight";
import Recommend from "../components/homepage/recommend";
import EditorList from "../components/homepage/editorList";
import Navigation from "../components/homepage/navigation";
import HomepageLayout from "../components/layout/homepageLayout";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allStrapiPost.nodes;
  const editors = data.allStrapiEditor.nodes;

  // TODO: use database to random get limit posts
  // Find the newest one
  const postNewest = posts[0];
  // Random find another one
  const randonIdx = Math.round(Math.random() * (posts.length-1))
  const postRandom = posts[randonIdx];

  return (
    <HomepageLayout>
      <Hero title={siteTitle} linkTo="/" />
      <Navigation />
      <Spotlight post1={postNewest} post2={postRandom} />
      <Recommend posts={posts} />
      <EditorList editors={editors} />
    </HomepageLayout>
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
    allStrapiPost(limit:12, sort:{fields:[date],order:DESC}) {
      nodes {
        title
        slug
        author{
          fullName
          slug
        }
        date(formatString: "YYYY-MM-DD")
        body{
          data{
            id
            body
            childMarkdownRemark{
              id
              html
            }
          }

        }
      }
    }
    allStrapiEditor {
      nodes {
        fullName
        slug
        avatar {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 250)
            }
          }
        }
      }
    }
  }
`;

