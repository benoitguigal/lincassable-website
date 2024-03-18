import * as React from "react";
import { GreySection } from "./section";
import GuillemetPictogramme from "../images/guillemet.png";

const AdemeCitation = () => (
  <GreySection>
    <div className="flex gap-3">
      <img src={GuillemetPictogramme} className="h-10" />
      <div>
        <div className="text-2xl italic">
          Sur la plan environnemental, un emballage en verre réemployable est
          systématiquement plus avantageux qu’un emballage en verre à usage
          unique dès la deuxième utilisation effective de l’emballage. Le
          réemploi est globalement favorable pour toutes les distances de
          transport considérées.
        </div>
        <div className="mt-3 text-xl">
          <a
            href="https://librairie.ademe.fr/dechets-economie-circulaire/6359-evaluation-environnementale-de-la-consigne-pour-le-reemploi-des-emballages-en-verre-en-france.html"
            target="_blank"
          >
            ADEME - Evaluation environnementale de la consigne pour le réemploi
            des emballages en verre en France
          </a>
        </div>
      </div>
      <img src={GuillemetPictogramme} className="h-10" />
    </div>
  </GreySection>
);

export default AdemeCitation;
