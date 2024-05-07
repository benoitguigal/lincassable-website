import React from "react";
import { graphql } from "gatsby";
import { linkStyle } from "../styles/theme";

type EquipeMemberProps = {
  member: Queries.EquipeMemberFragment;
};

const EquipeMember: React.FC<EquipeMemberProps> = ({ member }) => {
  const card = (
    <div className="flex flex-col items-center text-center gap-y-1">
      <img className="w-52" src={member.photo!} alt={member.nom!} />
      <h4>{member.nom}</h4>
      <div>{member.fonction}</div>
      <a style={linkStyle} href={`mailto:${member.email}`}>
        {member.email}
      </a>
    </div>
  );

  if (member.linkedin) {
    return (
      <a href={member.linkedin ?? "/projet/equipe"} target="_blank">
        {card}
      </a>
    );
  }

  return card;
};

export default EquipeMember;

export const query = graphql`
  fragment EquipeMember on EquipeYaml {
    nom
    linkedin
    fonction
    email
    photo
    type
    date_entree
  }
`;
