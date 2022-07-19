import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `L'INCASSABLE`,
    siteUrl: `https://lincassable.com`,
    description: `Filière de consigne de bouteilles en verre dans les Bouches-du-Rhône et le Vaucluse`
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/"
      },
      __key: "pages"
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
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
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '1',
        matomoUrl: 'https://lincassable.matomo.cloud/',
        siteUrl: 'https://lincassable.com'
      }
    }
  ]
};

export default config;
