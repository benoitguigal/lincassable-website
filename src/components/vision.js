import React from "react";
import { GreySection } from "./section";
import Video from "./video";

/**
 * Ambition du projet
 */
const Vision = () => (
  <GreySection>
    <div class=" gap-4 md:gap-12 mb-10">
      <h1 class="header text-center decima-mono-bold">
        L’AMBITION DE L'INCASSABLE :<br />
        (RE)DÉVELOPPER UNE FILIÈRE LOCALE DE RÉEMPLOI DANS LES BOUCHES-DU-RHÔNE
        ET EN VAUCLUSE
      </h1>
      <div className="mt-2 text-center">
        Fournir, distribuer, collecter, trier, laver, stocker, et redistribuer
        des contenants en verre réemployabes grâce à la mise en place d’un
        réseau de partenaires, un système de collecte, et une logistique
        mutualisée avec d’autres acteurs sur le territoire.
      </div>
    </div>
    <Video />
  </GreySection>
);

export default Vision;
