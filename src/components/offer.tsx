import React from "react";
import { Link } from "gatsby";
import Section from "./section";
import PictogrammeRemploi from "../images/pictogramme-reemploi.png";
import PictogrammeMagasin from "../images/pictogramme-magasin.png";
import PictogrammeFleche from "../images/pictogramme-fleche.png";

/**
 * Détails de l'offre de L'INCASSABLE
 */
const Offer = () => (
  <Section>
    <h3>REJOINDRE LA FILIÈRE</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 lg:gap-24 xl:gap-32 mt-8">
      <div>
        <img
          src={PictogrammeRemploi}
          alt="Pictogramme national du réemploi"
          width="50px"
        />
        <h5 className="uppercase mt-2">Producteurs</h5>
        <div>
          Nous facilitons le passage au réemploi des producteurs et industriels
          du territoire grâce à un accompagnement personnalisé et un service de
          collecte et lavage clé en main.
        </div>
        <Link className="mt-2" to="/contact">
          En savoir plus
        </Link>
      </div>
      <div>
        <img src={PictogrammeMagasin} alt="Magasin" width="50px" />
        <h5 className="uppercase mt-2">Magasins</h5>
        <div>
          Nous accompagnons les enseignes de l'alimentaire qui souhaitent mettre
          en place un système de consigne pour réemploi en magasin.
        </div>
        <Link className="mt-2" to="/contact">
          En savoir plus
        </Link>
      </div>
      <div>
        <img src={PictogrammeFleche} alt="Collectivités" width="50px" />
        <h5 className="uppercase">Consommateurs</h5>
        <div>
          Engagez-vous pour l'environnement et la réduction des déchets en
          rapportant vos bouteilles consignées au plus près de chez vous
        </div>
        <Link className="mt-2" to="/carte">
          Découvrir les points de vente
        </Link>
      </div>
    </div>
  </Section>
);

export default Offer;
