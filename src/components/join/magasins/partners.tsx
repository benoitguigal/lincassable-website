import React from "react";
import Section from "../../section";
import { titleMargin } from "../../../styles/theme";

const Partners: React.FC = () => {
  return (
    <Section>
      <h2 className="text-center uppercase" style={{ ...titleMargin }}>
        Distributeurs partenaires
      </h2>
    </Section>
  );
};

export default Partners;
