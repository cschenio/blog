import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/layout/layout";
import Editor from "../../components/editor";

function EditorPage({ data }) {
  const { strapiEditor, site } = data;
  const siteTitle = site.siteMetadata?.title || `Title`;

  return (
    <Layout title={siteTitle}>
      <Editor editor={strapiEditor} />
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
      slug
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
            gatsbyImageData(width: 250)
          }
        }
      }
      posts {
        title
        slug
        date
      }
    }
  }
`;
