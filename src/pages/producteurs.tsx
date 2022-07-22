import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";

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
              category
              image
            }
          }
        }
      }
    }
  `);

  console.log(allMarkdownRemark);

  const producteurs = allMarkdownRemark.edges.map(
    ({ node }) => node.frontmatter
  );

  return (
    <Layout>
      <SEO title="Producteurs engagés" />
      <div className="py-20">
        {producteurs.map((producteur) => {
          return (
            <>
              <div>{producteur.nom}</div>
              <div>{producteur.localisation}</div>
              <div>{producteur.category}</div>
              <img src={producteur.image} />
            </>
          );
        })}
      </div>
    </Layout>
  );
};

export default ProducteursPage;
