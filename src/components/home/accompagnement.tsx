import React from "react";
import Section from "../section";
import { backgroundColorLightGrey, linkStyle } from "../../styles/theme";
import { Link } from "gatsby";
import PictogrammeRemploi from "../../images/home/picto_reemploi.png";

const Accompagnement: React.FC = () => {
  return (
    <Section style={{ ...backgroundColorLightGrey }}>
      <div className="flex flex-col lg:flex-row gap-x-10 gap-y-6 lg:justify-center lg:items-center">
        <img
          className="max-w-28 m-auto lg:m-0"
          src={PictogrammeRemploi}
          alt="Pictogramme réemploi"
        />
        <div className="text-center lg:text-left">
          <h2>ON VOUS ACCOMPAGNE</h2>
          <div className="mt-6">
            Vous êtes metteur en marché et avez un projet de réemploi ? <br />{" "}
            L’INCASSABLE peut vous accompagner dans cette démarche et son
            financement.
          </div>
          <div className="mt-6">
            <Link style={{ ...linkStyle }} to="/contact">
              Contactez-nous
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Accompagnement;
