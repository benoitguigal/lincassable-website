import "./layout.css";
import * as React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Seo from "./seo";

const Layout = ({ title, children }) => {
  return (
    <>
      <Seo title={title} />
      <Navbar />
      <main className="pt-16 md:pt-12">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
