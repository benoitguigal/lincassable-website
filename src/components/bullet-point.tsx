import React from "react";
import Circle from "./circle";
import { decimaBold } from "../styles/theme";

const circleSize = 30;

type BulletPointProps = {
  number: string;
  primaryText: string;
  secondaryText: string;
};

const BulletPoint: React.FC<BulletPointProps> = ({
  number,
  primaryText,
  secondaryText,
}) => {
  return (
    <div className="flex flex-row lg:flex-col gap-x-6 items-center lg:items-start">
      <div>
        <Circle size={circleSize} text={number} fontSize={16} />
      </div>
      <div className="lg:mt-2">
        <div style={{ ...decimaBold }}>{primaryText}</div>
        {secondaryText ?? <div>{secondaryText}</div>}
      </div>
    </div>
  );
};

export default BulletPoint;
