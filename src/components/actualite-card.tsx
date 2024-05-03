import Meta from "antd/es/card/Meta";
import { Link, graphql } from "gatsby";
import React from "react";
import {
  backgroundColorLightGrey,
  decimaBold,
  lightGrey,
} from "../styles/theme";
import slugify from "@sindresorhus/slugify";

const ActualiteCard: React.FC<Queries.ActualiteCardFragment> = ({
  fields,
  frontmatter,
}) => {
  const { image, miniature, title, date } = frontmatter!;
  const linkTo = `/actualites/${slugify(fields!.slug!)}`;

  return (
    <Link
      to={linkTo}
      style={{
        ...backgroundColorLightGrey,
        border: "solid 1px",
        borderColor: lightGrey,
        //height: "28rem",
        width: "15rem",
      }}
    >
      <img src={miniature ?? image!} alt={title!} className="w-full" />
      <div className="px-3 py-5 flex flex-col gap-y-3">
        <div style={decimaBold} className="uppercase">
          {title!.slice(0, 110)}
        </div>
        <div className="justify-self-end">{date}</div>
      </div>
    </Link>
  );
};

export default ActualiteCard;

export const query = graphql`
  fragment ActualiteCard on MarkdownRemark {
    fields {
      slug
    }
    frontmatter {
      date(formatString: "DD.MM.YYYY", locale: "fr")
      title
      image
      miniature
    }
  }
`;
