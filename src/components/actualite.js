import * as React from "react";
import { graphql } from "gatsby";
import Seo from "./seo";
import Navbar from "./navbar";
import "./actualite.css";

const Actu = ({ data }) => {
  const { markdownRemark } = data;
  const { html } = markdownRemark;
  return (
    <>
      <Seo title={markdownRemark.frontmatter.title} />
      <Navbar />
      <main className="pt-16 md:pt-12">
        <div className="px-10 md:px-28 xl:px-48 py-10">
          <h1>{markdownRemark.frontmatter.title}</h1>
          <img
            className="w-full h-80 static mt-5"
            style={{ objectFit: "cover" }}
            src={markdownRemark.frontmatter.image}
            alt="Couverture"
          />
          <div
            className="content mt-10 w-full"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </main>
    </>
  );
};

export default Actu;

export const pageQuery = graphql`
  query ActuByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        image
        title
      }
    }
  }
`;
