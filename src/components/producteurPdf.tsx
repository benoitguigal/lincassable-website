import React from "react";
import { ProducteurData } from "../type";

type ProducteurProps = {
  producteur: ProducteurData;
};

const ProducteurPdf = ({ producteur }: ProducteurProps) => {
  return (
    <div className="w-full">
      <img className="h-48 w-auto m-auto" src={producteur.image} alt="" />
      <div className="mb-5 w-full text-center">
        <div className="font-bold">{producteur.nom}</div>
        {producteur.gamme && (
          <div
            className="text-gray-600 text-sm"
            dangerouslySetInnerHTML={{ __html: producteur.gamme }}
          ></div>
        )}
        {producteur.format && (
          <div className="text-gray-600 text-sm">{producteur.format}</div>
        )}
      </div>
    </div>
  );
};

export default ProducteurPdf;
