import React, { CSSProperties } from "react";
import Section from "../section";
import PictogrammeProducteur from "../../images/home/picto_producteur.png";
import PictogrammeMagasin from "../../images/home/picto_magasin.png";
import PictogrammeConsommateur from "../../images/home/picto_consommateur.png";
import { linkStyle, titleMargin } from "../../styles/theme";
import { Link } from "gatsby";

const pictoStyle: CSSProperties = {
  height: "4rem",
  width: "auto",
};

type JoinItemProps = {
  type: string;
  pictogramme: string;
  description: string;
};

const JoinItem: React.FC<JoinItemProps> = ({
  type,
  pictogramme,
  description,
}) => {
  return (
    <div>
      <img style={{ ...pictoStyle }} alt={type} src={pictogramme} />
      <h5 style={{ marginTop: "1.25rem" }}>{type}</h5>
      <div className="w-full md:w-1/2 lg:w-full">{description}</div>
      <div style={{ ...linkStyle }} className="mt-3">
        <Link to="/contact">En savoir plus</Link>
      </div>
    </div>
  );
};

const Join: React.FC = () => {
  return (
    <Section>
      <h2 style={{ ...titleMargin }} className="text-center">
        REJOINDRE LA FILIÈRE
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <JoinItem
          type="Producteurs"
          pictogramme={PictogrammeProducteur}
          description="Nous facilitons le passage au réemploi des producteurs et
            industriels du territoire grâce à un accompagnement personnalisé et
            un service de collecte et lavage clé en main."
        />
        <JoinItem
          type="Magasins"
          pictogramme={PictogrammeMagasin}
          description="Nous accompagnons les enseignes de l’alimentaire qui souhaitent
          mettre en place un système de consigne pour réemploi en magasin."
        />
        <JoinItem
          type="Consommateurs"
          pictogramme={PictogrammeConsommateur}
          description="Engagez-vous pour l’environnement et la réduction des déchets en
          rapportant vos bouteilles consignées au plus près de chez vous."
        />
      </div>
    </Section>
  );
};

export default Join;
