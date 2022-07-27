import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Faq from "../components/faq";

const FaqPage = () => {
  return (
    <Layout>
      <SEO title="FAQ" />
      <Faq />
    </Layout>
  );
};

export default FaqPage;
