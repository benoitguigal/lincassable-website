import PropTypes from "prop-types";
import React from "react";
import Logo from "../images/logolincassable.svg";

const Hero = () => (
  <header
    class="bg-green-bottle h-screen flex flex-col justify-center"
    id="header"
  >
    <div>
      <img src={Logo} class="w-1/2 sm:w-1/4 m-auto mb-4 md:mb-8" alt="Logo" />
      <h1 class="px-10 md:px-0 text-center max-w-sm m-auto leading-5 md:leading-7">
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
