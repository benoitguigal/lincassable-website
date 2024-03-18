import React from "react";
import { HeadFC, PageProps } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Hero from "../components/home/hero";
import Mission from "../components/home/mission";
import Section from "../components/section";
import { backgroundColorGrey, decimaMonoBold } from "../styles/theme";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Hero />
      <Mission />
      <Section style={{ ...backgroundColorGrey }}>
        <div
          className="flex mx-auto space-x-6 justify-center"
          style={{ ...decimaMonoBold }}
        >
          <div className="text-5xl">COLLECTER</div>
          <div className="text-5xl">TRIER</div>
          <div className="text-5xl">LAVER</div>
          <div className="text-5xl">RÉEMPLOYER</div>
        </div>
      </Section>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO />;
