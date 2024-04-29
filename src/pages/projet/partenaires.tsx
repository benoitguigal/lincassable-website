import React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import Layout from "../../components/layout";
import { navHeight } from "../../styles/theme";
import SEO from "../../components/seo";
import Partners from "../../components/partners";

const Partenaires: React.FC<PageProps<Queries.PartenairesPageQuery>> = ({
  data,
}) => {
  return (
    <Layout>
      <div style={{ paddingTop: navHeight }}>
        <h1 className="uppercase text-center mt-16">Nos partenaires</h1>
        <Partners
          allPartnersYaml={data.allPartnersYaml}
          type="financier"
          title="Ils soutiennent L'Incassable"
        />
        <Partners
          allPartnersYaml={data.allPartnersYaml}
          type="accompagnement"
          title="Ils accompagnent"
        />
        <Partners
          allPartnersYaml={data.allPartnersYaml}
          type="reseau"
          title="Nous sommes membres de"
        />
        <Partners
          allPartnersYaml={data.allPartnersYaml}
          type="logistique"
          title="Nos partenaires logistiques"
        />
      </div>
    </Layout>
  );
};

export default Partenaires;

export const Head: HeadFC = () => (
  <SEO title="L'INCASSABLE | Nos partenaires" pathname="/projet/partenaires" />
);

export const query = graphql`
  query PartenairesPage {
    ...Partners
  }
`;
