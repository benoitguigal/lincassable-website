import { HeadFC, PageProps } from "gatsby";
import React from "react";
import SEO from "../../components/seo";
import { navHeight } from "../../styles/theme";
import Layout from "../../components/layout";
import Timeline from "../../components/timeline";

const Activite: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div style={{ paddingTop: navHeight }}>En construction</div>;
      <Timeline />
    </Layout>
  );
};

export default Activite;

export const Head: HeadFC = () => (
  <SEO title="L'INCASSABLE | Notre activité" pathname="/projet/activite" />
);
