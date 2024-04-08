import React from "react";
import { backgroundColorGreen } from "../../styles/theme";
import HeroImg from "../../images/home/hero.png";
import HeroImgMobile from "../../images/home/hero_mobile.png";

const HeroDesktop: React.FC = () => {
  return (
    <header
      className="hidden md:block h-screen"
      style={{ ...backgroundColorGreen }}
    >
      <img
        alt="Le réemploi c'est du solide"
        className="h-screen m-auto"
        src={HeroImg}
      />
    </header>
  );
};

const HeroMobile: React.FC = () => (
  <header
    className="flex md:hidden flex-col justify-center h-screen"
    style={{ ...backgroundColorGreen }}
    id="header"
  >
    <div>
      <img src={HeroImgMobile} className="w-3/4 m-auto" alt="Logo" />
    </div>
  </header>
);

const Hero: React.FC = () => {
  return (
    <>
      <HeroDesktop />
      <HeroMobile />
    </>
  );
};

export default Hero;
