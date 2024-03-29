import React from "react";
import Section from "../section";
import { StaticImage } from "gatsby-plugin-image";

const height = 70;

const Partners: React.FC = () => {
  return (
    <Section>
      <h1 className="uppercase">Ils soutiennent la filière</h1>
      <div className="grid grid-cols-1 lg:grid-cols-6 justify-items-center lg:space-x-6 space-y-8 lg:space-y-0 mt-16">
        <div className="flex justify-center">
          <StaticImage
            alt="ADEME"
            src="../../images/home/partenaires/ademe.png"
            height={height}
          />
        </div>

        <div className="m-auto">
          <StaticImage
            alt="Région PACA"
            src="../../images/home/partenaires/region_sud.png"
            height={height}
          />
        </div>
        <div className="m-auto">
          <StaticImage
            alt="Métropole Aix Marseille Provence"
            src="../../images/home/partenaires/metropole.png"
            height={height}
          />
        </div>
        <div className="m-auto">
          <StaticImage
            alt="Ville de Marseille"
            src="../../images/home/partenaires/ville_marseille.png"
            height={height}
          />
        </div>
        <div className="m-auto">
          <StaticImage
            alt="Fondation Macif"
            src="../../images/home/partenaires/macif.png"
            height={height}
          />
        </div>
        <div className="m-auto">
          <StaticImage
            alt="France Active"
            src="../../images/home/partenaires/france_active.png"
            height={height}
          />
        </div>
      </div>
    </Section>
  );
};

export default Partners;
