module.exports = {
  siteMetadata: {
    title: "lengyuexin",
    author: "lengyuexin",
    description: "Blog by lengyuexin. Using Gatsby.",
    siteUrl: "https://lengyuexin.github.io", // Domain of your site. No trailing slash!
    keywords: "Gatsby Mdx Blog",
    generator: "Gatsby React",
    defaultBanner: "/favicon.ico", // Path to your image you placed in the 'static' folder
  },
  pathPrefix: "/blog-preview/",
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
        name: "assets",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          post: require.resolve("./src/components/BlogLayout/index.js"),
          default: require.resolve("./src/components/BlogLayout/index.js"),
        },
        gatsbyRemarkPlugins: [
          // {
          //   resolve: `gatsby-remark-images`,
          //   options: {
          //     maxWidth: 590,
          //   },
          // },
          // {
          //   resolve: `gatsby-remark-responsive-iframe`,
          //   options: {
          //     wrapperStyle: `margin-bottom: 1.0725rem`,
          //   },
          // },
          // `gatsby-remark-prismjs`,
          // `gatsby-remark-copy-linked-files`,
          // `gatsby-remark-smartypants`,
          // {
          //   resolve: `gatsby-remark-images`,
          //   options: {
          //     maxWidth: 590,
          //   },
          // },
          // {
          //   resolve: `gatsby-remark-responsive-iframe`,
          //   options: {
          //     wrapperStyle: `margin-bottom: 1.0725rem`,
          //   },
          // },
          // 'gatsby-remark-autolink-headers',
          // {
          //   resolve: 'gatsby-remark-prismjs',
          //   options: {
          //     inlineCodeMarker: '÷',
          //   },
          // },
          // 'gatsby-remark-copy-linked-files',
          // 'gatsby-remark-smartypants',
          // {
          //   resolve: 'gatsby-remark-external-links',
          //   options: {
          //     target: '_blank',
          //   },
          // },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-130227707-1`,
      },
    },
    // rss feed
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              const siteUrl = site.siteMetadata.siteUrl
              return allMdx.edges.map(edge => {
                const postText = `
                <div style="margin-top=55px; font-style: italic;">(来自irismmr.io <a href="${siteUrl +
                  edge.node.fields.slug}">点击</a>去网上阅读.)</div>
              `
                let body = edge.node.rawBody
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.spoiler,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": body + postText }],
                })
              })
            },
            query: `
              {
                allMdx(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] }
                  filter: {fields: { langKey: {eq: "zh-hans"}}, fileAbsolutePath: {
                    regex: "/\.md$/"
                  }}
                ) {
                  edges {
                    node {
                      excerpt(pruneLength: 250)
                      rawBody
                      fields { 
                        slug   
                      }
                      frontmatter {
                        title
                        date
                        spoiler
                      }
                      fileAbsolutePath
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "lengyuexin's Blog RSS Feed",
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-ebook`,
    //   options: {
    //     filename: 'overreacted-ebook.epub',
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             title
    //             author
    //           }
    //         }
    //         allMarkdownRemark(
    //           sort: { fields: frontmatter___date, order: ASC },
    //           filter: { fields: { langKey: { eq: "en" } } }
    //         ) {
    //           edges {
    //             node {
    //               id
    //               fileAbsolutePath
    //               rawMarkdownBody
    //               frontmatter {
    //                 title
    //                 date
    //               }
    //             }
    //           }
    //         }
    //       }`,
    //   },
    // },
    `gatsby-plugin-catch-links`,
    // page metadata for SEO
    `gatsby-plugin-react-helmet`,
    // typography样式主题
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
    // 多语言
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "zh-hans",
        useLangKeyLayout: false,
      },
    },
    // PWA‘s manifest 让浏览器更好的理解此网站
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `lengyuexin`,
        short_name: `lengyuexin`,
        start_url: `/blog-preview`,
        background_color: `#ffffff`,
        theme_color: `#ffa7c4`,
        display: `standalone`,
        icon: `src/assets/icon.png`, // This path is relative to the root of the site.
        theme_color_in_head: false,
      },
    },
    // 基于service worker的离线支持，且必须放在gatsby-plugin-manifest之后，保证可缓存manifest.webmanifest
    `gatsby-plugin-offline`,
  ],
}
