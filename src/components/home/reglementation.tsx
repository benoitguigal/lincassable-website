import React from "react";
import Section from "../section";
import { StaticImage } from "gatsby-plugin-image";
import { decimaBold, green, linkStyle, titleMargin } from "../../styles/theme";
import Circle from "../circle";

const circleSize = 50;
const padding = circleSize / 2;

type BulletPointProps = {
  text: string;
  date: string;
};

const BulletPoint: React.FC<BulletPointProps> = ({ text, date }) => {
  return (
    <div className="flex space-x-6 lg:space-x-6 items-start mt-10">
      <div>
        <Circle size={circleSize} text={date} fontSize={14} />
      </div>
      <div>{text}</div>
    </div>
  );
};

const Reglementation: React.FC = () => {
  return (
    <Section>
      <h2 style={{ ...titleMargin }} className="w-full text-center">
        VERS UNE GÉNÉRALISATION DU RÉEMPLOI EN FRANCE
      </h2>
      <h4>LA LOI AGEC</h4>
      <div className="mt-4">
        La loi AGEC (anti-gaspillage pour une économie circulaire) vise à sortir
        progressivement du plastique à usage unique et à favoriser le réemploi
        des emballages conformément à la hiérarchie des modes de traitement des
        déchets inscrite dans le code de l’environnement (Article L541-1). La
        loi fixe ainsi à 10% la proportion minimale d’emballages réemployés à
        mettre sur le marché annuellement d’ici à 2027, soit 2 milliards
        d’emballages par an.
      </div>
      <h4 className="mt-10">OBJECTIFS FIXÉS PAR LA LOI</h4>

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 lg:space-x-6 space-y-16 lg:space-y-0">
        <div style={{ paddingLeft: padding }}>
          <div style={{ borderLeft: `solid 3px ${green}` }}>
            <div style={{ position: "relative", left: -padding - 2 }}>
              <BulletPoint
                date="2023"
                text="10% du budget des éco-organismes dédié au réemploi chaque année."
              />
              <BulletPoint
                date="2024"
                text="Production des premiers emabllages standardisés pour le réemploi."
              />
              <BulletPoint
                date="2027"
                text="Proportion minimale de 10% d’emballages réemployés mis sur le marché chaque année."
              />
              <BulletPoint
                date="2040"
                text="Fin de la mise sur le marché des emballages en plastique à usage unique."
              />
            </div>
          </div>
        </div>
        <div>
          <StaticImage
            alt="Hiérarchie du mode de traitement des déchets"
            src="../../images/home/hierarchie_traitement_dechets.png"
            loading="eager"
            placeholder="none"
          />
          <a
            style={{ ...linkStyle }}
            target="_blank"
            href="https://www.ecologie.gouv.fr/traitement-des-dechets"
          >
            <div className="text-right">
              Code de l'environnement - Hiérarchie du mode de traitement des
              déchets
            </div>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Reglementation;
