import React from "react";
import Section from "../section";
import {
  backgroundColorGrey,
  backgroundColorYellow,
  decimaBold,
  green,
} from "../../styles/theme";
import Circle from "../circle";

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
    <div className="flex space-x-6 items-start mt-10">
      <Circle size={circleSize} />
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
      <div className="grid grid-cols-2 mt-12">
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
          <blockquote className="text-2xl" cite="ademe">
            Un emballage en verre réemployable est plus avantageux sur le plan
            environnemental qu'un emabllage en verre à usage unique dès la
            deuxième utilisation effective de l'emballage
          </blockquote>
        </div>
      </div>
    </Section>
  );
};

export default Ecology;
