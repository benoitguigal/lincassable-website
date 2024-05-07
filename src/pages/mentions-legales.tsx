import { HeadFC, PageProps, graphql } from "gatsby";
import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import { navHeight } from "../styles/theme";
import Section from "../components/section";

const MentionsLegales: React.FC<
  PageProps<Queries.MentionsLeaglesPageQuery>
> = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark!;

  return (
    <Layout>
      <div style={{ paddingTop: navHeight }}>
        <div className="w-4/5 m-auto">
          <h1 className="uppercase text-center mt-10">{frontmatter?.title}</h1>
          <Section>
            <div dangerouslySetInnerHTML={{ __html: html! }} />
          </Section>
        </div>
      </div>
    </Layout>
  );
};

export const Head: HeadFC = ({ location }) => (
  <SEO title="L'INCASSABLE | Mentions légales" pathname={location.pathname} />
);

export default MentionsLegales;

export const query = graphql`
  query MentionsLeaglesPage {
    markdownRemark(frontmatter: { id: { eq: "mentions-legales" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
