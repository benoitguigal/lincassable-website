import * as React from "react";

function IconTwitter(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 140 140"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M134.167 38.663L122.5 35.747l5.833-11.667-14.373 4.083A26.133 26.133 0 0070 47.413v5.834c-20.644 4.258-38.698-7-55.417-26.25q-4.375 23.333 8.75 35l-17.5-2.917c2.363 12.07 7.945 21.583 23.334 23.333l-14.584 5.834c5.834 11.666 14.969 13.475 29.167 14.583a62.697 62.697 0 01-37.917 11.667C80.237 147.566 122.5 98.957 122.5 56.163v-7.746z"
        fill="none"
        stroke={props.color ?? "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={5.83333}
      />
    </svg>
  );
}

export default IconTwitter;
