import React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Hero from "../components/home/hero";
import Mission from "../components/home/mission";
import Section from "../components/section";
import { backgroundColorGrey, decimaMonoBold } from "../styles/theme";
import Join from "../components/home/join";
import Loop from "../components/home/loop";
import Testimony from "../components/home/testimony";
import Ecology from "../components/home/ecology";
import Indicateurs from "../components/home/indicateurs";
import Reglementation from "../components/home/reglementation";
import Accompagnement from "../components/home/accompagnement";
import Fonctionnement from "../components/home/fonctionnement";
import Partners from "../components/home/partners";

const IndexPage: React.FC<PageProps<Queries.HomePageQuery>> = ({ data }) => {
  return (
    <Layout>
      <Hero />
      <Mission />
      <Section style={{ ...backgroundColorGrey }}>
        <div className="flex justify-center">
          <div
            className="flex flex-col lg:flex-row lg:space-x-10 space-y-4 lg:space-y-0 justify-center"
            style={{ ...decimaMonoBold }}
          >
            <div className="text-5xl">COLLECTER</div>
            <div className="text-5xl">TRIER</div>
            <div className="text-5xl">LAVER</div>
            <div className="text-5xl">RÉEMPLOYER</div>
          </div>
        </div>
      </Section>
      <Join />
      <Ecology />
      <Fonctionnement />
      <Section style={{ ...backgroundColorGrey }}>
        <div></div>
      </Section>
      <Loop />
      <Indicateurs collected_bottles={data.websiteYaml!.collected_bottles!} />
      <Reglementation />
      <Accompagnement />
      <Testimony />
      <Partners />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO />;

export const query = graphql`
  query HomePage {
    websiteYaml {
      ...Indicateurs
    }
  }
`;
