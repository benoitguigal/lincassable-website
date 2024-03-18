import React, { CSSProperties, ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  style?: CSSProperties;
};

const Section: React.FC<SectionProps> = ({ children, style }) => {
  return (
    <section className="px-16 md:px-24 lg:px-32 xl:px-44 py-20" style={style}>
      {children}
    </section>
  );
};

export default Section;
