import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";

const FaqPage = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { id: { eq: "faq" } }) {
        html
      }
    }
  `);

  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <SEO title="FAQ" />
      <div
        className="md:py-16 py-20 px-10 "
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  );
};

export default FaqPage;
