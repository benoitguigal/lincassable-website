import { HeadFC, PageProps, graphql } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import { navHeight } from "../../styles/theme";
import Reemployer from "../../components/join/producteurs/reemployer";
import BandeauBouteille from "../../images/rejoindre/producteurs/bandeau-bouteilles.png";
import Benefices from "../../components/join/producteurs/benefices";
import MiseEnPlace from "../../components/join/producteurs/mise-en-place";
import Accompagnement from "../../components/home/accompagnement";
import Partners from "../../components/partners";

const ProducteursJoinPage: React.FC<
  PageProps<Queries.ProducteursJoinPageQuery>
> = ({ data }) => {
  return (
    <Layout>
      <div style={{ paddingTop: navHeight }}>
        <h1 className="uppercase text-center mt-16">Producteurs</h1>
        <Reemployer />
        <Benefices />
        <div className="px-6 md:px-24 lg:px-32 xl:px-56 2xl:px-72 py-6">
          <img className="w-full" src={BandeauBouteille} alt="Bouteilles" />
        </div>
        <MiseEnPlace />
        <Partners
          allPartnersYaml={data.allPartnersYaml}
          title="Producteurs partenaires"
          type="producteur"
          link={{
            to: "/producteurs",
            text: "Découvrez le catalogue de boissons consignées",
          }}
        />
        <Accompagnement type="producteur" />
      </div>
    </Layout>
  );
};

export const Head: HeadFC = ({ location }) => (
  <SEO
    title="L'INCASSABLE | Rejoindre la filière | Producteurs"
    pathname={location.pathname}
  />
);

export default ProducteursJoinPage;

export const query = graphql`
  query ProducteursJoinPage {
    ...Partners
  }
`;
