/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const webpack = require('webpack')

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions
  const result = await graphql(
    `
      {
        articles: allStrapiArticle {
          edges {
            node {
              strapiId
            }
          }
        }
        categories: allStrapiCategory {
          edges {
            node {
              strapiId
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog articles pages.
  const articles = result.data.articles.edges
  const categories = result.data.categories.edges

  articles.forEach((article, index) => {
    createPage({
      path: `/article/${article.node.strapiId}`,
      component: require.resolve('./src/templates/article.js'),
      context: {
        id: article.node.strapiId,
      },
    })
  })

  // categories.forEach((category, index) => {
  //   createPage({
  //     path: `/category/${category.node.strapiId}`,
  //     component: require.resolve('./src/templates/category.js'),
  //     context: {
  //       id: category.node.strapiId,
  //     },
  //   })
  // })
}

exports.onCreateWebpackConfig = ({stage, loaders, actions}) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-animation-on-scroll/,
            use: loaders.null(),
          },
          {
            test: /lottie-web/,
            use: loaders.null(),
          },
        ],
      },
      plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery',
        }),
      ],
    })
  }
}
