import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Image1 from "../images/image-1.png";
import Image2 from "../images/image-2.png";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <img src={Image1} />
    <div class="p-32 grid grid-cols-2 gap-10">
      <h1 class="text-2xl text-right">
        LA CONSIGNE A ÉTÉ ABANDONNÉE DANS LES ANNÉES 60, AU PROFIT DU TOUT
        JETABLE SOUS L'EFFET DE LA PRESSION DES LOBBIES INDUSTRIELS
      </h1>
      <div>
        Des groupes de pression agissent sur la communauté européenne pour
        imposer la politique du gaspillage et empêcher tout retour même modéré à
        la consigne. Quand les industriels vendent du vin de l’eau minérale ou
        de la bière, ils vendent non seulement ce produit mais ils vendent
        également un emballage, un emballage qui coûte cher et que l’on jette à
        chaque fois. Très souvent les fabricants de ces produits sont également
        des fabricants d’emballages.
        <a href="">
          Pourquoi avons nous abandonné le verre consingé?[Vidéo INA]
        </a>
      </div>
    </div>
    <img src={Image2} />
    <h1 class="p-24 text-2xl text-center">
      AUJOURD’HUI LES FILIÈRES DE RECYCLAGE SONT LOIN D’ÊTRE SATISFAISANTES
    </h1>
    <div class="px-10 grid grid-cols-3 gap-10">
      <div>
        <h5>Un taux de recyclage très faible du plastique</h5>{" "}
        <div>
          Une bouteille sur deux en plastique recyclée en France (moins d’une
          sur cinq à Marseille). Et encore la matière plastique obtenue après
          recyclage est de bien moins bonne qualité et il faut donc injecter une
          grande partie de matière vierge pour créer de nouvelles bouteilles en
          plastique. Le tri sélectif à Marseille [Artcile Zéro Waste Marseille]
        </div>
      </div>
      <div>
        <h5>Le recyclage du verre est très énergivore</h5>
        <div>
          À contrario le verre présente un assez bon taux de recyclage (89%
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
        <h5>Un coût pour les collectivités et les consommateurs</h5>
        <div>
          Un coût pour les collectivités et les consommateurs Par ailleurs la
          gestion de tous ces déchets est un coût pour les collectivités et les
          consommateurs (qui paye une éco-taxe via le système de REP) et
          rapporte de l’argent aux producteurs d’emballages et aux industriels
          du plastique. Le recyclage du verre coûte 35€/t, et l’enfouissement
          106€/t Ce cout est répercuté pour les consomateurs sur les prix des
          produits et payé doublement via la taxe d’ordures ménagères. Le
          recyclage du plastique, c’est pas fantastique ! [Vidéo France 4]
        </div>
      </div>
    </div>
    <div class="p-32 grid grid-cols-2 gap-10">
      <h1 class="text-2xl text-right">
        L’AMBITION DU PROJET: DÉVELOPPER UNE FILLIÈRE DE RÉEMPLOI DU VERRE A
        MARSEILLE
      </h1>
      <div>
        Fournir, distribuer, collecter, trier, laver, stocker, et redistribuer
        des bouteilles en verre réemployabes grâce à la mise en place d’une
        réseau de partenaires, un système de collecte, et une logistique
        mutualisée avec d’autres acteurs sur le territoire.
      </div>
    </div>
  </Layout>
);

export default IndexPage;
