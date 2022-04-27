import React from "react";
import IconBouteilles from "./icons/bouteilles";
import GreenBottleSection from "./yellow-section";

/**
 * Bandeau avec une image de bouteilles
 */
const Bottles = () => (
  <GreenBottleSection>
    <div class="flex justify-center">
      <IconBouteilles color="#EAEDEC" width="8em" height="8em" />
    </div>
  </GreenBottleSection>
);

export default Bottles;
