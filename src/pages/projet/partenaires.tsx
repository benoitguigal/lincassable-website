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
        <h1 className="text-center mt-16 uppercase">Les partenaires</h1>
        <Partners
          allPartnersYaml={data.allPartnersYaml}
          type="financier"
          title="Ils soutiennent L'Incassable"
        />
        <Partners
          allPartnersYaml={data.allPartnersYaml}
          type="accompagnement"
          title="Ils nous accompagnent"
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

export const Head: HeadFC = ({ location }) => (
  <SEO title="L'INCASSABLE | Les partenaires" pathname={location.pathname} />
);

export const query = graphql`
  query PartenairesPage {
    ...Partners
  }
`;
