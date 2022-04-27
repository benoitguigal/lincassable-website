import * as React from "react";
import Navbar from "./navbar";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
