import React from "react";
import { ProducteurData } from "../type";
type ProducteurProps = {
  producteur: ProducteurData;
};

const Producteur = ({ producteur }: ProducteurProps) => {
  return (
    <a
      href={producteur.url ?? "#"}
      target="_blank"
      className="flex md:flex-row items-center justify-between justify-items-stretch border shadow rounded bg-white no-underline max-w-xl min-w-full p-5 w-full hover:bg-gray-100"
    >
      <img
        className="h-48 w-auto md:rounded-none md:rounded-l-lg mr-6 justify-self-end w-full"
        src={producteur.image}
        alt=""
      />
      <div className="justify-self-start w-full">
        <h3>{producteur.nom}</h3>
        <div>{producteur.localisation}</div>
      </div>
      <div>
        {producteur.categories.map((category) => (
          <div className="text-xs font-semibold inline-block pt-1 pb-2 px-2 rounded bg-green-bottle uppercase last:mr-0 mr-1">
            {category}
          </div>
        ))}
      </div>
    </a>
  );
};

export default Producteur;
