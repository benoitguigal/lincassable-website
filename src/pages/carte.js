import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Carte = () => (
  <Layout>
    <SEO title="Carte" />
    <iframe
      title="Où trouver / rammener mes bouteilles ?"
      className="m-0 p-0 pt-12 h-screen"
      width="100%"
      height="100%"
      frameborder="0"
      allowfullscreen
      src="//umap.openstreetmap.fr/fr/map/lincassable-ou-trouver-rammener-mes-bouteilles_610505?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=true&allowEdit=false&moreControl=false&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=false&onLoadPanel=undefined&captionBar=true"
    ></iframe>
  </Layout>
);

export default Carte;
