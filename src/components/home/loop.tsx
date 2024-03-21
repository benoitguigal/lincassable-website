import React, { CSSProperties, useState } from "react";
import Section from "../section";
import PictoMagasin from "../../images/home/loop/magasins.png";
import PictoProducteur from "../../images/home/loop/producteurs.png";
import PictoConsommateur from "../../images/home/loop/consommateurs.png";
import PictoCollecte from "../../images/home/loop/collecte.png";
import PictoLavage from "../../images/home/loop/lavage.png";
import PictoEntrepot from "../../images/home/loop/entrepot.png";
import PhotoMagasin from "../../images/home/loop/magasins_img.png";
import PhotoProducteur from "../../images/home/loop/producteurs_img.png";
import PhotoConsommateur from "../../images/home/loop/consommateurs_img.png";
import PhotoCollecte from "../../images/home/loop/collecte_img.png";
import PhotoLavage from "../../images/home/loop/lavage_img.png";
import PhotoEntrepot from "../../images/home/loop/entrepot_img.png";
import ArrowRight from "../../images/home/loop/right.png";
import ArrowLeft from "../../images/home/loop/left.png";
import ArrowUp from "../../images/home/loop/up.png";
import ArrowDown from "../../images/home/loop/down.png";
import classNames from "classnames";

const loopStepStyle: CSSProperties = {
  cursor: "pointer",
};

type LoopStepProps = {
  pictoSrc: string;
  photoSrc: string;
};

const LoopStep: React.FC<LoopStepProps> = ({ pictoSrc, photoSrc }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="col-span-3"
      style={{ ...loopStepStyle }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        className="m-auto w-full h-full max-w-64"
        alt="magasin"
        src={hover ? photoSrc : pictoSrc}
      />
    </div>
  );
};

type ArrowContainerProps = {
  type: "up" | "down" | "left" | "right";
  className?: string;
};

const Arrow: React.FC<ArrowContainerProps> = ({ type, className }) => {
  const imgSrc =
    type === "up"
      ? ArrowUp
      : type === "down"
      ? ArrowDown
      : type === "left"
      ? ArrowLeft
      : ArrowRight;

  const alt =
    type === "up"
      ? "Flèche haut"
      : type === "down"
      ? "Flèche bas"
      : type === "left"
      ? "Flèche gauche"
      : "Flèche droite";

  return (
    <div
      className={classNames(
        "flex flex-col px-1 py-1 md:px-2 md:py-2 lg:px-3 lg:py-3",
        className
      )}
    >
      <img
        src={imgSrc}
        className="m-auto w-2 h-2 md:w-5 md:h-5 lg:w-10 lg:h-10"
        alt={alt}
      />
    </div>
  );
};

const Loop: React.FC = () => {
  return (
    <Section>
      <h1>LA BOUCLE DU RÉEMPLOI</h1>
      <div className="mt-16 grid grid-cols-11">
        {/* Ligne 1 */}
        <LoopStep pictoSrc={PictoProducteur} photoSrc={PhotoProducteur} />
        <Arrow type="right" />
        <LoopStep pictoSrc={PictoMagasin} photoSrc={PhotoMagasin} />
        <Arrow type="right" />
        <LoopStep pictoSrc={PictoConsommateur} photoSrc={PhotoConsommateur} />
        {/* Ligne 2 */}
        <Arrow type="up" className="col-span-3" />
        <div></div>
        <div className="col-span-3"></div>
        <div></div>
        <Arrow type="down" className="col-span-3" />
        {/* Ligne 3 */}
        <LoopStep pictoSrc={PictoLavage} photoSrc={PhotoLavage} />

        <Arrow type="left" />
        <LoopStep pictoSrc={PictoEntrepot} photoSrc={PhotoEntrepot} />
        <Arrow type="left" />
        <LoopStep pictoSrc={PictoCollecte} photoSrc={PhotoCollecte} />
      </div>
    </Section>
  );
};

export default Loop;
