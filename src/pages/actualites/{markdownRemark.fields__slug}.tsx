import { HeadFC, PageProps, graphql } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import "../../styles/actualite.css";
import { decimaBold, navHeight } from "../../styles/theme";

const Actualite: React.FC<PageProps<Queries.ActualiteQuery>> = ({ data }) => {
  const actu = data.markdownRemark;

  return (
    <Layout>
      <main style={{ paddingTop: navHeight }}>
        <div className="px-6 md:px-32 lg:px-56 xl:px-72 2xl:px-96 pb-20 pt-14">
          <h1 style={decimaBold} className="text-center uppercase">
            {actu!.frontmatter!.title}
          </h1>
        </div>
        <img
          className="w-full h-80"
          style={{ objectFit: "cover" }}
          src={actu!.frontmatter!.image!}
          alt="Couverture"
        />
        <div className="px-10 md:px-28 xl:px-48 py-10">
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
