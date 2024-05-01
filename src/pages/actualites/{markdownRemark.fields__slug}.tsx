import { HeadFC, PageProps, graphql } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import "../../styles/actualite.css";
import {
  colorGrey,
  decimaBold,
  navHeight,
  titleMargin,
} from "../../styles/theme";
import classNames from "classnames";

const paddings = "px-6 md:px-32 lg:px-56 xl:px-72 2xl:px-96";

const Actualite: React.FC<PageProps<Queries.ActualiteQuery>> = ({ data }) => {
  const actu = data.markdownRemark;

  return (
    <Layout>
      <main style={{ paddingTop: navHeight }} className="mb-16">
        <div className={classNames(paddings, "pt-14", "pb-20")}>
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
        <div className={paddings}>
          <div className="mt-10">Le {actu?.frontmatter?.date}</div>
          <div
            className="content mt-6 w-full"
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
        date(formatString: "DD.MM.YYYY", locale: "fr")
        image
        title
      }
    }
  }
`;
