import { HeadFC, PageProps, graphql } from "gatsby";
import React from "react";
import SEO from "../../components/seo";
import Layout from "../../components/layout";
import History from "../../components/projet/activite/history";
import Mission from "../../components/projet/activite/mission";
import CasierBouteilleDesktop from "../../images/projet/activite/casier_bouteille_desktop.jpg";
import CasierBouteilleMobile from "../../images/projet/activite/casier_bouteille_mobile.jpeg";
import { navHeight } from "../../styles/theme";
import CollecterTrierReemployer from "../../components/collecter-trier";
import Indicateurs from "../../components/indicateurs";
import Activite from "../../components/projet/activite/activite";

const ActivitePage: React.FC<PageProps<Queries.ActivitePageQuery>> = ({
  data,
}) => {
  return (
    <Layout>
      <div style={{ paddingTop: navHeight }}>
        <h1 className="uppercase text-center mt-16">activité</h1>
        <Mission />
        <img
          className="hidden md:block"
          src={CasierBouteilleDesktop}
          alt="Casier et bouteille"
        />
        <img
          className="md:hidden"
          src={CasierBouteilleMobile}
          alt="Casier et bouteille"
        />
        <Activite />
        <CollecterTrierReemployer />
        <History allTimelineYaml={data.allTimelineYaml} />
        <Indicateurs collected_bottles={data.websiteYaml!.collected_bottles!} />
      </div>
    </Layout>
  );
};

export default ActivitePage;

export const Head: HeadFC = () => (
  <SEO title="L'INCASSABLE | Notre activité" pathname="/projet/activite" />
);

export const query = graphql`
  query ActivitePage {
    ...History
    websiteYaml {
      ...Indicateurs
    }
  }
`;