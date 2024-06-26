import classNames from "classnames";
import React, { CSSProperties, ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
};

const Section: React.FC<SectionProps> = ({ children, style, className }) => {
  return (
    <section
      className={classNames(
        "px-6 md:px-24 lg:px-32 xl:px-56 2xl:px-72 py-20",
        className
      )}
      style={style}
    >
      {children}
    </section>
  );
};

export default Section;
