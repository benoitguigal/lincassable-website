import { graphql, useStaticQuery } from "gatsby";

type MetadataProps = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      keywords: string[];
      image: string;
      logo: string;
      siteUrl: string;
    };
  };
};

export const useSiteMetadata = () => {
  const data = useStaticQuery<MetadataProps>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          keywords
          image
          logo
          siteUrl
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
