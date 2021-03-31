import React from "react";
import { PageProps } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Map from "../components/map";

const Carte = () => (
  <Layout>
    <SEO title="Carte" />
    <Map />
  </Layout>
);

export default Carte;
