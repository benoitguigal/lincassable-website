import * as React from "react";

function IconInstagram(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 140 140"
      width="1em"
      height="1em"
      {...props}
    >
      <g
        fill="none"
        stroke={props.color ?? "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2.917 2.917h134.166v134.166H2.917z" strokeWidth={5.83333} />
        <path
          d="M37.917 75.833a32.083 32.083 0 1064.166 0 32.083 32.083 0 10-64.166 0z"
          strokeWidth={5.83333}
        />
        <path
          d="M49.583 75.833a20.417 20.417 0 1040.834 0 20.417 20.417 0 10-40.834 0zM2.917 61.25h38.5M98.583 61.25h38.5M102.083 20.417h17.5v17.5h-17.5zM26.25 4.912v27.171M37.917 2.917v29.166M49.583 2.917v29.166M61.25 2.917v29.166"
          strokeWidth={5.83333}
        />
      </g>
    </svg>
  );
}

export default IconInstagram;
