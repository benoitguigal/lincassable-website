import * as React from "react";

function SvgFacebook(props) {
  return (
    <svg
      id="facebook_svg__Calque_1"
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      viewBox="0 0 2000 2000"
      xmlSpace="preserve"
      width="1em"
      height="1em"
      {...props}
    >
      <style>{`.facebook_svg__st0{fill:${props.color ?? "#253d39"}}`}</style>
      <path
        className="facebook_svg__st0"
        d="M1615.3 2004.4H382.48C171.58 2004.4 0 1832.84 0 1621.95V389.13C0 178.35 171.58 6.85 382.48 6.85H1615.3c210.9 0 382.48 171.5 382.48 382.28v1232.82c0 210.89-171.59 382.45-382.48 382.45zM382.48 128.84c-143.61 0-260.43 116.76-260.43 260.29v1232.82c0 143.58 116.82 260.46 260.43 260.46H1615.3c143.61 0 260.43-116.88 260.43-260.46V389.13c0-143.53-116.82-260.29-260.43-260.29H382.48z"
      />
      <path
        className="facebook_svg__st0"
        d="M961.72 1952.69v-641.05h-270.9v-345.7h270.9l2.59-204.05c0-216.64 162.58-412.74 415.51-412.74h302.01v340.52h-273.68c-74.81 0-92.95 15.55-92.95 105.92v172.95h340.71v345.71H1310.2v638.45H961.72z"
      />
    </svg>
  );
}

export default SvgFacebook;
