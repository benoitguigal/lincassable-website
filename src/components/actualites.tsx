import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./layout.css";

const Actualites = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/actus/" } }
        sort: { fields: fileAbsolutePath, order: DESC }
      ) {
        nodes {
          fileAbsolutePath
          frontmatter {
            date(formatString: "DD MMM YYYY", locale: "fr")
            title
            image
          }
          excerpt(pruneLength: 400)
        }
      }
    }
  `);

  return (
    <div className="py-24 flex flex-col">
      {allMarkdownRemark.nodes.map((markdownRemark, idx) => {
        const { date, title, image } = markdownRemark.frontmatter;
        const basename = markdownRemark.fileAbsolutePath.split("/").pop();
        const slug = basename.split(".md")[0];
        return (
          <a
            className="m-auto no-underline cursor-pointer w-4/5 md:w-1/2 xl:w-2/5 mb-5"
            href={`/actualites/${slug}`}
            key={idx}
          >
            <div className="text-gray-400">Publié le {date}</div>
            <h5 className="mb-4">{title}</h5>
            <div>
              <img
                src={image}
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
  );
};

export default Actualites;
