import React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import SEO from "../../components/seo";
import Layout from "../../components/layout";
import Producteur from "../../components/producteur";
import { navHeight } from "../../styles/theme";

const ProducteursPage: React.FC<PageProps<Queries.ProducteursPageQuery>> = ({
  data,
}) => {
  const producteurs = data.allProducteursYaml.nodes;

  return (
    <Layout>
      <div
        style={{ paddingTop: navHeight }}
        className="px-5 pb-5 lg:px-20 2xl:px-60"
      >
        <h1 className="uppercase text-center mt-16">Catalogue</h1>
        <h2 className="mb-16 mt-28 uppercase">Producteurs régionaux</h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-rows-1 gap-4">
          {producteurs
            .filter((p) => p.type === "Local")
            .map((producteur) => {
              return <Producteur producteur={producteur} />;
            })}
        </div>
        <h2 className="mb-16 uppercase mt-28">
          Producteurs ailleurs en France
        </h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-rows-1 gap-4">
          {producteurs
            .filter((p) => p.type === "National")
            .map((producteur) => {
              return <Producteur producteur={producteur} />;
            })}
        </div>
        <h2 className="mb-16 uppercase mt-28">Références Biocoop</h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-rows-1 gap-4 mb-10">
          {producteurs
            .filter((p) => p.type === "Biocoop")
            .map((producteur) => {
              return <Producteur producteur={producteur} />;
            })}
        </div>
      </div>
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <SEO title="L'INCASSABLE | Producteurs engagés" pathname="/producteurs" />
);

export default ProducteursPage;

export const query = graphql`
  query ProducteursPage {
    allProducteursYaml {
      nodes {
        ...Producteur
      }
    }
  }
`;
