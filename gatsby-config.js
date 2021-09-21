module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby Site",
  },
  plugins: ["gatsby-plugin-netlify-cms", "gatsby-plugin-theme-ui", {
    resolve: `gatsby-plugin-create-client-paths`,
    options: { prefixes: [`/app/*`] },
  }
  ],
};
