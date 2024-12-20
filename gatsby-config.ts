import type { GatsbyConfig } from "gatsby";

if (process.env.NODE_ENV === "development") {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  });
}

const config: GatsbyConfig = {
  siteMetadata: {
    title: `L'INCASSABLE`,
    siteUrl: `https://lincassable.com`,
    description: `Filière de consigne de bouteilles en verre en Région Sud Provence-Alpes-Côte d'Azur`,
    image: "/lincassable.png",
    logo: "/logo.png",
    keywords: [
      "consigne",
      "réemploi",
      "bouteille",
      "marseille",
      "provence",
      "aix",
      "vaucluse",
      "avignon",
      "arles",
      "bière",
      "vin",
      "jus",
    ],
  },
  headers: [
    {
      source: "/files/*",
      headers: [{ key: "X-Frame-Options", value: "SAMEORIGIN" }],
    },
  ],
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-decap-cms",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "L'INCASSABLE",
        short_name: "L'INCASSABLE",
        start_url: `/`,
        background_color: "#253D39",
        theme_color: "#EAEDEC",
        display: `standalone`,
        icon: "src/images/favicon.svg",
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pagesContent",
        path: `./src/content/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "actus",
        path: `./src/content/actus`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "producteurs",
        path: `./src/content/producteurs`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "equipe",
        path: `./src/content/equipe`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "timeline",
        path: `./src/content/partners`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "timeline",
        path: `./src/content/timeline`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-yaml`,
    },
    `gatsby-plugin-preload-fonts`,
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "1",
        matomoUrl: "https://lincassable.matomo.cloud/",
        siteUrl: "https://lincassable.com",
      },
    },
  ],
};

export default config;
