import * as React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../../components/layout/layout";

function EditorPage({ data }) {
  const { strapiEditor, site } = data;
  const siteTitle = site.siteMetadata?.title || `Title`;

  const { avatar, bio, fullName, posts } = strapiEditor;
  const image = getImage(avatar.localFile);

  return (
    <Layout title={siteTitle}>
      <h1>{ fullName }</h1>
      <GatsbyImage
        image={image}
        alt={"avatar of " + fullName} />
      <h2>Bio</h2>
      <div dangerouslySetInnerHTML={{ __html: bio.data.childMarkdownRemark.html }}/>
      <h2>Posts</h2>
      <ul>
        {
          posts.map(post => <li>
          <Link to={"/posts/" + post.slug}>{ post.title }</Link>
          </li>)
        }
      </ul>

    </Layout>
  );
};

export default EditorPage;

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
      }
    }

    strapiEditor(id: { eq: $id }) {
      fullName
      bio {
        data {
          id
          childMarkdownRemark {
            id
            html
          }
        }
      }
      avatar {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 300)
          }
        }
      }
      user {
        username
      }
      posts {
        title
        slug
      }
    }
  }
`;
