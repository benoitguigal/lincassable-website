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
import DevenirPointDeCollecte from "../../components/join/magasins/point-de-collecte";
import Consigne from "../../components/join/magasins/consigne";
import Benefices from "../../components/join/magasins/benefices";
import MiseEnPlace from "../../components/join/magasins/mise-en-place";
import Partners from "../../components/join/magasins/partners";
import PictoMagasin from "../../images/rejoindre/magasins/picto_magasin_gris.png";
import Accompagnement from "../../components/home/accompagnement";

const MagasinsJoinPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div
        style={{
          ...backgroundColorGreen,
          ...colorLigthGrey,
        }}
        className="h-40 lg:h-52 flex flex-col justify-center"
      >
        <div className="flex gap-5 justify-center items-center">
          <img
            className="h-9 relative top-3 hidden md:visible"
            src={PictoMagasin}
            alt="Pictogramme producteur"
          />
          <h1 className="uppercase text-center">Magasins</h1>
        </div>
      </div>
      <DevenirPointDeCollecte />
      <Consigne />
      <Benefices />
      <MiseEnPlace />
      <Partners />
      <Accompagnement type="distributeur" />
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
