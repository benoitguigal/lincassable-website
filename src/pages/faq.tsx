import React from "react";
import { HeadFC, PageProps } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";

const FAQPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div>FAQ</div>
    </Layout>
  );
};

export default FAQPage;

export const Head: HeadFC = () => <SEO />;
