import React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Hero from "../components/home/hero";
import Mission from "../components/home/mission";
import Section from "../components/section";
import { backgroundColorLightGrey, decimaMonoBold } from "../styles/theme";
import Join from "../components/home/join";
import Loop from "../components/home/loop";
import Testimony from "../components/home/testimony";
import Ecology from "../components/home/ecology";
import Indicateurs from "../components/home/indicateurs";
import Reglementation from "../components/home/reglementation";
import Accompagnement from "../components/home/accompagnement";
import Fonctionnement from "../components/home/fonctionnement";
import Partners from "../components/home/partners";
import BandeauBouteilles from "../images/home/bandeau_bouteilles.jpg";
import BandeauBouteillesMobile from "../images/home/bandeau_bouteilles_mobile.jpg";

const IndexPage: React.FC<PageProps<Queries.HomePageQuery>> = ({ data }) => {
  return (
    <Layout>
      <Hero />
      <Mission />
      <Section style={{ ...backgroundColorLightGrey }}>
        <div className="flex justify-center">
          <div className="flex flex-col gap-2" style={{ ...decimaMonoBold }}>
            <div className="text-4xl text-center">COLLECTER</div>
            <div className="text-4xl text-center">TRIER</div>
            <div className="text-4xl text-center">LAVER</div>
            <div className="text-4xl text-center">RÉEMPLOYER</div>
          </div>
        </div>
      </Section>
      <Join />
      <Ecology />
      <Fonctionnement />
      <img
        className="w-full hidden md:block"
        src={BandeauBouteilles}
        alt="Bouteilles"
      />
      <img
        className="w-full block md:hidden"
        src={BandeauBouteillesMobile}
        alt="Bouteilles"
      />
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
