import React from "react";
import YellowSection from "./yellow-section";

/**
 * Ambition du projet
 */
const Vision = () => (
  <YellowSection>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 bg-my-yellow ">
      <h1 class="header text-left md:text-right">
        L’AMBITION DU PROJET : (RE)DÉVELOPPER UNE FILIÈRE DE RÉEMPLOI DE
        CONTENANTS EN VERRE EN RÉGION MARSEILLAISE
      </h1>
      <div class="text-left md:text-left">
        Fournir, distribuer, collecter, trier, laver, stocker, et redistribuer
        des contenants en verre réemployabes grâce à la mise en place d’un
        réseau de partenaires, un système de collecte, et une logistique
        mutualisée avec d’autres acteurs sur le territoire.
      </div>
    </div>
  </YellowSection>
);

export default Vision;