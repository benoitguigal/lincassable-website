import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Carte = () => {
  const iframeProps = {
    width: "100%",
    height: "100%",
    frameborder: "0",
    allowfullscreen: true
  };

  return (
    <Layout>
      <SEO title="Carte" />
      {/* render different iframe on mobile and desktop*/}
      <iframe
        {...iframeProps}
        title="Où trouver / rammener mes bouteilles ?"
        className="hidden md:block m-0 p-0 pt-12 h-screen"
        src="//umap.openstreetmap.fr/fr/map/lincassable-ou-trouver-rammener-mes-bouteilles_610505?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=true&allowEdit=false&moreControl=false&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=false&onLoadPanel=undefined&captionBar=true&fullscreenControl=false"
      ></iframe>
      <iframe
        {...iframeProps}
        title="Où trouver / rammener mes bouteilles ? (mobile)"
        className="md:hidden md:block m-0 p-0 pt-12 h-screen"
        src="//umap.openstreetmap.fr/fr/map/lincassable-ou-trouver-rammener-mes-bouteilles_610505?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=false&allowEdit=false&moreControl=false&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=false&onLoadPanel=undefined&captionBar=false&fullscreenControl=false"
      ></iframe>
    </Layout>
  );
};

export default Carte;
