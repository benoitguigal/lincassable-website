import React from "react";
import GreenBottleSection from "./yellow-section";

/**
 * Ambition du projet
 */
const Vision = () => (
  <GreenBottleSection>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 bg-green-bottle">
      <h1 class="header text-left md:text-right">
        L’AMBITION DE L'INCASSABLE : (RE)DÉVELOPPER UNE FILIÈRE DE RÉEMPLOI DE
        CONTENANTS EN VERRE EN RÉGION MARSEILLAISE
      </h1>
      <div class="text-left md:text-left">
        Fournir, distribuer, collecter, trier, laver, stocker, et redistribuer
        des contenants en verre réemployabes grâce à la mise en place d’un
        réseau de partenaires, un système de collecte, et une logistique
        mutualisée avec d’autres acteurs sur le territoire.
      </div>
    </div>
  </GreenBottleSection>
);

export default Vision;
