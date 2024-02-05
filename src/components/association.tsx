import * as React from "react";
import EquipeImg from "../images/equipe.jpg";

const Association = () => {
  return (
    <div className="pt-14">
      <img
        src={EquipeImg}
        className="md:w-3/5 w-3/4 m-auto my-4 md:mb-8 md:my-8"
        alt="Équipe"
      />
    </div>
  );
};

export default Association;
