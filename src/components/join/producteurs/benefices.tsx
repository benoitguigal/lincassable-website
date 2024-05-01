import React from "react";
import {
  backgroundColorGreen,
  backgroundColorLightGrey,
  colorLigthGrey,
  linkStyle,
  titleMargin,
} from "../../../styles/theme";
import Section from "../../section";
import BulletPoint from "../../bullet-point";
import QuoteOpenPictogramme from "../../../images/home/quote_open.png";
import QuoteClosePictogramme from "../../../images/home/quote_close.png";
import QuoteOpenPictogrammeGrey from "../../../images/home/quote_open_grey.png";
import QuoteClosePictogrammeGrey from "../../../images/home/quote_close_grey.png";

const Benefices: React.FC = () => {
  return (
    <>
      <Section style={{ ...backgroundColorLightGrey }}>
        <h2 style={{ ...titleMargin }} className="uppercase text-center">
          Les bénéfices du réemploi
        </h2>
        {/* <div className="flex flex-col lg:flex-row gap-2 lg:gap-10 lg:justify-between">
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
            "https://www.liberation.fr/societe/" +
            "les-bouteilles-de-vin-en-verre-sont-une-aberration-ecologique" +
            "-20221001_HNKFTTWBIRHKZF5CQDOI4NY2XA/"
          }
        >
          <div className="text-center  w-full md:w-2/3 xl:w-1/2 m-auto mt-2">
            Libération - « Les bouteilles de vin en verre [jetables] sont une
            aberration écologique »
          </div>
        </a> */}
        <div className="mt-16">
          <div className="text-center">
            L’intérêt du passage au réemploi, pour les producteurs et
            industriels de la boisson :
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-10 xl:gap-x-16 gap-y-6 mt-10 justify-items-center">
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
              primaryText="Anticiper la législation"
              secondaryText="(Loi AGEC)"
            />
          </div>
        </div>
      </Section>
      <Section style={{ ...backgroundColorGreen, ...colorLigthGrey }}>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-10 lg:justify-between">
          <img
            className="w-12 lg:w-auto lg:h-16"
            alt="Ouvrez les guillemets"
            src={QuoteOpenPictogrammeGrey}
          />
          <blockquote className="text-xl text-center" cite="ademe">
            L’utilisation d’une bouteille en verre peut représenter 30% à 40% de
            l’empreinte carbone d’une bouteille de vin ou de bière ! <br />
          </blockquote>
          <img
            className="w-12 lg:w-auto lg:h-16 self-end"
            alt="Ouvrez les guillemets"
            src={QuoteClosePictogrammeGrey}
          />
        </div>
        <a
          className="italic"
          style={{ ...linkStyle }}
          target="_blank"
          href={
            "https://www.liberation.fr/societe/" +
            "les-bouteilles-de-vin-en-verre-sont-une-aberration-ecologique" +
            "-20221001_HNKFTTWBIRHKZF5CQDOI4NY2XA/"
          }
        >
          <div className="text-center  w-full md:w-2/3 xl:w-1/2 m-auto mt-2">
            Libération - « Les bouteilles de vin en verre [à usage unique] sont
            une aberration écologique »
          </div>
        </a>
      </Section>
    </>
  );
};

export default Benefices;
