import React from "react";
import Layout from "../components/layout";
import PlasticBottleImage from "../images/plastic-bottle.png";
import History from "../components/history";
import Benefices from "../components/benefices";
import Offer from "../components/offer";
import Consommateurs from "../components/consommateurs";
import BoucleReemploi from "../components/boucle-remploi";
import Recycling from "../components/recycling";
import Vision from "../components/vision";
import Advantages from "../components/advantages";
import Bottles from "../components/bottles";
import Partners from "../components/partners";
import Sector from "../components/sector";
import Hero from "../components/hero";
import AdemeCitation from "../components/ademe";

const IndexPage = () => (
  <Layout title="Home">
    <Hero />
    <Benefices />
    <AdemeCitation />
    {/* <History />
    <div className="bg-black">
      <img
        className="m-auto sm:h-screen"
        src={PlasticBottleImage}
        alt="plastic bottle"
      />
    </div> */}
    <Offer />
    <Consommateurs />
    <BoucleReemploi />
    <Recycling />
    <Vision />
    <Advantages />
    <Bottles />
    <Sector />
    <Partners />
  </Layout>
);

export default IndexPage;
