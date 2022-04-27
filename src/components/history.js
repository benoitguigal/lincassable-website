import React from "react";
import Section from "./section";

/**
 * Histoire de la consigne et de l'avénèment du plastique
 */
const History = () => (
  <Section>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-12">
      <h1 class="header text-left sm:text-right">
        LA CONSIGNE A ÉTÉ ABANDONNÉE DANS LES ANNÉES 60, <br /> AU PROFIT DU
        TOUT JETABLE SOUS L'EFFET DE LA PRESSION DES LOBBIES INDUSTRIELS
      </h1>
      <div class="text-left">
        « Des groupes de pression agissent sur la communauté européenne pour
        imposer la politique du gaspillage et empêcher tout retour, même modéré,
        à la consigne. Quand les industriels vendent du vin, de l’eau minérale
        ou de la bière, ils vendent non seulement ce produit mais ils vendent
        également un emballage, un emballage qui coûte cher et que l’on jette à
        chaque fois. Très souvent les fabricants de ces produits sont également
        des fabricants d’emballages. »
        <br />
        <a
          class="underline"
          target="_blank"
          rel="noreferrer"
          href="https://m.ina.fr/video/S822033_001/pourquoi-avons-nous-abandonne-le-verre-consigne-video.html"
        >
          Pourquoi avons nous abandonné le verre consigné? [Vidéo INA]
        </a>
      </div>
    </div>
  </Section>
);

export default History;
