import React, { CSSProperties } from "react";
import { green } from "../styles/theme";

const circleStyle: CSSProperties = {
  borderRadius: "50%",
  display: "inline-block",
};

type CircleProps = {
  size: number;
};

const Circle: React.FC<CircleProps> = ({ size }) => {
  return (
    <div
      style={{
        ...circleStyle,
        height: size,
        width: size,
        backgroundColor: green,
      }}
    ></div>
  );
};

export default Circle;
