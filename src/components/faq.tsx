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
      className="md:py-16 py-20 px-10 md:px-28"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Faq;
