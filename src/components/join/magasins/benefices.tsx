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
    <Section>
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
          Plus de 9 Français sur 10 (92%) se déclarent favorables à la
          réintroduction d'un dispositif de consigne et ont une propension à
          réaliser le geste de déconsignation. <br />
          <br />
          Alors que le pouvoir d’achat est l’une des principales préoccupations
          des Français aujourd’hui, le système de la consigne ne fait l’objet
          d’aucun rejet d’ordre financier. Spontanément, les Français estiment
          que ce système aurait un impact neutre sur leur pouvoir d’achat voire
          même positif.
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
          "https://www.ipsos.com/fr-fr/les-francais-et-la-consigne-des-emballages-de-boissons"
        }
      >
        <div className="text-center  w-full md:w-2/3 xl:w-1/2 m-auto mt-2">
          Étude IPSOS - Les Français et la consigne des emballages de boissons
        </div>
      </a>
      <div className="mt-16">
        <div className="text-center">
          L’intérêt de la mise en place d'un système de consigne pour les
          magasins :
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-10 xl:gap-x-16 gap-y-6 mt-10 justify-items-center">
          <BulletPoint
            number="1"
            primaryText="Répondre aux attentes des consommateurs"
            secondaryText="en proposant des boissons en emballage consigné."
          />
          <BulletPoint
            number="2"
            primaryText="Soutenir une filière régionale"
            secondaryText="de réemploi d'emballages et renforcer l'attractivité de son magasin."
          />
          <BulletPoint
            number="3"
            primaryText="Fidéliser ses clients"
            secondaryText="qui sont incités à revenir en magasin pour effectuer le retour de l'emballage."
          />
        </div>
      </div>
    </Section>
  );
};

export default Benefices;
