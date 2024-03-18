import React from "react";
import Section from "./section";
import BouteilleImg from "../images/bouteille.jpg";
import PictogrammeBouteilleCaisse from "../images/pictogramme-bouteille-caisse.png";
import PictogrammeBouteilleCaisseLavage from "../images/pictogramme-bouteille-caisse-lavage.png";
import PictogramemeJeSuisConsigne from "../images/pictogramme-je-suis-consigne.png";

const Consommateurs = () => (
  <Section>
    <h3 className="uppercase">Comment ça fonctionne ?</h3>
    <div className="flex justify-start mt-6">
      <img src={BouteilleImg} className="h-96 mr-20 hidden md:block" />
      <div
        className="grid grid-rows-3 grid-flow-col gap-4 items-center max-w-96"
        style={{ width: "600px" }}
      >
        <div className="grid grid-cols-3 md:grid-cols-5 items-center">
          <div className="hidden md:block">
            <div className="dot text-center">
              <h5 className="pt-5">01</h5>
            </div>
          </div>
          <img
            alt="picto consigne"
            src={PictogramemeJeSuisConsigne}
            width="100px"
          />
          <div className="col-span-2 md:col-span-3">
            <div className="uppercase decima-bold">
              J'identifie en magasin les bouteilles consignées
            </div>
            <div>grâce au pictogramme et je paye une consigne de 0,50€</div>
          </div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 items-center">
          <div className="hidden md:block">
            <div className="dot text-center">
              <h5 className="pt-5">02</h5>
            </div>
          </div>
          <img
            alt="picto casier"
            src={PictogrammeBouteilleCaisse}
            width="100px"
          />
          <div className="col-span-2 md:col-span-3">
            <div className="uppercase decima-bold">
              Je rince la bouteille et j’enlève le bouchon
            </div>
            <div>après consommation</div>
          </div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 items-center">
          <div className="hidden md:block">
            <div className="dot text-center">
              <h5 className="pt-5">03</h5>
            </div>
          </div>
          <img
            alt="picto casier lavage"
            src={PictogrammeBouteilleCaisseLavage}
            width="100px"
          />
          <div className="col-span-2 md:col-span-3">
            <div className="uppercase decima-bold">Je la ramène en magasin</div>
            <div>on me rembourse la consigne de 0,50€</div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default Consommateurs;
