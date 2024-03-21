import React from "react";
import Section from "../section";
import { backgroundColorYellow } from "../../styles/theme";

const Indicateurs: React.FC = () => {
  return (
    <Section style={{ ...backgroundColorYellow }}>
      <h1 className="w-full text-center">NOTRE ACTION EN CHIFFRES</h1>
    </Section>
  );
};

export default Indicateurs;
