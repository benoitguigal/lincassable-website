import React from "react";
import Section from "../section";
import {
  backgroundColorLightGrey,
  decimaBold,
  linkStyle,
  titleMargin,
} from "../../styles/theme";
import Circle from "../circle";
import QuoteOpenPictogramme from "../../images/home/quote_open.png";
import QuoteClosePictogramme from "../../images/home/quote_close.png";

const circleSize = 30;
const padding = circleSize / 2;

type BulletPointProps = {
  number: string;
  primaryText: string;
  secondaryText: string;
};

const BulletPoint: React.FC<BulletPointProps> = ({
  number,
  primaryText,
  secondaryText,
}) => {
  return (
    <div className="flex flex-row lg:flex-col gap-x-6 items-center lg:items-start">
      <div>
        <Circle size={circleSize} text={number} fontSize={16} />
      </div>
      <div className="lg:mt-2">
        <div style={{ ...decimaBold }}>{primaryText}</div>
        {secondaryText ?? <div>{secondaryText}</div>}
      </div>
    </div>
  );
};

const Ecology: React.FC = () => {
  return (
    <Section style={{ ...backgroundColorLightGrey }}>
      <h2 style={{ ...titleMargin }} className="text-center">
        UNE NÉCESSITÉ ÉCOLOGIQUE ET ÉCONOMIQUE
      </h2>
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-10 lg:justify-between">
        <img
          className="w-12 lg:w-auto lg:h-16"
          alt="Ouvrez les guillemets"
          src={QuoteOpenPictogramme}
        />
        <blockquote className="text-xl text-center" cite="ademe">
          Un emballage en verre réemployable est plus avantageux sur le plan
          environnemental qu'un emballage en verre à usage unique dès la
          deuxième utilisation effective de l'emballage.
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
          ADEME : Évaluation environnementale de la consigne pour le réemploi
          des emballages en verre en France.
        </div>
      </a>
      <div className="mt-16">
        <div className="text-center">
          Le réemploi des emballages présente des avantages écologiques et
          économiques dans un contexte d’inflation des prix et de raréfaction
          des matières premieres. Ainsi, le réemploi, en alternative au
          recyclage, permet de :
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-10 xl:gap-x-16 gap-y-6 mt-6">
          <BulletPoint
            number="1"
            primaryText="Réduire l’empreinte environnementale"
            secondaryText="des emballages"
          />
          <BulletPoint
            number="2"
            primaryText="Réduire les déchets sauvages"
            secondaryText="par la mise en place d’un système de consignation"
          />
          <BulletPoint
            number="3"
            primaryText="Sécuriser des approvisionnements"
            secondaryText="et améliorer la résilience alimentaire des territoires"
          />
        </div>
      </div>
    </Section>
  );
};

export default Ecology;
