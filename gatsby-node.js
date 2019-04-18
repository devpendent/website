/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.onCreateWebpackConfig = ({ actions, loaders, plugins, stage }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: ['src', 'node_modules'],
      alias: {
        "_variables.sass": path.resolve(
          __dirname,
            "./src/styles/_variables.sass"
        ),
      },
    },
  })
}
