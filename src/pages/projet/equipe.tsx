import React, { useMemo } from "react";
import { PageProps, graphql } from "gatsby";
import Layout from "../../components/layout";
import { navHeight } from "../../styles/theme";
import Section from "../../components/section";
import EquipeMember from "../../components/equipe-member";

const Equipe: React.FC<PageProps<Queries.EquipePageQuery>> = ({ data }) => {
  const members = data.allEquipeYaml.nodes;

  const sortedMembers = useMemo(
    () => [...members].sort((m1, m2) => m1.ordre! - m2.ordre!),
    [members]
  );

  return (
    <Layout>
      <div style={{ paddingTop: navHeight }}>
        <Section>
          <h1 className="uppercase text-center">L'équipe</h1>
          <div className="m-auto grid grid-cols-2 lg:grid-cols-3 xl:w-4/5 gap-x-16 gap-y-16 mt-28">
            {sortedMembers.map((member) => (
              <EquipeMember member={member} />
            ))}
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export default Equipe;

export const query = graphql`
  query EquipePage {
    allEquipeYaml {
      nodes {
        ...EquipeMember
        ordre
      }
    }
  }
`;
