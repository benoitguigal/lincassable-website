import React, { useMemo } from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import Layout from "../../components/layout";
import { navHeight } from "../../styles/theme";
import Section from "../../components/section";
import EquipeMember from "../../components/equipe-member";
import RejoinezNous from "../../components/projet/equipe/rejoignez";
import SEO from "../../components/seo";

const Equipe: React.FC<PageProps<Queries.EquipePageQuery>> = ({ data }) => {
  const members = data.allEquipeYaml.nodes;

  const sortedMembers = useMemo(
    () => [...members].sort((m1, m2) => m1.ordre! - m2.ordre!),
    [members]
  );

  return (
    <Layout>
      <div style={{ paddingTop: navHeight }}>
        <h1 className="uppercase text-center mt-16">L'équipe</h1>
        <Section>
          <div className="m-auto grid grid-cols-1 lg:grid-cols-3 gap-x-16 gap-y-16 max-w-4xl">
            {sortedMembers.map((member) => (
              <EquipeMember member={member} />
            ))}
          </div>
        </Section>

        <RejoinezNous />
      </div>
    </Layout>
  );
};

export default Equipe;

export const Head: HeadFC = ({ location }) => (
  <SEO title="L'INCASSABLE | L'équipe" pathname={location.pathname} />
);

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
