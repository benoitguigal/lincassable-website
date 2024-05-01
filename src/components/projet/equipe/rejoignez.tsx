import React from "react";
import Section from "../../section";
import { backgroundColorLightGrey, linkStyle } from "../../../styles/theme";
import PictoReemploi from "../../../images/projet/equipe/picto_reemploi.png";
import { Link } from "gatsby";

const RejoinezNous: React.FC = () => {
  return (
    <div>
      <Section style={{ ...backgroundColorLightGrey }}>
        <div className="flex flex-col lg:flex-row gap-x-10 gap-y-6 lg:justify-center lg:items-center">
          <img
            className="max-w-20 m-auto lg:m-0"
            src={PictoReemploi}
            alt="Pictogramme pluie"
          />
          <div className="text-center lg:text-left">
            <h2 className="uppercase">Rejoignez-nous</h2>
            <div className="mt-6">
              Vous souhaitez rejoindre l'équipe ? <br /> Vous impliquer dans la
              filière en tant que bénévole ?
            </div>
            <div className="mt-6">
              <Link style={{ ...linkStyle }} to="/contact">
                Contactez-nous
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default RejoinezNous;
