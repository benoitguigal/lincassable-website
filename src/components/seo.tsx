import React, { ReactNode } from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

type SEOProps = {
  title?: string;
  description?: string;
  pathname?: string;
  children?: ReactNode;
};

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  pathname,
  children,
}) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    keywords,
    image,
    siteUrl,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:title" content={seo.title} />
      <meta name="keywords" content={keywords.join("")} />
      {children}
    </>
  );
};

export default SEO;