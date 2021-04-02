import * as React from "react";

function IconFacebook(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 140 140"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M103.647 43.75H78.75V32.667a5.67 5.67 0 015.903-6.417c2.439 0 17.43.058 17.43.058V2.917H76.831c-22.908 0-27.248 17.348-27.248 28.32V43.75h-17.5v23.333h17.5v70H78.75v-70h22.464z"
        fill="none"
        stroke={props.color ?? "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={5.83333}
      />
    </svg>
  );
}

export default IconFacebook;
