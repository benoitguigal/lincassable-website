import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./layout.css";

const Actualites = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/actus/" } }) {
        nodes {
          frontmatter {
            title
            image
          }
        }
      }
    }
  `);

  return (
    <div>
      {allMarkdownRemark.nodes.map((markdownRemark) => {
        return (
          <>
            <h2>{markdownRemark.frontmatter.title}</h2>
            <img src={markdownRemark.frontmatter.image} />
          </>
        );
      })}
    </div>
  );
};

export default Actualites;
