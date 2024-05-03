import { HeadFC, PageProps, graphql } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import {
  backgroundColorGreen,
  colorLigthGrey,
  navHeight,
} from "../../styles/theme";
import DevenirPointDeCollecte from "../../components/join/magasins/point-de-collecte";
import Consigne from "../../components/join/magasins/consigne";
import Benefices from "../../components/join/magasins/benefices";
import MiseEnPlace from "../../components/join/magasins/mise-en-place";
import PictoMagasin from "../../images/rejoindre/magasins/picto_magasin_gris.png";
import Accompagnement from "../../components/home/accompagnement";
import Partners from "../../components/partners";

const MagasinsJoinPage: React.FC<PageProps<Queries.MagasinsJoinPageQuery>> = ({
  data,
}) => {
  return (
    <Layout>
      <div style={{ paddingTop: navHeight }}>
        <h1 className="uppercase text-center mt-16">Distributeurs</h1>
        <DevenirPointDeCollecte />
        <Consigne />
        <Benefices />
        <MiseEnPlace />
        <Partners
          allPartnersYaml={data.allPartnersYaml}
          title="Distributeurs partenaires"
          type="distributeur"
          link={{
            to: "/carte",
            text: "Découvrez la carte des points de vente",
          }}
        />
        <Accompagnement type="distributeur" />
      </div>
    </Layout>
  );
};

export const Head: HeadFC = ({ location }) => (
  <SEO
    title="L'INCASSABLE | Rejoindre la filière | Magasins"
    pathname={location.pathname}
  />
);

export default MagasinsJoinPage;

export const query = graphql`
  query MagasinsJoinPage {
    ...Partners
  }
`;
