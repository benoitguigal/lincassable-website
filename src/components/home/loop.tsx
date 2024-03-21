import React, { CSSProperties, useState } from "react";
import Section from "../section";
import { backgroundColorGrey } from "../../styles/theme";
import PictoMagasin from "../../images/home/picto_magasin.png";
import PictoProducteur from "../../images/home/picto_producteur.png";
import PictoConsommateur from "../../images/home/picto_consommateur.png";
import PictoCollecte from "../../images/home/picto_collecte.png";
import PictoLavage from "../../images/home/picto_lavage.png";
import PhotoMassification from "../../images/home/photo_massification.png";

const loopStepStyle: CSSProperties = {
  ...backgroundColorGrey,
  padding: 30,
  height: 250,
  width: 250,
  cursor: "pointer",
};

type LoopStepProps = {
  pictoSrc: string;
  photoSrc: string;
  label: string;
};

const LoopStep: React.FC<LoopStepProps> = ({ pictoSrc, photoSrc, label }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="col-span-2"
      style={{ ...loopStepStyle }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex flex-col justify-center h-full">
        <div>
          <div className="flex justify-center">
            <img
              className="m-auto"
              alt="magasin"
              src={hover ? photoSrc : pictoSrc}
              style={{ height: 100 }}
            />
          </div>
          <h5 className="text-center mt-2 uppercase">{label}</h5>
        </div>
      </div>
    </div>
  );
};

const Loop: React.FC = () => {
  return (
    <Section>
      <h1>LA BOUCLE DU RÉEMPLOI</h1>
      <div className="mt-16 grid grid-cols-8">
        <LoopStep
          pictoSrc={PictoProducteur}
          photoSrc={PhotoMassification}
          label="Producteur"
        />
        <div>{"->"}</div>
        <LoopStep
          pictoSrc={PictoMagasin}
          photoSrc={PhotoMassification}
          label="Magasin"
        />
        <div>{"->"}</div>
        <LoopStep
          pictoSrc={PictoConsommateur}
          photoSrc={PhotoMassification}
          label="Consommateur"
        />
        <div className="col-span-2">{"->"}</div>
        <div></div>
        <div className="col-span-2"></div>
        <div></div>
        <div className="col-span-2">{"->"}</div>
        <LoopStep
          pictoSrc={PictoCollecte}
          photoSrc={PhotoMassification}
          label="Collecte"
        />
        <div>{"->"}</div>
        <LoopStep
          pictoSrc={PictoCollecte}
          photoSrc={PhotoMassification}
          label="Tri"
        />
        <div>{"->"}</div>
        <LoopStep
          pictoSrc={PictoLavage}
          photoSrc={PhotoMassification}
          label="Lavage"
        />
      </div>
    </Section>
  );
};

export default Loop;
