import React from "react";
import { HeadFC, PageProps } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";

const ActualitesPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div>Actualités</div>
    </Layout>
  );
};

export default ActualitesPage;

export const Head: HeadFC = () => <SEO />;
