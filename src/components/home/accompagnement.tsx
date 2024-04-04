import React from "react";
import Section from "../section";
import { backgroundColorGrey, linkStyle } from "../../styles/theme";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import PictogrammeRemploi from "../../images/home/picto_reemploi.png";

linkStyle;

const Accompagnement: React.FC = () => {
  return (
    <Section style={{ ...backgroundColorGrey }}>
      <div className="flex flex-col lg:flex-row gap-x-10 gap-y-6 lg:justify-center lg:items-center">
        <img
          className="max-w-32 m-auto lg:m-0"
          src={PictogrammeRemploi}
          alt="Pictogramme réemploi"
        />
        <div className="text-center lg:text-left">
          <h1>ON VOUS ACCOMPAGNE</h1>
          <div className="mt-6">
            Vous êtes metteur en marché et avez un projet de réemploi que vous
            souhaitez faire financer ? <br /> L’INCASSABLE vous accompagne.
          </div>
          <div className="mt-6">
            <Link style={{ ...linkStyle }} to="/">
              Contactez-nous
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Accompagnement;
