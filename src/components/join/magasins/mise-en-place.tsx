import React from "react";
import Section from "../../section";
import { backgroundColorLightGrey, titleMargin } from "../../../styles/theme";

const MiseEnPlace: React.FC = () => {
  return (
    <Section style={{ ...backgroundColorLightGrey }}>
      <h2 style={{ ...titleMargin }} className="text-center uppercase">
        Mise en place du dispositif de consigne en magasin
      </h2>
    </Section>
  );
};

export default MiseEnPlace;
