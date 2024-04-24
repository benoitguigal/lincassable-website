import { HeadFC, PageProps } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import { backgroundColorGreen, colorLigthGrey } from "../../styles/theme";
import Reemployer from "../../components/join/producteurs/reemployer";
import BandeauBouteille from "../../images/rejoindre/producteurs/bandeau-bouteilles.png";
import Benefices from "../../components/join/producteurs/benefices";
import MiseEnPlace from "../../components/join/producteurs/mise-en-place";
import Accompagnement from "../../components/home/accompagnement";
import Partners from "../../components/join/producteurs/partners";
import PictoProducteur from "../../images/rejoindre/producteurs/picto_producteurs_gris.png";

const ProducteursJoinPage: React.FC<PageProps> = () => {
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
            src={PictoProducteur}
            alt="Pictogramme producteur"
          />
          <h1 className="uppercase text-center">Producteurs</h1>
        </div>
      </div>
      <Reemployer />
      <Benefices />
      <div className="px-6 md:px-24 lg:px-32 xl:px-56 2xl:px-72 py-6">
        <img className="w-full" src={BandeauBouteille} alt="Bouteilles" />
      </div>
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
