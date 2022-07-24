import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ProducteurData } from "../../type";
import ProducteurPdf from "../../components/producteurPdf";
import Document from "../../components/document";
import LincassableLogo from "../../images/lincassable-logo.png";
import Pastille from "../../images/pastille.png";

const ProducteursPdfPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/producteurs/" } }
        sort: { fields: [frontmatter___nom] }
      ) {
        edges {
          node {
            frontmatter {
              nom
              localisation
              gamme
              format
              type
              image
            }
          }
        }
      }
    }
  `);

  const producteurs = allMarkdownRemark.edges.map(
    ({ node }: { node: { frontmatter: ProducteurData } }) => node.frontmatter
  );

  const params = new URLSearchParams(location.search);

  console.log(params);
  console.log(params.get("biocoop"));

  return (
    <Document>
      <div className="px-5">
        <div className="flex flex-row w-full justify-between items-start">
          <div>
            <img
              className="mt-10 mb-3 w-80 h-auto flex-initial"
              src={LincassableLogo}
            />
            <h1>Références réemploi</h1>
          </div>
          <img className="mt-10 h-28" src={Pastille} />
        </div>
        <h2 className="mb-6">Producteurs régionaux</h2>
        <div className="grid grid-cols-4 gap-2 space-between">
          {producteurs
            .filter((p) => p.type === "Local")
            .map((producteur: ProducteurData) => {
              return <ProducteurPdf producteur={producteur} />;
            })}
        </div>
        <h2 className="my-6">Producteurs ailleurs en France</h2>
        <div className="grid grid-cols-4 gap-4">
          {producteurs
            .filter((p) => p.type === "National")
            .map((producteur: ProducteurData) => {
              return <ProducteurPdf producteur={producteur} />;
            })}
        </div>
        {params.get("biocoop") === "true" && (
          <>
            <h2 className="my-6">Références Biocoop</h2>
            <div className="grid grid-cols-4 gap-4 mb-10">
              {producteurs
                .filter((p) => p.type === "Biocoop")
                .map((producteur: ProducteurData) => {
                  return <ProducteurPdf producteur={producteur} />;
                })}
            </div>
          </>
        )}
      </div>
    </Document>
  );
};

export default ProducteursPdfPage;
