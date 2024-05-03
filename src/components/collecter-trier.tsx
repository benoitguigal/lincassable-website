import React from "react";
import Section from "./section";
import { backgroundColorLightGrey, decimaMonoBold } from "../styles/theme";

const CollecterTrierReemployer: React.FC = () => {
  return (
    <Section style={{ ...backgroundColorLightGrey }}>
      <div className="flex justify-center">
        <div className="flex flex-col gap-2" style={{ ...decimaMonoBold }}>
          <div className="text-4xl text-center">COLLECTER</div>
          <div className="text-4xl text-center">TRIER</div>
          <div className="text-4xl text-center">LAVER</div>
          <div className="text-4xl text-center">RÉEMPLOYER</div>
        </div>
      </div>
    </Section>
  );
};

export default CollecterTrierReemployer;
