import PropTypes from "prop-types";
import React from "react";
import Logo from "../images/logolincassable.svg";
import IconBouteilles from "./icons/bouteilles";
import IconFleche from "./icons/fleche";
import IconPluie from "./icons/pluie";
import IconVerre from "./icons/verre";

const Hero = () => (
  <header
    class="bg-green-bottle h-screen flex flex-col justify-center"
    id="header"
  >
    <div>
      <img src={Logo} class="md:w-2/5 w-3/4 m-auto mb-4 md:mb-8" alt="Logo" />
      <>
        <div class="justify-center space-x-10 hidden md:flex mb-8">
          <IconPluie color="#EAEDEC" width="8em" height="8em" />
          <IconBouteilles color="#EAEDEC" width="8em" height="8em" />
          <IconFleche color="#EAEDEC" width="8em" height="8em" />
          <IconVerre color="#EAEDEC" width="8em" height="8em" />
        </div>
        <div class="md:hidden flex justify-center space-x-3 mb-4">
          <IconPluie color="#EAEDEC" width="3em" height="3em" />
          <IconBouteilles color="#EAEDEC" width="3em" height="3em" />
          <IconFleche color="#EAEDEC" width="3em" height="3em" />
          <IconVerre color="#EAEDEC" width="3em" height="3em" />
        </div>
      </>
      <h1 class="md:px-0 md:text-3xl text-center m-auto">
        LE RÉEMPLOI C'EST DU SOLIDE
      </h1>
    </div>
  </header>
);

Hero.propTypes = {
  siteDescription: PropTypes.string
};

Hero.defaultProps = {
  siteDescription: ``
};

export default Hero;
