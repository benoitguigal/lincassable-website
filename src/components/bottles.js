import React from "react";
import BottlesImage from "../images/bottles.png";
import YellowSection from "./yellow-section";

/**
 * Bandeau avec une image de l'ensemble des contenants pris en charge
 */
const Bottles = () => (
  <YellowSection>
    <img src={BottlesImage} class="w-1/2 sm:w-1/4 m-auto" alt="Bottles" />
  </YellowSection>
);

export default Bottles;
