const path = require("path");

exports.createPages = async function ({ actions, graphql }) {
  const { createPage } = actions;
  const { data } = await graphql(`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/actus/" } }) {
        nodes {
          id
          fileAbsolutePath
        }
      }
    }
  `);
  const actus = data.allMarkdownRemark.nodes;
  for (const actu of actus) {
    const basename = path.basename(actu.fileAbsolutePath);
    const slug = basename.split(".md")[0];
    createPage({
      path: `actualites/${slug}`,
      component: require.resolve(`./src/components/actualite.js`),
      context: { slug: slug, id: actu.id }
    });
  }
};
