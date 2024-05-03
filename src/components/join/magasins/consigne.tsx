import React from "react";
import Section from "../../section";
import { backgroundColorLightGrey, titleMargin } from "../../../styles/theme";
import PastilleConsigne from "../../../images/rejoindre/magasins/pastille_consigne.png";

const Consigne: React.FC = () => {
  return (
    <Section style={{ ...backgroundColorLightGrey }}>
      <div className="lg:w-4/5 m-auto flex flex-col md:flex-row  gap-x-20 gap-y-10 md:justify-center md:items-center">
        <div>
          <img
            className="max-w-28 h-auto m-auto lg:m-0"
            src={PastilleConsigne}
            alt="Pastille consigne"
          />
        </div>
        <div className="col-span-2">
          <h2 style={{ ...titleMargin }} className="uppercase">
            La consigne monétaire
          </h2>
          <div>
            Une consigne monétaire de 0,50€ est appliquée sur l’ensemble des
            bouteilles consignées vendues dans les magasins partenaires. Elle
            est rendue aux consommateurs qui rapportent leurs bouteilles vides
            pour réemploi dans les magasins partenaires de la filière.
          </div>
          <div className="mt-4">
            La consigne monétaire permet de valoriser auprès des consommateurs
            le coût environnemental d’une bouteille. C’est aussi un réel levier
            pour améliorer les taux de retour des bouteilles en magasin.
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Consigne;
