import React from "react";

const Section = ({ children }) => (
  <div class="px-10 py-10 lg:px-48 lg:py-32">{children}</div>
);

const GreenBottleSection = ({ children }) => (
  <div class="py-6 px-10 lg:py-16 lg:px-48 bg-green-bottle">{children}</div>
);

const GreySection = ({ children }) => (
  <div class="py-6 px-10 lg:py-16 lg:px-48 bg-grey">{children}</div>
);

export default Section;

export { GreenBottleSection, GreySection };
