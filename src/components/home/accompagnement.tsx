import React from "react";
import Section from "../section";
import { backgroundColorGrey, linkStyle } from "../../styles/theme";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

linkStyle;

const Accompagnement: React.FC = () => {
  return (
    <Section style={{ ...backgroundColorGrey }}>
      <div className="flex space-x-20 justify-center">
        <div>
          <StaticImage
            className="shrink-0"
            src="../../images/home/picto_reemploi.png"
            alt="Pictogramme réemploi"
            width={100}
          />
        </div>
        <div>
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
