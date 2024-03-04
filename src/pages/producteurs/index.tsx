import React from "react";
import { HeadFC, PageProps } from "gatsby";
import SEO from "../../components/seo";
import Layout from "../../components/layout";

const ProducteursPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div>Producteurs</div>
    </Layout>
  );
};

export default ProducteursPage;

export const Head: HeadFC = () => <SEO />;
