import PropTypes from "prop-types";
import React from "react";
import Logo from "../images/logo.svg";

const Hero = () => (
  <header
    class="bg-my-yellow h-screen flex flex-col justify-center"
    id="header"
  >
    <div>
      <img src={Logo} class="w-1/2 sm:w-1/4 m-auto mb-4 md:mb-8" alt="Logo" />
      <h2 class="px-10 md:px-0 text-xs md:text-sm text-center max-w-sm m-auto leading-5 md:leading-7">
        Développement d'une filière de réemploi d'emballages alimentaires en
        région marseillaise
      </h2>
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
