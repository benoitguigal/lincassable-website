import React, { CSSProperties } from "react";
import { HeadFC, PageProps, graphql, useStaticQuery } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";
import "../styles/faq.css";
import { navHeight } from "../styles/theme";

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
        style={{ paddingTop: navHeight }}
        className="pb-5 mt-6 px-10 md:px-28 border"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  );
};

export const Head: HeadFC = ({ location }) => (
  <SEO title="L'INCASSABLE | FAQ" pathname={location.pathname} />
);

export default FAQPage;
