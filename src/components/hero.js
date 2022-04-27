import PropTypes from "prop-types";
import React from "react";
import HeroImg from "../images/hero.svg";

const Hero = () => (
  <header
    class="bg-green-bottle h-screen flex flex-col justify-center"
    id="header"
  >
    <div>
      <img
        src={HeroImg}
        class="md:w-2/5 w-3/4 m-auto mb-4 md:mb-8"
        alt="Logo"
      />
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
