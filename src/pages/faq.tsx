import React from "react";
import { HeadFC, PageProps, graphql, useStaticQuery } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";

const FAQPage: React.FC<PageProps> = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { id: { eq: "faq" } }) {
        html
      }
    }
  `);

  const { html } = markdownRemark;

  return (
    <Layout>
      <div
        className="pb-5 pt-20 px-10 md:px-28 border"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <SEO title="L'INCASSABLE | En savoir plus" pathname="/faq" />
);

export default FAQPage;
