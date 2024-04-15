import { HeadFC, PageProps } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import {
  backgroundColorGreen,
  colorLigthGrey,
  navHeight,
} from "../../styles/theme";
import Section from "../../components/section";
import Reemployer from "../../components/join/producteurs/reemployer";
import BandeauBouteille from "../../images/rejoindre/producteurs/bandeau-bouteilles.png";
import Benefices from "../../components/join/producteurs/benefices";
import MiseEnPlace from "../../components/join/producteurs/mise-en-place";
import Accompagnement from "../../components/home/accompagnement";
import Partners from "../../components/join/producteurs/partners";

const ProducteursJoinPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div style={{ paddingTop: navHeight, ...backgroundColorGreen }}>
        <Section style={{ ...colorLigthGrey }}>
          <h1 className="mb-10 uppercase text-center">Producteurs</h1>
        </Section>
      </div>
      <Reemployer />
      <Benefices />
      <Section>
        <img className="w-full" src={BandeauBouteille} alt="Bouteilles" />
      </Section>
      <MiseEnPlace />
      <Partners />
      <Accompagnement />
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <SEO
    title="L'INCASSABLE | Rejoindre la filière | Producteurs"
    pathname="/join/producteurs"
  />
);

export default ProducteursJoinPage;
