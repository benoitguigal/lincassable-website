import { CSSProperties } from "react";

// Couleurs
export const grey = "#D5DBD6";
export const yellow = "#FDEA18";
export const green = "#253D39";

export const backgroundColorGrey: CSSProperties = {
  backgroundColor: grey,
};

export const backgroundColorYellow: CSSProperties = {
  backgroundColor: yellow,
};

export const backgroundColorGreen: CSSProperties = {
  backgroundColor: green,
};

export const colorGrey: CSSProperties = {
  color: grey,
};

export const colorYellow: CSSProperties = {
  color: yellow,
};

export const colorGreen: CSSProperties = {
  color: green,
};

export const colorWhite: CSSProperties = {
  color: "white",
};

// Typographies

const decimaMonoBoldFont = "Decima-Mono-Bold";
const decimaBoldFont = "Decima-Bold";
const decimaLightFont = "Decima-Light";
const decimaMonoLightFont = "Decima-Mono-Light";

export const decimaMonoBold: CSSProperties = {
  fontFamily: decimaMonoBoldFont,
};

export const decimaBold: CSSProperties = {
  fontFamily: decimaBoldFont,
};

export const decimaLight: CSSProperties = {
  fontFamily: decimaLightFont,
};

export const decimaMonoLight: CSSProperties = {
  fontFamily: decimaMonoLightFont,
};

// Internal links

export const linkActiveStyle: CSSProperties = {
  textDecoration: "underline",
};

// Buttons

export const greyButton: CSSProperties = {
  border: "solid 1.5px",
  borderColor: grey,
  fontWeight: "bold",
};
