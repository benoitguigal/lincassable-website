import React from "react";
import { HeadFC, PageProps, graphql, useStaticQuery } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";
import "../styles/faq.css";
import { navHeight } from "../styles/theme";

const FAQPage: React.FC<PageProps<Queries.FAQPageQuery>> = ({ data }) => {
  const { html } = data.markdownRemark!;

  return (
    <Layout>
      <div
        style={{ paddingTop: navHeight }}
        className="pb-5 mt-6 px-10 md:px-28 border"
        dangerouslySetInnerHTML={{ __html: html! }}
      />
    </Layout>
  );
};

export const Head: HeadFC = ({ location }) => (
  <SEO title="L'INCASSABLE | FAQ" pathname={location.pathname} />
);

export default FAQPage;

export const query = graphql`
  query FAQPage {
    markdownRemark(frontmatter: { id: { eq: "faq" } }) {
      html
    }
  }
`;
