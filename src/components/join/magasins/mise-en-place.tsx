import React from "react";
import { backgroundColorLightGrey, titleMargin } from "../../../styles/theme";
import Section from "../../section";
import Casier from "../../../images/rejoindre/magasins/casier.png";
import ArrowRight from "../../../images/rejoindre/producteurs/right.png";
import ArrowLeft from "../../../images/rejoindre/producteurs/left.png";

const stockage = "Prévoir un espace de stockage pour les casiers.";
const communication = "Mettre en place une communication adaptée.";
const logiciel = "Ajouter la consigne sur votre logiciel de caisse.";

const MiseEnPlace: React.FC = () => {
  return (
    <Section style={{ ...backgroundColorLightGrey }}>
      <h2 className="uppercase text-center" style={{ ...titleMargin }}>
        Mise en place du dispositif de consigne en magasin
      </h2>
      <div className="text-center">
        La mise en place de la consigne en magasin, c'est très simple :
      </div>
      <div className="hidden md:grid grid-cols-6 gap-x-6 mt-16 w-full">
        <div className="col-span-2 flex gap-5 h-full items-center justify-end">
          <div className="font-bold text-right">{stockage}</div>
          <img src={ArrowRight} className="h-14" alt="flèche droite" />
        </div>
        <div className="w-full col-span-2">
          <img
            src={Casier}
            height={500}
            className="shrink-0 m-auto"
            alt="casier bouteille"
          />
        </div>
        <div className="col-span-2 h-full flex flex-col gap-10 justify-center">
          <div className="flex gap-5 items-center">
            <img src={ArrowLeft} className="h-14" alt="flèche gauche" />
            <div className="font-bold text-left">{communication}</div>
          </div>
          <div className="flex gap-5 items-center">
            <img src={ArrowLeft} className="h-14" alt="flèche gauche" />
            <div className="font-bold text-left">{logiciel}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 md:hidden w-full items-center">
        <div className="w-1/2 mt-16">
          <img
            src={Casier}
            className="shrink-0 w-auto m-auto mb-5"
            alt="casier bouteille"
          />
        </div>
        <div className="font-bold text-left">{stockage}</div>
        <div className="font-bold text-left">{communication}</div>
        <div className="font-bold text-left">{logiciel}</div>
      </div>
    </Section>
  );
};

export default MiseEnPlace;
