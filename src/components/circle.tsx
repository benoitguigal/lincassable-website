import React, { CSSProperties } from "react";
import { decimaMonoBold, green, lightGrey } from "../styles/theme";

const circleStyle: CSSProperties = {
  borderRadius: "50%",
  backgroundColor: green,
  display: "flex",
  justifyContent: "center" /* Centre le contenu horizontalement */,
  alignItems: "center" /* Centre le contenu verticalement */,
};

type CircleProps = {
  size: number;
  text?: string;
  fontSize?: number;
};

const Circle: React.FC<CircleProps> = ({ size, text, fontSize = 25 }) => {
  return (
    <div
      style={{
        ...circleStyle,
        height: size,
        width: size,
      }}
    >
      <p style={{ color: lightGrey, ...decimaMonoBold, fontSize }}>{text}</p>
    </div>
  );
};

export default Circle;
