require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `BitXHub`,
    description: `趣链科技自主研发的开源跨链技术平台BitXHub同时支持同构及异构区块链间的跨链交易，允许异构的资产互换、数据互通及服务互补。BitXHub致力于打造高可扩展、强鲁棒性、易运维升级的联盟链跨链通用协议及示范平台，为区块链互联网络的形成与价值孤岛的互通提供可靠的底层技术支撑。`,
    author: `@meshplus`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.STRAPI_API_URL,
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          'article',
          'activity',
        ],
        collectionTypes: [`article`, `user`, 'activity', 'category'],
        queryLimit: 1000,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: 'dev-only',
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    // {
    //   resolve: `gatsby-plugin-emotion`,
    //   options: {
    // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
    // The values for each key in this example are the defaults the plugin uses.
    // sourceMap: true,
    // autoLabel: 'dev-only',
    // labelFormat: `[local]`,
    // cssPropOptimization: true,
    // },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
