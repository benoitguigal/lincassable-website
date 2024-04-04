import React from "react";
import Section from "../section";
import {
  backgroundColorGrey,
  decimaBold,
  green,
  linkStyle,
} from "../../styles/theme";
import Circle from "../circle";
import { StaticImage } from "gatsby-plugin-image";

const circleSize = 30;
const padding = circleSize / 2;

type BulletPointProps = {
  primaryText: string;
  secondaryText: string;
};

const BulletPoint: React.FC<BulletPointProps> = ({
  primaryText,
  secondaryText,
}) => {
  return (
    <div className="flex space-x-6 lg:space-x-6 items-start mt-10">
      <div>
        <Circle size={circleSize} />
      </div>
      <div className="text-2xl">
        <div style={{ ...decimaBold }}>{primaryText}</div>
        {secondaryText ?? <div>{secondaryText}</div>}
      </div>
    </div>
  );
};

const Ecology: React.FC = () => {
  return (
    <Section style={{ ...backgroundColorGrey }}>
      <h1>UNE NÉCESSITÉ ÉCOLOGIQUE ET ÉCONOMIQUE</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 lg:space-x-10 space-y-10 lg:space-y-0">
        <div>
          <h3>LE RÉEMPLOI DES EMBALLAGES PERMET DE :</h3>
          <div
            style={{
              paddingLeft: padding,
            }}
          >
            <div style={{ borderLeft: `solid 3px ${green}` }}>
              <div style={{ position: "relative", left: -padding - 2 }}>
                <BulletPoint
                  primaryText="Réduire l’empreinte environnementale"
                  secondaryText="des emballages"
                />
                <BulletPoint
                  primaryText="Réduire les déchets sauvages"
                  secondaryText="par la mise en place d’un système de consignation"
                />
                <BulletPoint
                  primaryText="Sécuriser des approvisionnements"
                  secondaryText="et améliorer la résilience alimentaire des territoires"
                />
                <BulletPoint
                  primaryText="Créer des emplois"
                  secondaryText="locaux et durables"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <StaticImage
              alt="Ouvrez les guillemets"
              src="../../images/home/quote_open.png"
              height={70}
            />
          </div>
          <blockquote className="text-3xl" cite="ademe">
            Un emballage en verre réemployable est plus avantageux sur le plan
            environnemental qu'un emballage en verre à usage unique dès la
            deuxième utilisation effective de l'emballage.
          </blockquote>
          <div className="text-right">
            <StaticImage
              alt="Ouvrez les guillemets"
              src="../../images/home/quote_close.png"
              height={70}
            />
          </div>

          <a
            className="italic text-xl"
            style={{ ...linkStyle }}
            target="_blank"
            href={
              "https://librairie.ademe.fr/dechets-economie-circulaire/" +
              "6359-evaluation-environnementale-de-la-consigne-pour-le-" +
              "reemploi-des-emballages-en-verre-en-france.html"
            }
          >
            <div className="text-right">
              ADEME : Évaluation environnementale de la consigne pour le
              réemploi des emballages en verre en France.
            </div>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Ecology;
