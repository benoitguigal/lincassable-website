import React from "react";
import { HeadFC, PageProps } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";

const CartePage: React.FC<PageProps> = () => {
  return (
    <Layout showFooter={false}>
      <div>Carte</div>
    </Layout>
  );
};

export default CartePage;

export const Head: HeadFC = () => <SEO />;
