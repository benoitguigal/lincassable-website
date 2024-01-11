import * as React from "react";

function SvgLinkedin(props) {
  return (
    <svg
      id="linkedin_svg__Calque_1"
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
        {`.linkedin_svg__st2{clip-path:url(#linkedin_svg__SVGID_4_);fill:${
          props.color ?? "#253d39"
        }}`}
      </style>
      <defs>
        <path
          id="linkedin_svg__SVGID_1_"
          d="M-201.52 10.42H2000V2000H-201.52z"
        />
      </defs>
      <clipPath id="linkedin_svg__SVGID_2_">
        <use xlinkHref="#linkedin_svg__SVGID_1_" overflow="visible" />
      </clipPath>
      <path
        d="M1617.33 1999.98H382.58C171.53 1999.98-.2 1829.11-.2 1619.06V391.17c0-209.94 171.73-380.75 382.78-380.75h1234.75c210.94 0 382.58 170.81 382.58 380.75v1227.88c0 210.06-171.64 380.93-382.58 380.93zM382.58 131.92c-144.04 0-261.22 116.3-261.22 259.25v1227.88c0 143.01 117.18 259.42 261.22 259.42h1234.75c143.93 0 261.02-116.41 261.02-259.42V391.17c0-142.95-117.1-259.25-261.02-259.25H382.58z"
        clipPath="url(#linkedin_svg__SVGID_2_)"
        fill={props.color ?? "#253d39"}
      />
      <path
        fill={props.color ?? "#253d39"}
        d="M370.78 756.42h279.4v889.48h-279.4z"
      />
      <defs>
        <path
          id="linkedin_svg__SVGID_3_"
          d="M-7534.8 10.42H2000V2000h-9534.8z"
        />
      </defs>
      <clipPath id="linkedin_svg__SVGID_4_">
        <use xlinkHref="#linkedin_svg__SVGID_3_" overflow="visible" />
      </clipPath>
      <path
        className="linkedin_svg__st2"
        d="M1351.04 735.97c-179.45 0-263.54 149.94-263.54 149.94V756.44H808.1v889.3h279.4v-537.23c109-211.17 327.54-147.72 327.54 65.84v471.39h279.41v-471.39c-.01-374.76-163.96-438.38-343.41-438.38M663.8 459.9c0 84.65-68.61 153.44-153.44 153.44-84.65 0-153.26-68.79-153.26-153.44 0-84.65 68.61-153.26 153.26-153.26 84.83 0 153.44 68.61 153.44 153.26"
      />
    </svg>
  );
}

export default SvgLinkedin;
