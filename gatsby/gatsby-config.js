module.exports = {
  siteMetadata: {
    title: `slaterslater`,
    description: `My portfolio site to showcase what I'm working on`,
    author: `slaterslater`,
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
  ],
}
