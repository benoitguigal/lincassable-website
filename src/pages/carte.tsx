import React from "react";
import { PageProps } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Map = (props: PageProps) => (
  <Layout>
    <SEO title="Carte" />
    <h1 className="pt-16">Ceci est une carte</h1>
  </Layout>
);

export default Map;
