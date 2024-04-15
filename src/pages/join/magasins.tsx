import { HeadFC, PageProps } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import { navHeight } from "../../styles/theme";

const MagasinsJoinPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div style={{ paddingTop: navHeight }}></div>
      <h1>Magasins</h1>
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <SEO
    title="L'INCASSABLE | Rejoindre la filière | Magasins"
    pathname="/join/magasins"
  />
);

export default MagasinsJoinPage;
