import * as React from "react";

const IconBurger: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 140 140"
      height="2em"
      width="2em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        stroke={props.color ?? "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M122.5 40.833h-105M122.5 70h-105M122.5 99.167h-105"
          strokeWidth={5.83333}
        />
      </g>
    </svg>
  );
};

export default IconBurger;
