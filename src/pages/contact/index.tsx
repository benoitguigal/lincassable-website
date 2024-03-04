import React from "react";
import { HeadFC, PageProps } from "gatsby";
import SEO from "../../components/seo";
import Layout from "../../components/layout";

const ContactPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div>Contact</div>
    </Layout>
  );
};

export default ContactPage;

export const Head: HeadFC = () => <SEO />;
