import React from "react";
import { GreySection } from "./section";
import AdemeImg from "../images/partners/LOGO PARTENAIRE_ADEME_vert.png";
import RegionImg from "../images/partners/LOGOS PARTENAIRES_Région sud_vert.png";
import MetropoleImg from "../images/partners/LOGOS PARTENAIRES_AMP_vert.png";
import MacifImg from "../images/partners/LOGOS PARTENAIRES_FONDATION MACIF_vert.png";
import VilleMarseilleImg from "../images/partners/LOGO PARTENAIRE_ville de marseille_vert.png";
import CiteoImg from "../images/partners/LOGO PARTENAIRE_Citeo_vert.png";

const Partners = () => (
  <GreySection>
    <h1 className="header decima-mono-bold md:text-center m-auto uppercase">
      Ils soutiennent la filière
    </h1>
    <div className="w-full mt-12 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 w-full m-auto justify-items-center items-center">
      <img src={AdemeImg} className="h-16 w-auto" alt="Ademe" />
      <img src={RegionImg} className="h-16 w-auto" alt="Région Sud" />
      <img src={MetropoleImg} className="h-16 w-auto" alt="AMP Métropole" />
      <img
        src={VilleMarseilleImg}
        className="h-14 w-auto"
        alt="Ville Marseille"
      />
      <img src={MacifImg} className="h-16 w-auto" alt="Fondation MACIF" />
      <img src={CiteoImg} className="h-8 w-auto" alt="CITEO" />
    </div>
  </GreySection>
);

export default Partners;
