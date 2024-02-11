import React from "react";
import Layout from "../components/layout";
import PlasticBottleImage from "../images/plastic-bottle.png";
import History from "../components/history";
import Offer from "../components/offer";
import Recycling from "../components/recycling";
import Vision from "../components/vision";
import Advantages from "../components/advantages";
import Bottles from "../components/bottles";
import Partners from "../components/partners";
import Sector from "../components/sector";
import Hero from "../components/hero";

const IndexPage = () => (
  <Layout title="Home">
    <Hero />
    <Offer />
    <History />
    <div className="bg-black">
      <img
        className="m-auto sm:h-screen"
        src={PlasticBottleImage}
        alt="plastic bottle"
      />
    </div>
    <Recycling />
    <Vision />
    <Advantages />
    <Bottles />
    <Sector />
    <Partners />
  </Layout>
);

export default IndexPage;
