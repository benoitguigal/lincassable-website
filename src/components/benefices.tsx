import React from "react";
import Section, { GreySection } from "./section";

export const Benefices = () => (
  <>
    <Section>
      <h3 className="uppercase mb-6">Une nécessité écologique et économique</h3>
      <div className="flex">
        <div>
          <h5 className="mb-6 text-2xl">
            Le réemploi des emballages permet de :
          </h5>
          <div className="flex gap-5">
            <div className="yellow-dot"></div>
            <div className="text-xl">
              réduire l'empreinte environnementale des emballages
            </div>
          </div>
          <div className="flex gap-5 mt-3">
            <div className="yellow-dot"></div>
            <div className="text-xl">
              réduire les déchets sauvages par la mise en place d’un système de
              consignation
            </div>
          </div>
          <div className="flex gap-5 mt-3">
            <div className="yellow-dot"></div>
            <div className="text-xl">
              sécuriser des approvisionnements et améliorer la résilience
              alimentaire des territoires
            </div>
          </div>
          <div className="flex gap-5 mt-3">
            <div className="yellow-dot"></div>
            <div className="text-xl">créer des emplois</div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <a
          href="https://www.airzen.fr/marseille-lincassable-prone-le-reemploie-et-la-consigne/"
          className="text-xl"
          target="_blank"
        >
          Airzen Radio : "L'INCASSABLE prône le réemploi et la consigne"
        </a>
      </div>
    </Section>
  </>
);

export default Benefices;
