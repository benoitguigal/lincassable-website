import React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Hero from "../components/home/hero";
import Mission from "../components/home/mission";
import Join from "../components/home/join";
import Loop from "../components/home/loop";
import Testimony from "../components/home/testimony";
import Ecology from "../components/home/ecology";
import Indicateurs from "../components/indicateurs";
import Reglementation from "../components/home/reglementation";
import Accompagnement from "../components/home/accompagnement";
import Fonctionnement from "../components/home/fonctionnement";
import Partners from "../components/partners";
import BandeauBouteilles from "../images/home/bandeau_bouteilles.jpg";
import BandeauBouteillesMobile from "../images/home/bandeau_bouteilles_mobile.jpg";
import CollecterTrierReemployer from "../components/collecter-trier";

const IndexPage: React.FC<PageProps<Queries.HomePageQuery>> = ({ data }) => {
  return (
    <Layout>
      <Hero />
      <Mission />
      <CollecterTrierReemployer />
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
      <Partners
        allPartnersYaml={data.allPartnersYaml}
        title="Ils soutiennent la filière"
        type="financier"
        bw={true}
      />
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
    ...Partners
  }
`;
