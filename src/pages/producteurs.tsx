import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Footer from "../components/footer";
import { useStaticQuery, graphql } from "gatsby";
import { ProducteurData } from "../type";
import Producteur from "../components/producteur";

const ProducteursPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/producteurs/" } }
      ) {
        edges {
          node {
            frontmatter {
              nom
              localisation
              categories
              type
              image
              url
            }
          }
        }
      }
    }
  `);

  const producteurs = allMarkdownRemark.edges.map(
    ({ node }: { node: { frontmatter: ProducteurData } }) => node.frontmatter
  );

  return (
    <Layout>
      <SEO title="Producteurs engagés" />
      <h1 className="pt-25 md:pt-20 px-5 lg:px-60 mb-6">
        Producteurs régionaux
      </h1>
      <div className="px-5 lg:px-60 grid md:grid-cols-3 grid-rows-1 md:grid-cols-3 gap-4">
        {producteurs
          .filter((p) => p.type === "Local")
          .map((producteur: ProducteurData) => {
            return <Producteur producteur={producteur} />;
          })}
      </div>
      <h1 className="px-5 lg:px-60 my-6">Producteurs ailleurs en France</h1>
      <div className="px-5 lg:px-60 grid md:grid-cols-3 grid-rows-1 md:grid-cols-3 gap-4">
        {producteurs
          .filter((p) => p.type === "National")
          .map((producteur: ProducteurData) => {
            return <Producteur producteur={producteur} />;
          })}
      </div>
      <h1 className="px-5 lg:px-60 my-6">Références Biocoop</h1>
      <div className="px-5 lg:px-60 grid md:grid-cols-3 grid-rows-1 md:grid-cols-3 gap-4 mb-10">
        {producteurs
          .filter((p) => p.type === "Biocoop")
          .map((producteur: ProducteurData) => {
            return <Producteur producteur={producteur} />;
          })}
      </div>
      <Footer />
    </Layout>
  );
};

export default ProducteursPage;
