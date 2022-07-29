import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `L'INCASSABLE`,
    siteUrl: `https://lincassable.com`,
    description: `Filière de consigne de bouteilles en verre dans les Bouches-du-Rhône et le Vaucluse`
  },
  plugins: [
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pagesContent",
        path: `${__dirname}/src/content/pages`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "actus",
        path: `${__dirname}/src/content/actus`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "producteurs",
        path: `${__dirname}/src/content/producteurs`
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-transformer-yaml`
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
              staticFolderName: "static"
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 720
            }
          }
        ]
      }
    },
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "L'INCASSABLE",
        short_name: "L'INCASSABLE",
        start_url: `/`,
        background_color: "#253D39",
        theme_color: "#EAEDEC",
        display: `standalone`,
        icon: `src/images/favicon.svg` // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "1",
        matomoUrl: "https://lincassable.matomo.cloud/",
        siteUrl: "https://lincassable.com"
      }
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: [`/producteurs/pdf`]
      }
    }
  ]
};

export default config;
