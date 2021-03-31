import React from "react";
import { PageProps } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Actus = (props: PageProps) => (
  <Layout>
    <SEO title="Actualités" />
    <h1>Ceci est une page actus</h1>
  </Layout>
);

export default Actus;
