import React from "react";
import Section from "../section";
import AdemeLogo from "../../images/home/partenaires/ademe.png";
import RegionLogo from "../../images/home/partenaires/region_sud.png";
import MetropoleLogo from "../../images/home/partenaires/metropole.png";
import VilleMarseilleLogo from "../../images/home/partenaires/ville_marseille.png";
import FondationMacifLogo from "../../images/home/partenaires/macif.png";
import FranceActiveLogo from "../../images/home/partenaires/france_active.png";
import classNames from "classnames";
import { titleMargin } from "../../styles/theme";

const logoClassName = classNames(["w-40", "h-auto"]);

const Partners: React.FC = () => {
  return (
    <Section>
      <h2 style={{ ...titleMargin }} className="uppercase">
        Ils soutiennent la filière
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 justify-items-center">
        <img className={logoClassName} alt="ADEME" src={AdemeLogo} />
        <img className={logoClassName} alt="Région PACA" src={RegionLogo} />
        <img
          className={logoClassName}
          alt="Métropole Aix Marseille Provence"
          src={MetropoleLogo}
        />
        <img
          className={logoClassName}
          alt="Ville de Marseille"
          src={VilleMarseilleLogo}
        />
        <img
          className={logoClassName}
          alt="Fondation Macif"
          src={FondationMacifLogo}
        />
        <img
          className={logoClassName}
          alt="France Active"
          src={FranceActiveLogo}
        />
      </div>
    </Section>
  );
};

export default Partners;
