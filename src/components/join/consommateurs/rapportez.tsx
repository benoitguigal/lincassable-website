import React from "react";
import Section from "../../section";
import { FonctionnementStepByStep } from "../../home/fonctionnement";

const RapportezVosBouteilles: React.FC = () => {
  return (
    <Section>
      <h2 className="uppercase text-center">Rapportez vos bouteilles</h2>
      <div className="mt-10 text-center">
        C’est facile ! Les bouteilles éligibles au réemploi sont identifiables
        grâce au pictogramme national intégré sur les étiquettes de nos
        producteurs partenaires et une pastille jaune « Je suis consignée ».
        Après consommation, vous avez simplement à ramener ces bouteilles dans
        un des magasins du réseau. Elle seront collectées, lavées puis
        réemployées.
      </div>
      <FonctionnementStepByStep />
    </Section>
  );
};

export default RapportezVosBouteilles;
