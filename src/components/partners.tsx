import React from "react";
import { GreySection } from "./section";
import AdemeImg from "../images/partners/ademe.png";
import RegionImg from "../images/partners/region.png";
import MetropoleImg from "../images/partners/metropole.png";
import MacifImg from "../images/partners/macif.png";
import VilleMarseilleImg from "../images/partners/ville-marseille.png";
import FranceActiveImg from "../images/partners/franceactive.png";

const Partners = () => (
  <GreySection>
    <h4 className="md:text-center m-auto uppercase">
      Ils soutiennent la filière
    </h4>
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
      <img src={FranceActiveImg} className="h-8 w-auto" alt="CITEO" />
    </div>
  </GreySection>
);

export default Partners;
