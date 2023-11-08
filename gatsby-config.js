require('dotenv').config({
  path: '.env',
})
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {resolve: `gatsby-plugin-styled-components`,},
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    // {
    //   resolve: 'gatsby-source-prismic',
    //   options: {
    //     repositoryName: process.env.GATSBY_PRISMIC_REPO,
    //     customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
    //   },
    // },
  ],
}
