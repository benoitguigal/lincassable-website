import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./layout.css";
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
      className="py-5 px-10 md:px-28 border"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Faq;
