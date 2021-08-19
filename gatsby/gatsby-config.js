module.exports = {
  siteMetadata: {
    title: `slaterslater`,
    description: `Projects by slaterslater`,
    author: `slaterslater`,
    siteUrl: `https://slaterslater.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "uwmh9loj",
        dataset: "production",
        watchMode: true,
        token: process.env.GATSBY_SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `slaterslater`,
        short_name: `slaterslater`,
        start_url: `/`,
        background_color: `#fdffee`,
        theme_color: `#fdffee`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
