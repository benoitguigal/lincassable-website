import React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import SEO from "../../components/seo";
import Layout from "../../components/layout";
import slugify from "@sindresorhus/slugify";
import ActualiteCard from "../../components/actualite-card";
import { navHeight } from "../../styles/theme";

const ActualitesPage: React.FC<PageProps<Queries.ActualitesPageQuery>> = ({
  data,
}) => {
  const allMarkdownRemark = data.allMarkdownRemark;

  return (
    <Layout>
      <div style={{ paddingTop: navHeight }} className="mb-16">
        <h1 className="text-center uppercase mb-16 mt-16">Actualités</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center place-content-center max-w-4xl m-auto">
          {allMarkdownRemark.nodes.map((markdownRemark) => {
            return <ActualiteCard {...markdownRemark} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default ActualitesPage;

export const Head: HeadFC = () => (
  <SEO title="L'INCASSABLE | Actualités" pathname="/actus" />
);

export const query = graphql`
  query ActualitesPage {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/actus/" } }
      sort: { fileAbsolutePath: DESC }
    ) {
      nodes {
        ...ActualiteCard
      }
    }
  }
`;
