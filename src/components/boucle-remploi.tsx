import React from "react";
import Section from "./section";
import BoucleReemploiImg from "../images/boucle-reemploi.png";

export const BoucleRemploi = () => (
  <Section>
    <h3 className="uppercase mb-6">La boucle du réemploi</h3>
    <div className="flex w-full">
      <img className="h-96 m-auto" src={BoucleReemploiImg} />
    </div>
  </Section>
);

export default BoucleRemploi;
