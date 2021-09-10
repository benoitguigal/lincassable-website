import React from "react";
import Section from "./section";

/**
 * La filière de réemploi du verre
 */
const Sector = () => (
  <Section>
    <h1 class="header text-left md:text-center md:w-3/4 m-auto">
      UN RÉSEAU LOCAL D’ACTEURS ENGAGÉS
    </h1>
    <div class="mt-2 md:mt-5 md:px-20 text-center">
      L’INCASSABLE est une association marseillaise dont l’ambition est
      d’apporter une solution concrète en matière de réemploi d’emballages
      alimentaires (bouteilles, bocaux...) à Marseille et dans les
      Bouches-du-Rhône, et de proposer ainsi une alternative aux emballages à
      usage unique et très souvent en plastique. Cela se traduit par la mise en
      place d’infrastructures de collecte et de lavage d’emballages à une
      échelle locale.
    </div>
    <div class="mt-2 md:mt-5 md:px-20 text-center">
      L’INCASSABLE expérimente dans un premier temps le réemploi des bouteilles
      75 cl en verre mises sur le marché par les brasseries artisanales locales
      sur le territoire de la métropole Aix-Marseille-Provence.
    </div>
    <div class="mt-2 md:mt-5 md:px-20 text-center">
      De nombreux acteurs locaux sont engagés dans la démarche : producteurs,
      distributeurs, collectivités... <br />
      Retrouvez ici la carte des partenaires de L’INCASSABLE :{" "}
      <a class="underline" target="_blank" rel="noreferrer" href="/carte">
        Où trouver / Rammener mes bouteilles
      </a>
    </div>
  </Section>
);

export default Sector;
