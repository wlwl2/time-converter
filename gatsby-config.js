module.exports = {
  siteMetadata: {
    title: ` Time Converter`,
    description: `Demo of a simple offline web time 
    converter which uses the Service Worker API.`,
    author: `@wlwl2`
  },
  plugins: [
    `gatsby-plugin-react-helmet-async`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        
        // This path is relative to the root of the site.
        icon: `src/images/new-icon.png`
      }
    },
    `gatsby-plugin-offline`
  ]
}
