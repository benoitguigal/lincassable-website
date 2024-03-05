import { graphql } from "gatsby";
import React from "react";

type ProducteurProps = {
  producteur: Queries.ProducteurFragment;
};

const Producteur: React.FC<ProducteurProps> = ({ producteur }) => {
  return (
    <a
      href={producteur.url ?? "#"}
      target="_blank"
      className="flex md:flex-row items-center justify-between justify-items-stretch border shadow rounded bg-white no-underline max-w-xl min-w-full p-5 w-full hover:bg-gray-100"
    >
      <img
        className="h-48 w-auto md:rounded-none md:rounded-l-lg mr-6 justify-self-end w-full"
        src={producteur.image!}
        alt=""
      />

      <div className="justify-self-start self-end pb-10 w-full">
        <h6>{producteur.nom}</h6>
        <div>{producteur.localisation}</div>
      </div>
      <div className="self-start">
        {producteur.categories!.map((category) => (
          <div className="text-xs font-semibold inline-block pt-1 pb-2 px-2 rounded bg-green-bottle uppercase last:mr-0 mr-1">
            {category}
          </div>
        ))}
      </div>
    </a>
  );
};

export default Producteur;

export const query = graphql`
  fragment Producteur on ProducteursYaml {
    nom
    type
    localisation
    categories
    image
    url
  }
`;
