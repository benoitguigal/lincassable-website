import React from "react";
import Seo from "../components/seo";
import Navbar from "../components/navbar";
import "../components/layout.css";

const Carte = () => {
  const iframeProps = {
    width: "100%",
    height: "100%",
    frameborder: "0",
    marginWidth: "0",
    marginHeight: "0",
    allowfullscreen: true
  };

  return (
    <>
      <Seo title="Où trouver / rammener mes bouteilles" />
      <div className="flex flex-col items-stretch h-screen">
        <Navbar />
        {/* render different iframe on mobile and desktop*/}
        <iframe
          {...iframeProps}
          title="Où trouver / rammener mes bouteilles ?"
          className="hidden md:block m-0 pt-12 h-full"
          src="https://lincassable.gogocarto.fr/annuaire?iframe=1&noheader=1#/carte/@43.69,5.53,9z?cat=all"
        ></iframe>
        <div className="md:hidden h-screen pt-16">
          <iframe
            {...iframeProps}
            title="Où trouver / rammener mes bouteilles ? (mobile)"
            className="m-0 p-0"
            src="https://lincassable.gogocarto.fr/annuaire?iframe=1&noheader=1#/carte/@43.79,5.27,8z?cat=all"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Carte;
