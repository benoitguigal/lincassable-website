import * as React from "react";

function SvgInstagram(props) {
  return (
    <svg
      id="instagram_svg__Calque_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x={0}
      y={0}
      viewBox="0 0 2000 2000"
      xmlSpace="preserve"
      width="1em"
      height="1em"
      {...props}
    >
      <style>
        {`.instagram_svg__st0{clip-path:url(#instagram_svg__SVGID_2_);fill:${
          props.color ?? "#253d39"
        }}`}
      </style>
      <defs>
        <path
          id="instagram_svg__SVGID_1_"
          d="M4.98 3.46h1986.26V1989.6H4.98z"
        />
      </defs>
      <clipPath id="instagram_svg__SVGID_2_">
        <use xlinkHref="#instagram_svg__SVGID_1_" overflow="visible" />
      </clipPath>
      <path
        className="instagram_svg__st0"
        d="M1610.97 1989.58H385.18C175.6 1989.58 5.09 1819 5.09 1609.31V383.55C5.09 173.98 175.6 3.46 385.18 3.46h1225.79c209.66 0 380.26 170.52 380.26 380.09v1225.76c0 209.69-170.6 380.27-380.26 380.27zM385.18 124.75c-142.68 0-258.74 116.09-258.74 258.8v1225.76c0 142.76 116.07 258.97 258.74 258.97h1225.79c142.76 0 258.91-116.21 258.91-258.97V383.55c0-142.71-116.15-258.8-258.91-258.8H385.18z"
      />
      <path
        className="instagram_svg__st0"
        d="M1495.38 996.49c0 274.5-222.59 496.9-497.09 496.9-274.32 0-496.9-222.4-496.9-496.9S723.98 499.4 998.29 499.4c274.5.01 497.09 222.59 497.09 497.09M1690.69 406.75c0 63.33-51.37 114.51-114.51 114.51-63.33 0-114.7-51.18-114.7-114.51 0-63.33 51.37-114.51 114.7-114.51 63.15-.01 114.51 51.17 114.51 114.51"
      />
    </svg>
  );
}

export default SvgInstagram;
