module.exports = {
  plugins: [
    'gatsby-plugin-mdx',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
  ],
  siteMetadata: {
    title: 'enableHR API',
    description:
      'Learn how to use the enableHR API to integrate with your software',
  },
}
