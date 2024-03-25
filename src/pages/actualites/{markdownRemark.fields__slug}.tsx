import { HeadFC, PageProps, graphql } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import "../../styles/actualite.css";

const Actualite: React.FC<PageProps<Queries.ActualiteQuery>> = ({ data }) => {
  const actu = data.markdownRemark;

  return (
    <Layout>
      <main className="pt-16 md:pt-14">
        <div className="px-10 md:px-28 xl:px-48 py-10">
          <h3>{actu!.frontmatter!.title}</h3>
          <img
            className="w-full h-80 static mt-5"
            style={{ objectFit: "cover" }}
            src={actu!.frontmatter!.image!}
            alt="Couverture"
          />
          <div
            className="content mt-10 w-full"
            dangerouslySetInnerHTML={{ __html: actu!.html! }}
          />
        </div>
      </main>
    </Layout>
  );
};

export default Actualite;

export const Head: HeadFC<Queries.ActualiteQuery> = ({ data }) => (
  <SEO
    title={`L'INCASSABLE | ${data.markdownRemark?.frontmatter?.title}`}
    pathname={`/actus/${data.markdownRemark?.fields?.slug}/`}
  />
);

export const query = graphql`
  query Actualite($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fileAbsolutePath
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        image
        title
      }
    }
  }
`;
