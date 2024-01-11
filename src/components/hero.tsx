import PropTypes from "prop-types";
import React from "react";
import CasierBouteillePicto from "../images/casier-bouteille-picto.png";
import LogoBaseline from "../images/logo-baseline.svg";
import { Link } from "gatsby";
import { GreySection } from "./section";

const HeroDesktop = () => (
  <header
    className="hidden lg:flex h-screen bg-grey relative -top-12"
    id="header"
  >
    <div className="m-auto px-10">
      <div className="flex flex-row space-x-5">
        <img src={CasierBouteillePicto} className="w-1/2" alt="Logo" />
        <div className="w-1/2 pr-20">
          <div className="decima-mono-bold text-5xl">
            LE <span className="bg-yellow">RÉEMPLOI</span> <br />
            C'EST DU SOLIDE
          </div>
          <div className="mt-5 text-2xl">
            L’INCASSABLE développe une filière de consigne de bouteilles en
            verre en Région Sud pour réduire la production de déchets liés aux
            emballages à usage unique.
          </div>
          <div className="mt-10 text-2xl button align-middle w-fit px-2 py-1">
            <Link to="/carte" className="relative -top-1 no-underline">
              Où trouver des bouteilles consignées ?
            </Link>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const HeroMobile = () => (
  <div className="lg:hidden">
    <header
      className="bg-green-bottle h-screen flex flex-col justify-center  z-0"
      id="header"
    >
      <div className="relative -top-16">
        <img src={LogoBaseline} className="w-3/4 m-auto" alt="Logo" />
      </div>
    </header>
    <GreySection>
      <div className="text-xl">
        L’INCASSABLE développe une filière de consigne de bouteilles en verre en
        Région Sud pour réduire la production de déchets liés aux emballages à
        usage unique.
      </div>
      <div className="mt-5 m-auto text-xl button align-middle text-center w-fit px-2 py-1">
        <Link to="/carte" className="relative -top-1 no-underline text-center">
          Où trouver des bouteilles consignées ?
        </Link>
      </div>
    </GreySection>
  </div>
);

const Hero = () => (
  <>
    <HeroDesktop />
    <HeroMobile />
  </>
);

Hero.propTypes = {
  siteDescription: PropTypes.string,
};

Hero.defaultProps = {
  siteDescription: ``,
};

export default Hero;
