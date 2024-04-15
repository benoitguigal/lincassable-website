import React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import SEO from "../../components/seo";
import Layout from "../../components/layout";
import slugify from "@sindresorhus/slugify";

const ActualitesPage: React.FC<PageProps<Queries.ActualitesPageQuery>> = ({
  data,
}) => {
  const allMarkdownRemark = data.allMarkdownRemark;

  return (
    <Layout>
      <div className="py-24 flex flex-col">
        {allMarkdownRemark.nodes.map((markdownRemark, idx) => {
          const { date, title, image } = markdownRemark!.frontmatter!;
          const slug = markdownRemark.fields?.slug;
          return (
            <a
              className="m-auto no-underline cursor-pointer w-4/5 md:w-1/2 xl:w-2/5 mb-5"
              // Gatsby utilise slugify en interne pour générer les urls à partir du
              // composant template {markdownRemark.fields__slug}
              href={`/actualites/${slugify(slug!)}`}
              key={idx}
            >
              <div className="text-gray-400">Publié le {date}</div>
              <h5 className="mb-4">{title}</h5>
              <div>
                <img
                  src={image!}
                  className="w-full md:h-72 h-28"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div>{markdownRemark.excerpt}</div>
              <hr className="mt-5" />
            </a>
          );
        })}
      </div>
    </Layout>
  );
};

export default ActualitesPage;

export const Head: HeadFC = () => (
  <SEO title="L'INCASSABLE | Actualités" pathname="/actus" />
);

export const query = graphql`
  query ActualitesPage {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/actus/" } }
      sort: { fileAbsolutePath: DESC }
    ) {
      nodes {
        fileAbsolutePath
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD MMM YYYY", locale: "fr")
          title
          image
        }
        excerpt(pruneLength: 400)
      }
    }
  }
`;
