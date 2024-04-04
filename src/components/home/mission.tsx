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
          <h1>CONSIGNE DE BOUTEILLES</h1>
          <div className="text-xl mt-6">
            L’INCASSABLE développe une filière de réemploi de contenants en
            verre en Région Sud pour réduire la production de déchets liés aux
            emballages à usage unique.
          </div>
          <div className="mt-6">
            <Link className="text-xl" style={{ ...linkStyle }} to="/carte">
              Trouver des bouteilles consignées
            </Link>
          </div>
        </div>
        <div>
          <StaticImage
            alt="Casier et bouteille"
            src="../../images/home/casier_bouteille.png"
          />
        </div>
      </div>
    </Section>
  );
};

export default Mission;
