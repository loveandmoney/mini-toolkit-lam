require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`
});

const path = require(`path`);

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~api": path.resolve(__dirname, `src/api`),
        "~assets": path.resolve(__dirname, `src/assets`),
        "~components": path.resolve(__dirname, `src/components`),
        "~constants": path.resolve(__dirname, `src/constants`),
        "~context": path.resolve(__dirname, `src/context`),
        "~data": path.resolve(__dirname, `src/data`),
        "~fragments": path.resolve(__dirname, `src/fragments`),
        "~hooks": path.resolve(__dirname, `src/hooks`),
        "~layouts": path.resolve(__dirname, `src/layouts`),
        "~pages": path.resolve(__dirname, `src/pages`),
        "~slices": path.resolve(__dirname, `src/slices`),
        "~styles": path.resolve(__dirname, `src/styles`),
        "~templates": path.resolve(__dirname, `src/templates`),
        "~utils": path.resolve(__dirname, `src/utils`),
        "~schemas": path.resolve(__dirname, `sanity/schemas`),
        "~node_modules": path.resolve(__dirname, `node_modules`)
      }
    }
  });
};

/** ----------------------------------------------------------------------------
 * Create pages
 *
 */

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const { data, errors } = await graphql(`
    query CreatePagesQuery {
      allSanityPage {
        nodes {
          id
          slug {
            current
          }
          disabled
        }
      }
    }
  `);

  if (errors) {
    reporter.panicOnBuild(
      `Error while running createPages Sanity GraphQL query.`
    );
    return;
  }

  const pageTemplate = path.resolve(
    `${__dirname}/src/templates/page/index.tsx`
  );

  data?.allSanityPage?.nodes?.forEach((page) => {
    if (!page.disabled) {
      createPage({
        path: page.slug.current,
        component: pageTemplate,
        context: {
          id: page.id
        }
      });
    }
  });
};
