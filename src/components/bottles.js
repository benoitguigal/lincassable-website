import React from "react";
import BottlesImage from "../images/bottles.png";
import GreenBottleSection from "./yellow-section";

/**
 * Bandeau avec une image de l'ensemble des contenants pris en charge
 */
const Bottles = () => (
  <GreenBottleSection>
    <img src={BottlesImage} class="w-1/3 sm:w-1/6 m-auto" alt="Bottles" />
  </GreenBottleSection>
);

export default Bottles;
