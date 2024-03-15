import React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import SEO from "../../components/seo";
import Layout from "../../components/layout";
import Producteur from "../../components/producteur";

const ProducteursPage: React.FC<PageProps<Queries.ProducteursPageQuery>> = ({
  data,
}) => {
  const producteurs = data.allProducteursYaml.nodes;

  return (
    <Layout>
      <div className="px-5 pb-5 pt-20 lg:px-20 2xl:px-60">
        <h4 className="mb-6">Producteurs régionaux</h4>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-rows-1 gap-4">
          {producteurs
            .filter((p) => p.type === "Local")
            .map((producteur) => {
              return <Producteur producteur={producteur} />;
            })}
        </div>
        <h4 className="my-6">Producteurs ailleurs en France</h4>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-rows-1 gap-4">
          {producteurs
            .filter((p) => p.type === "National")
            .map((producteur) => {
              return <Producteur producteur={producteur} />;
            })}
        </div>
        <h4 className="my-6">Références Biocoop</h4>
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
