import React from "react";
import Layout from "../../components/layout";
import { useStaticQuery, graphql } from "gatsby";
import { ProducteurData } from "../../type";
import Producteur from "../../components/producteur";

const ProducteursPage = () => {
  const { allProducteursYaml } = useStaticQuery(graphql`
    query {
      allProducteursYaml {
        nodes {
          nom
          type
          localisation
          categories
          image
          url
        }
      }
    }
  `);

  const producteurs: ProducteurData[] = allProducteursYaml.nodes;

  return (
    <Layout title="Producteurs engagés">
      <div className="px-5 py-5 lg:px-20 2xl:px-60">
        <h1 className="mb-6">Producteurs régionaux</h1>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-rows-1 gap-4">
          {producteurs
            .filter((p) => p.type === "Local")
            .map((producteur: ProducteurData) => {
              return <Producteur producteur={producteur} />;
            })}
        </div>
        <h1 className="my-6">Producteurs ailleurs en France</h1>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-rows-1 gap-4">
          {producteurs
            .filter((p) => p.type === "National")
            .map((producteur: ProducteurData) => {
              return <Producteur producteur={producteur} />;
            })}
        </div>
        <h1 className="my-6">Références Biocoop</h1>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-rows-1 gap-4 mb-10">
          {producteurs
            .filter((p) => p.type === "Biocoop")
            .map((producteur: ProducteurData) => {
              return <Producteur producteur={producteur} />;
            })}
        </div>
      </div>
    </Layout>
  );
};

export default ProducteursPage;
