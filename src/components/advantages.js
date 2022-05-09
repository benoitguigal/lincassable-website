import React from "react";
import LoopImage from "../images/loop.png";
import Section from "./section";

/**
 * Les avantages de la consigne
 */
const Advantages = () => (
  <Section>
    <h1 class="header text-left md:text-center md:w-3/4 m-auto decima-mono-bold">
      UNE OFFRE DE COLLECTE ET DE LAVAGE DE CONTENANTS EN VERRE, EN ALTERNATIVE
      AU RECYCLAGE
    </h1>
    <img
      class="mt-5 md:mt-20 mx-auto w-full md:w-3/4"
      src={LoopImage}
      alt="loop"
    />
    <div class="mt-5 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12">
      <div>
        <p class="decima-bold">Un impact environnemental réduit</p>
        <p>
          La consigne permettrait de réduire les émissions de CO2 de 79% en
          comparaison au recyclage (Étude Deroche - 2009). Elle permet aussi de
          s’attaquer à la pollution plastique et à son impact sur la
          biodiversité : de nombreuses alternatives consignées pourraient se
          substituer aux emballages en plastique : bocaux, yaourts...
        </p>
        <p>
          <a
            href="https://podcasts.apple.com/fr/podcast/brune-poirson-sengage-pour-la-consigne-des-bouteilles/id1148855554?i=1000454832139"
            target="_blank"
            rel="noreferrer"
            class="underline"
          >
            Brune Poirson s’engage pour la consigne des bouteilles en verre
            [Podcast radio RTL]
          </a>
        </p>
      </div>
      <div>
        <p class="decima-bold">Un tissu économique local redynamisé</p>
        <p>
          L'Incassable permettra la création d’emplois locaux à travers
          l’activité de lavage, tri et collecte des bouteilles sur le territoire
          (pas de site de recyclage en PACA) et à la valorisation d’acteurs
          locaux en privilégiant les circuits courts et les acteurs de
          proximité.
        </p>
      </div>
      <div>
        <p class="decima-bold">Un impact social positif</p>
        <p>
          En introduisant de nouvelles habitudes de consommation, la consigne
          participe à la sensibilisation du grand public sur la préservation de
          l'environnement. Les citoyens sont favorables à ce genre de
          dispositifs et, avec l’aide de la réglementation, il est facile
          d’arriver à des taux de retours importants. En Allemagne, le taux de
          retour est ainsi de 90%
        </p>
      </div>
    </div>
  </Section>
);

export default Advantages;
