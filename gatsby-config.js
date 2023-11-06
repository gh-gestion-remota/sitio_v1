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
  ],
}
