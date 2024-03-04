import React from "react";
import { HeadFC, PageProps } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";

const AssociationPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div>Association</div>
    </Layout>
  );
};

export default AssociationPage;

export const Head: HeadFC = () => <SEO />;
