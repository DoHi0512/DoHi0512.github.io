module.exports = {
  siteMetadata: {
    title: `donglog`,
    author: {
      name: `Lee Dong Hun`,
      summary: `Frontend Developer`,
    },
    description: `donghun's TechBlog`,
    siteUrl: `https://dohi0512.github.io/`,
    social: {
      instagram: `donghuni_512`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    "gatsby-plugin-mdx",
    "gatsby-plugin-advanced-sitemap",
    "gatsby-plugin-dark-mode",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://dohi0512.github.io/",
        sitemap: "https://dohi0512.github.io/sitemap.xml",
        policy: [
          {
            userAgent: "*",
            allow: "/",
            sitemap: "https://dohi0512.github.io/sitemap-index.xml",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `G-5RYVH9JQKE`,
        head: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `components`,
        path: `${__dirname}/src/components`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `templates`,
        path: `${__dirname}/src/templates`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
        name: `blog`,
      },
    },
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-copy-linked-files`],
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              isIconAfterHeader: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/assets/logo.png`,
      },
    },
  ],
}

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
