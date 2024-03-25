import React from "react";
import Section from "../section";
import { StaticImage } from "gatsby-plugin-image";

const pictogrammeHeight = 60;

const Join: React.FC = () => {
  return (
    <Section>
      <h1>REJOINDRE LA FILIÈRE</h1>
      <div className="mt-16 flex flex-col md:flex-row md:justify-between md:space-x-10 space-y-10 md:space-y-0">
        <div>
          <StaticImage
            alt="Producteurs"
            src="../../images/home/picto_producteur.png"
            height={pictogrammeHeight}
          />
          <h5 className="mt-3">PRODUCTEURS</h5>
          <div className="w-full">
            Nous facilitons le passage au réemploi des producteurs et
            industriels du territoire grâce à un accompagnement personnalisé et
            un service de collecte et lavage clé en main.
          </div>
        </div>
        <div>
          <StaticImage
            alt="Producteurs"
            src="../../images/home/picto_magasin.png"
            height={pictogrammeHeight}
          />
          <h5 className="mt-3">MAGASINS</h5>
          <div className="w-full">
            Nous accompagnons les enseignes de l’alimentaire qui souhaitent
            mettre en place un système de consigne pour réemploi en magasin.
          </div>
        </div>
        <div>
          <StaticImage
            alt="Producteurs"
            src="../../images/home/picto_consommateur.png"
            height={pictogrammeHeight}
          />
          <h5 className="mt-3">CONSOMMATEURS</h5>
          <div className="w-full">
            Engagez-vous pour l’environnement et la réduction des déchets en
            rapportant vos bouteilles consignées au plus près de chez vous.
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Join;
