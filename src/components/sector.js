import React from "react";
import Section from "./section";

/**
 * La filière de réemploi du verre
 */
const Sector = () => (
  <Section>
    <h1 class="header text-center md:w-3/4 m-auto">
      LA FILIÈRE : UN RÉSEAU D’ACTEURS ENGAGÉS
    </h1>
    <div class="mt-5 md:mt-20 flex flex-col md:flex-row items-end">
      <div class="md:pl-20 md:pr-8">
        <div>
          <h6>Producteurs</h6>
          <div>
            (liste non exhaustive) Produits laitiers : laits, yaourts, crème
            fraiche, faisselle..., miel, soupe, produits du terroir, fruits et
            légumes transformés, condiments, huiles et vinaigre, eau, vin, jus,
            sodas, sirop, spiritueux...
          </div>
        </div>
        <br />
        <div>
          <h6>Distributeurs</h6>
          <div>
            (liste non exhaustive) Vente directe, marchés, épicerie bio,
            épicerie spécialisée dans le vrac, magasin spécialisé (caviste,
            épicerie fine), magasin de proximité : superette, épicerie de
            quartier, grande surface : super marché / hyper marché...
          </div>
        </div>
        <br />
        <div>
          <h6>Consommateurs</h6>
          <span>
            Des consommateurs conscients des enjeux économmiques et
            environnementaux en jeu, et vous souhaitez vous impliquer dans une
            démarche de réemploi du verre.
          </span>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:pr-20 md:pl-8">
        <div class="p-6 border-4 border-my-yellow">
          <div>
            Producteurs, distributeurs, consommateurs et autres acteurs engagés,
            vous êtes intéressé pour vous impliquer ou échanger autour de ce
            projet de développement de la consigne du verre à Marseille ?
          </div>
          <br />
          <a
            href="mailto:contact@lincassable.com"
            class="underline font-medium"
          >
            Contactez-nous !
          </a>
        </div>
      </div>
    </div>
  </Section>
);

export default Sector;
