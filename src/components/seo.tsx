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
    logo,
    siteUrl,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    logo: `${siteUrl}${logo}`,
    url: `${siteUrl}${pathname || ``}`,
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "L'INCASSABLE",
    logo: seo.logo,
    url: seo.url,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:title" content={seo.title} />
      <meta name="keywords" content={keywords.join("")} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      {children}
    </>
  );
};

export default SEO;
