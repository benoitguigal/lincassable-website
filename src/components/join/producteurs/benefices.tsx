import React from "react";
import {
  backgroundColorLightGrey,
  colorLigthGrey,
  linkStyle,
  titleMargin,
} from "../../../styles/theme";
import Section from "../../section";
import BulletPoint from "../../bullet-point";
import QuoteOpenPictogramme from "../../../images/home/quote_open.png";
import QuoteClosePictogramme from "../../../images/home/quote_close.png";

const Benefices: React.FC = () => {
  return (
    <Section style={{ ...backgroundColorLightGrey }}>
      <h2 style={{ ...titleMargin }} className="uppercase text-center">
        Les bénéfices du réemploi
      </h2>
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-10 lg:justify-between">
        <img
          className="w-12 lg:w-auto lg:h-16"
          alt="Ouvrez les guillemets"
          src={QuoteOpenPictogramme}
        />
        <blockquote className="text-xl text-center" cite="ademe">
          L’utilisation d’une bouteille en verre peut représenter 30% à 40% de
          l’empreinte carbone d’une bouteille de vin ou de bière !
        </blockquote>
        <img
          className="w-12 lg:w-auto lg:h-16 self-end"
          alt="Ouvrez les guillemets"
          src={QuoteClosePictogramme}
        />
      </div>
      <a
        className="italic"
        style={{ ...linkStyle }}
        target="_blank"
        href={
          "https://librairie.ademe.fr/dechets-economie-circulaire/" +
          "6359-evaluation-environnementale-de-la-consigne-pour-le-" +
          "reemploi-des-emballages-en-verre-en-france.html"
        }
      >
        <div className="text-center  w-full md:w-2/3 xl:w-1/2 m-auto mt-5">
          Lorem ipsum
        </div>
      </a>
      <div className="mt-16">
        <div className="text-center">
          Le passage au réemploi des bouteilles permet pour les producteurs et
          indsutriels de la boisson de :
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-x-10 xl:gap-x-16 gap-y-6 mt-10">
          <BulletPoint
            number="1"
            primaryText="Réduire la production de déchets"
            secondaryText="liée à leur activité"
          />
          <BulletPoint
            number="2"
            primaryText="Répondre à la demande"
            secondaryText="des consommateurs"
          />
          <BulletPoint
            number="3"
            primaryText="Sécuriser des approvisionnements"
            secondaryText="et améliorer la résilience alimentaire des territoires"
          />
          <BulletPoint
            number="4"
            primaryText="Soutenir une économie locale"
            secondaryText="et favoriser les circuits courts"
          />
          <BulletPoint
            number="5"
            primaryText="Anticiper la législation"
            secondaryText="(Loi AGEC)"
          />
        </div>
      </div>
    </Section>
  );
};

export default Benefices;
