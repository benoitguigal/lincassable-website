import React from "react";
import Section from "../../section";
import { backgroundColorLightGrey, titleMargin } from "../../../styles/theme";
import PastilleConsigne from "../../../images/rejoindre/magasins/pastille_consigne.png";

const Consigne: React.FC = () => {
  return (
    <Section style={{ ...backgroundColorLightGrey }}>
      <h2 style={{ ...titleMargin }} className="text-center uppercase">
        La consigne monétaire
      </h2>
      <div className="grid grid-cols-3 items-center justify-center">
        <div>
          <img
            className="max-w-28 h-auto m-auto lg:m-0"
            src={PastilleConsigne}
            alt="Pastille consigne"
          />
        </div>
        <div className="col-span-2">
          <div>
            Une consigne monétaire de 0,50€ est appliquée sur l’ensemble des
            bouteilles consignées vendues dans les magasins partenaires. Elle
            est rendue aux consommateurs qui rapportent leurs bouteilles vides
            pour réemploi dans les magasins partenaires de la filière.
          </div>
          <div className="mt-4">
            La consigne monétaire permet de valoriser auprès des consommateurs
            le coût environnemental d’une bouteille. C’est aussi un réel levier
            pour améliorer les taux de retour des bouteilles en magasins.
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Consigne;
