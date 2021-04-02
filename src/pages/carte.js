import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Map from "../components/map";

const Carte = () => (
  <Layout>
    <SEO title="Carte" />
    <Map class="h-screen pt-12" />
  </Layout>
);

export default Carte;
