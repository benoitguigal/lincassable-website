import React from "react";
import { backgroundColorLightGrey, titleMargin } from "../../../styles/theme";
import Section from "../../section";
import BouteilleMaou from "../../../images/rejoindre/producteurs/bouteille-maou.png";
import ArrowRight from "../../../images/rejoindre/producteurs/right.png";
import ArrowLeft from "../../../images/rejoindre/producteurs/left.png";

const Standard: React.FC = () => (
  <div>
    <div className="font-bold">Bouteilles standardisées</div>
    <div>
      Bouteille spécifique pour le réemploi par typologie de boisson selon des
      standards nationaux.
    </div>
  </div>
);

const Communication: React.FC = () => (
  <div>
    <div className="font-bold">Communication spécifique</div>
    <div>
      Pictogramme national du réemploi intégré sur les étiquettes et pastille de
      consignation L'INCASSABLE.
    </div>
  </div>
);

const Etiquette: React.FC = () => (
  <div className="text-left">
    <div>
      <div className="font-bold">Étiquettes adaptées</div>
      <div>
        Caractéristiques techniques du papier, de l'adhésif et de l'impression
        permettant un retrait des étiquettes lors du lavage.
      </div>
    </div>
  </div>
);

const MiseEnPlace: React.FC = () => {
  return (
    <Section style={{ ...backgroundColorLightGrey }}>
      <h2 className="uppercase text-center" style={{ ...titleMargin }}>
        Mise en place du réemploi de vos bouteilles
      </h2>
      <div className="text-center">
        La mise en place du réemploi de ses bouteilles implique pour le
        producteur de se conformer à certains standards techniques qui
        concernent le choix de ses matières sèches :
      </div>
      <div className="hidden md:grid grid-cols-5 mt-16 w-full">
        <div className="col-span-2 flex gap-5 h-full items-center">
          <div className="text-right">
            <Standard />
          </div>
          <img src={ArrowRight} className="h-14" alt="flèche droite" />
        </div>
        <div className="w-full">
          <img
            src={BouteilleMaou}
            className="h-80 lg:h-96 shrink-0 w-auto m-auto"
            alt="bouteille réemployable"
          />
        </div>
        <div className="col-span-2 h-full flex flex-col justify-center gap-10">
          <div className="flex gap-5">
            <img src={ArrowLeft} className="h-14" alt="flèche gauche" />
            <div className="text-left">
              <Communication />
            </div>
          </div>
          <div className="flex gap-5">
            <img src={ArrowLeft} className="h-14" alt="flèche gauche" />
            <Etiquette />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 md:hidden">
        <div className="w-full mt-16">
          <img
            src={BouteilleMaou}
            className="h-80 lg:h-96 shrink-0 w-auto m-auto mb-5"
            alt="bouteille réemployable"
          />
        </div>
        <Standard />
        <Communication />
        <Etiquette />
      </div>
    </Section>
  );
};

export default MiseEnPlace;
