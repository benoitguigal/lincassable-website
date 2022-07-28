import * as React from "react";
import { graphql } from "gatsby";
import Layout from "./layout";
import "./layout.css";

const Actu = ({ data }) => {
  const { markdownRemark } = data;
  const { html } = markdownRemark;
  return (
    <Layout title={markdownRemark.frontmatter.title}>
      <div className="md:py-16 py-20 px-10 md:px-28">
        <h1>{markdownRemark.frontmatter.title}</h1>
        <img src={markdownRemark.frontmatter.image} alt="Couverture" />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
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
