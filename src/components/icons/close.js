import * as React from "react";

function IconClose(props) {
  return (
    <svg
      viewBox="0 0 140 140"
      xmlns="http://www.w3.org/2000/svg"
      fill={props.color ?? "black"}
      stroke={props.color ?? "black"}
      height="1em"
      width="1em"
      {...props}
    >
      <path
        d="M2.917 2.91l134.166 134.167m0-134.166L2.917 137.077"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={5.83333}
      />
    </svg>
  );
}

export default IconClose;
