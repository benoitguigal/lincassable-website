import React from "react";
import Section from "./section";

/**
 * Information sur le recylcage
 */
const Recycling = () => (
  <Section>
    <h1 class="header text-left md:text-center md:w-3/4 m-auto">
      AUJOURD’HUI LES FILIÈRES DE RECYCLAGE SONT LOIN D’ÊTRE SATISFAISANTES
    </h1>
    <div class="mt-5 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12">
      <div>
        <p class="font-medium">Un taux de recyclage très faible du plastique</p>
        <p>
          Une bouteille en plastique sur deux est recyclée en France (moins
          d’une sur cinq à Marseille). Et encore la matière plastique obtenue
          après recyclage est de bien moins bonne qualité, il faut donc injecter
          une grande partie de matière vierge pour créer de nouvelles bouteilles
          en plastique.
        </p>
        <p>
          <a
            class="underline"
            href="https://www.zerowastemarseille.org/2018/12/13/le-tri-s%C3%A9lectif-%C3%A0-marseille/"
          >
            Le tri sélectif à Marseille [Artcile Zéro Waste Marseille]
          </a>
        </p>
      </div>
      <div>
        <p class="font-medium">Un recyclage du verre très énergivore</p>
        <div>
          À contrario, le verre présente un assez bon taux de recyclage (89%
          d’après CITEO). Néanmoins, le procédé permettant le recyclage du verre
          est très énergivore. Le verre brisé de la métropole AMP part en
          traitement à Béziers (~220 km) où il est lavé, puis fondu à 1500°C
          pour devenir du calcin qui peut être utilisé dans la production de
          nouvelles bouteilles (là encore il n’est pas possible de créer une
          bouteille avec 100% de verre recyclé, il faut de l’apport de matière
          première)
        </div>
      </div>
      <div>
        <p class="font-medium">
          Un coût pour les collectivités et les consommateurs
        </p>
        <div>
          Par ailleurs la gestion de tous ces déchets est un coût pour les
          collectivités et les consommateurs (qui payent une éco-taxe via le
          système de REP) et rapporte de l’argent aux producteurs d’emballages
          et aux industriels du plastique. Le recyclage du verre coûte 35€/t, et
          l’enfouissement 106€/t Ce coût est répercuté pour les consommateurs
          sur les prix des produits et payé doublement via la taxe d’ordures
          ménagères.
          <p>
            <a
              class="underline"
              href="https://www.youtube.com/watch?v=QFMggbBrMk8&feature=youtu.be&t=186"
            >
              Le recyclage du plastique, c’est pas fantastique ! [Vidéo France
              4]
            </a>
          </p>
        </div>
      </div>
    </div>
  </Section>
);

export default Recycling;
