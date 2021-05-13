import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PlasticBottleImage from "../images/plastic-bottle.png";
import History from "../components/history";
import Recycling from "../components/recycling";
import Vision from "../components/Vision";
import Advantages from "../components/advantages";
import Bottles from "../components/bottles";
import Sector from "../components/sector";
import Hero from "../components/hero";
import Footer from "../components/footer";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <History />
    <div class="bg-black">
      <img
        class="m-auto sm:h-screen"
        src={PlasticBottleImage}
        alt="plastic bottle"
      />
    </div>
    <Recycling />
    <Vision />
    <Advantages />
    <Bottles />
    <Sector />
    <Footer />
  </Layout>
);

export default IndexPage;
