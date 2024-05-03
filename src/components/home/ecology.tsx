import React from "react";
import Section from "../section";
import {
  backgroundColorLightGrey,
  decimaBold,
  linkStyle,
  titleMargin,
} from "../../styles/theme";
import BulletPoint from "../bullet-point";

const Ecology: React.FC = () => {
  return (
    <>
      <Section style={{ ...backgroundColorLightGrey }}>
        <h2 style={{ ...titleMargin }} className="text-center">
          UNE NÉCESSITÉ ÉCOLOGIQUE ET ÉCONOMIQUE
        </h2>

        <blockquote style={decimaBold} className="text-center" cite="ademe">
          « Un emballage en verre réemployable est plus avantageux sur le plan
          environnemental qu'un emballage en verre à usage unique dès la
          deuxième utilisation effective de l'emballage. »
        </blockquote>

        <a
          className="italic"
          style={{ ...linkStyle }}
          target="_blank"
          href={
            "https://librairie.ademe.fr/dechets-economie-circulaire/" +
            "6359-evaluation-environnementale-de-la-consigne-pour-le-" +
            "reemploi-des-emballages-en-verre-en-france.html"
          }
        >
          <div className="text-center  w-full md:w-2/3 xl:w-1/2 m-auto">
            ADEME : Évaluation environnementale de la consigne pour le réemploi
            des emballages en verre en France.
          </div>
        </a>
        <div className="mt-10">
          <div className="text-center">
            Le réemploi des emballages présente des avantages écologiques et
            économiques dans un contexte d’inflation des prix et de raréfaction
            des matières premières. Ainsi, le réemploi, en alternative au
            recyclage, permet de :
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-10 xl:gap-x-16 gap-y-6 mt-10">
            <BulletPoint
              number="1"
              primaryText="Réduire l’empreinte environnementale"
              secondaryText="des emballages"
            />
            <BulletPoint
              number="2"
              primaryText="Réduire les déchets sauvages"
              secondaryText="par la mise en place d’un système de consignation"
            />
            <BulletPoint
              number="3"
              primaryText="Sécuriser des approvisionnements"
              secondaryText="et améliorer la résilience alimentaire des territoires"
            />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Ecology;
