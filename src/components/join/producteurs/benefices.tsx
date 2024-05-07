import React from "react";
import {
  backgroundColorLightGrey,
  decimaBold,
  linkStyle,
  titleMargin,
} from "../../../styles/theme";
import Section from "../../section";
import BulletPoint from "../../bullet-point";

const Benefices: React.FC = () => {
  return (
    <>
      <Section style={{ ...backgroundColorLightGrey }}>
        <h2 style={{ ...titleMargin }} className="uppercase text-center">
          Les bénéfices du réemploi
        </h2>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-10 lg:justify-center">
          <blockquote style={decimaBold} className="text-center" cite="ademe">
            « Les emballages représentent 30% à 40% de l’empreinte carbone d'un
            domaine viticole. Le recours aux bouteilles en verre à usage unique
            explique la majeure partie de cet impact. »
          </blockquote>
        </div>
        <a
          className="italic"
          style={{ ...linkStyle }}
          target="_blank"
          href={"https://youtu.be/uBClOKO5AQA?si=EMSDz2LmC1JZfpoO&t=145"}
          // href = https://extranet.bivb.com/technique-et-qualite/publications-techniques/plaquettes-techniques/gallery_files/site/2992/48177/68937.pdf
        >
          <div className="text-center  w-full md:w-2/3 xl:w-1/2 m-auto ">
            BIVB & Adelphe - Bilan carbone des vins de Bourgogne
          </div>
        </a>
        <div className="mt-10">
          <div className="text-center">
            L’intérêt du passage au réemploi, pour les producteurs et
            industriels de la boisson :
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-10 xl:gap-x-16 gap-y-6 mt-10 lg:justify-items-center">
            <BulletPoint
              number="1"
              primaryText="Réduire la production de déchets"
              secondaryText="liée à leur activité"
            />
            <BulletPoint
              number="2"
              primaryText="Répondre à la demande"
              secondaryText="des consommateurs"
            />
            <BulletPoint
              number="3"
              primaryText="Sécuriser des approvisionnements"
              secondaryText="et améliorer la résilience alimentaire des territoires"
            />
            <BulletPoint
              number="4"
              primaryText="Anticiper la législation"
              secondaryText="(Loi AGEC)"
            />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Benefices;
