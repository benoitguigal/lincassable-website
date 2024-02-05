import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./faq.css";

const Faq = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { id: { eq: "faq" } }) {
        html
      }
    }
  `);

  const { html } = markdownRemark;
  return (
    <div
      className="pb-5 pt-20 px-10 md:px-28 border"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Faq;
