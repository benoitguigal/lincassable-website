import { HeadFC, PageProps } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import RapportezVosBouteilles from "../../components/join/consommateurs/rapportez";
import RayonImg from "../../images/rejoindre/consommateurs/rayon.jpg";
import RayonImgDesktop from "../../images/rejoindre/consommateurs/rayon_desktop.jpg";
import Insructions from "../../components/join/consommateurs/instructions";
import { navHeight } from "../../styles/theme";

const MagasinsJoinPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div style={{ paddingTop: navHeight }}>
        <h1 className="uppercase text-center mt-16">Consommateurs</h1>
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
      </div>
    </Layout>
  );
};

export const Head: HeadFC = ({ location }) => (
  <SEO
    title="L'INCASSABLE | Rejoindre la filière | Consommateurs"
    pathname={location.pathname}
  />
);

export default MagasinsJoinPage;
