import React from "react";
import Section from "../../section";
import { titleMargin } from "../../../styles/theme";

const Benefices: React.FC = () => {
  return (
    <Section>
      <h2 className="text-center uppercase" style={{ ...titleMargin }}>
        Les bénéfices du réemploi
      </h2>
    </Section>
  );
};

export default Benefices;
