import React, { useMemo } from "react";
import { HeadFC, PageProps, graphql, navigate } from "gatsby";
import SEO from "../../components/seo";
import Layout from "../../components/layout";
import ActualiteCard from "../../components/actualite-card";
import { navHeight } from "../../styles/theme";
import Tag from "../../components/tag";

const ActualitesPage: React.FC<PageProps<Queries.ActualitesPageQuery>> = ({
  data,
  params,
  path,
}) => {
  const { category } = params;

  const basepath = path.split("*")[0];

  const allMarkdownRemark = data.allMarkdownRemark;

  const TOUS = "Tous";

  const tags: string[] = [
    TOUS,
    ...new Set<string>([
      ...allMarkdownRemark.nodes.flatMap(
        (node) =>
          (node.frontmatter!.categories ?? []).filter(
            (c) => !!c && c.length > 0
          ) as string[]
      ),
    ]),
  ];

  const filteredMarkdownRemark = useMemo(
    () =>
      category && category?.length > 0
        ? data.allMarkdownRemark.nodes.filter((n) => {
            const categories = (n.frontmatter?.categories ?? []).map((c) =>
              c?.toLowerCase()
            );
            return categories.includes(category);
          })
        : data.allMarkdownRemark.nodes,
    [category]
  );

  return (
    <Layout>
      <div style={{ paddingTop: navHeight }} className="mb-16">
        <h1 className="text-center uppercase mb-16 mt-16">Actualités</h1>
        <div className="flex m-auto text-center w-full justify-center gap-x-3">
          {tags.map((tag) => (
            <Tag
              value={tag}
              checked={
                category === tag.toLowerCase() ||
                (tag === TOUS && category === "")
              }
              onClick={(v) => {
                if (v === TOUS) {
                  navigate(basepath);
                } else {
                  navigate(`${basepath}${v.toLowerCase()}`);
                }
              }}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center place-content-center max-w-4xl m-auto mt-10">
          {filteredMarkdownRemark.map((markdownRemark) => {
            return <ActualiteCard {...markdownRemark} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default ActualitesPage;

export const Head: HeadFC = ({ location }) => (
  <SEO title="L'INCASSABLE | Actualités" pathname={location.pathname} />
);

export const query = graphql`
  query ActualitesPage {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/actus/" } }
      sort: { fileAbsolutePath: DESC }
    ) {
      nodes {
        ...ActualiteCard
      }
    }
  }
`;
