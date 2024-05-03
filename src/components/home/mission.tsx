import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Section from "../section";
import { Link } from "gatsby";
import { linkStyle } from "../../styles/theme";

const Mission: React.FC = () => {
  return (
    <Section>
      <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-16">
        <div className="lg:w-1/2 mx-auto">
          <h2>CONSIGNE DE BOUTEILLES</h2>
          <div className="mt-6 text-xl">
            L’INCASSABLE développe une filière de réemploi de bouteilles en
            verre en Région Sud pour réduire la production de déchets liés aux
            emballages à usage unique.
          </div>
          <div className="mt-6">
            <Link style={{ ...linkStyle }} to="/carte">
              Trouver des bouteilles consignées
            </Link>
          </div>
        </div>
        <div>
          <StaticImage
            alt="Casier et bouteille"
            src="../../images/home/casier_bouteille.png"
            loading="eager"
            placeholder="none"
          />
        </div>
      </div>
    </Section>
  );
};

export default Mission;
