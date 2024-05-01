import { HeadFC, PageProps } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import { backgroundColorGreen, colorLigthGrey } from "../../styles/theme";
import PictoConsommateur from "../../images/rejoindre/consommateurs/picto_consommateur_gris.png";
import RapportezVosBouteilles from "../../components/join/consommateurs/rapportez";
import RayonImg from "../../images/rejoindre/consommateurs/rayon.jpg";
import RayonImgDesktop from "../../images/rejoindre/consommateurs/rayon_desktop.jpg";
import Insructions from "../../components/join/consommateurs/instructions";

const MagasinsJoinPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      {/* <div
        style={{
          ...backgroundColorGreen,
          ...colorLigthGrey,
        }}
        className="h-40 lg:h-52 flex flex-col justify-center"
      >
        <div className="flex gap-5 justify-center items-center">
          <img
            className="h-9 relative top-3 hidden md:visible"
            src={PictoConsommateur}
            alt="Pictogramme consommateur"
          />
          <h1 className="uppercase text-center">Consommateurs</h1>
        </div>
      </div> */}
      <RapportezVosBouteilles />
      <img
        className="w-full lg:hidden"
        src={RayonImg}
        alt="Rayon boisson consignée"
      />
      <img
        className="w-full hidden lg:block"
        src={RayonImgDesktop}
        alt="Rayon boisson consignée"
      />
      <Insructions />
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <SEO
    title="L'INCASSABLE | Rejoindre la filière | Consommateurs"
    pathname="/join/consommateurs"
  />
);

export default MagasinsJoinPage;
