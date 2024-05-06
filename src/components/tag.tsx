import React, { CSSProperties } from "react";
import { green, grey, lightGrey, yellow } from "../styles/theme";

type TagProps = {
  value: string;
  checked: boolean;
  onClick: (value: string) => void;
};

const Tag: React.FC<TagProps> = ({ value, checked, onClick }) => {
  const tagStyle: CSSProperties = {
    borderColor: grey,
    border: `solid ${checked ? green : grey} 1px`,
    borderRadius: "5px",
    padding: "1px 8px 1px 8px",
    cursor: "pointer",
    color: checked ? lightGrey : green,
    ...(checked ? { backgroundColor: green } : {}),
  };

  return (
    <div style={tagStyle} onClick={() => onClick(value)}>
      <span className="relative -top-1 text-center">{value}</span>
    </div>
  );
};

export default Tag;
