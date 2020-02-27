module.exports = {
  siteMetadata: {
    title: 'Irismmr',
    author: 'Iris Liu',
    description: 'Blog by Iris Liu. Using Gatsby.',
    siteUrl: 'https://irismmr.io',
    social: {
      twitter: 'none',
    },
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
        name: 'assets',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          post: require.resolve('./src/components/BlogLayout/index.js'),
          default: require.resolve('./src/components/BlogLayout/index.js'),
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
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-130227707-1`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             title
    //             description
    //             siteUrl
    //             site_url: siteUrl
    //           }
    //         }
    //       }
    //     `,
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, allMarkdownRemark } }) => {
    //           return allMarkdownRemark.edges.map(edge => {
    //             const siteUrl = site.siteMetadata.siteUrl;
    //             const postText = `
    //             <div style="margin-top=55px; font-style: italic;">(This is an article posted to my blog at overreacted.io. You can read it online by <a href="${siteUrl +
    //               edge.node.fields.slug}">clicking here</a>.)</div>
    //           `;

    //             let html = edge.node.html;
    //             // Hacky workaround for https://github.com/gaearon/overreacted.io/issues/65
    //             html = html
    //               .replace(/href="\//g, `href="${siteUrl}/`)
    //               .replace(/src="\//g, `src="${siteUrl}/`)
    //               .replace(/"\/static\//g, `"${siteUrl}/static/`)
    //               .replace(/,\s*\/static\//g, `,${siteUrl}/static/`);

    //             return Object.assign({}, edge.node.frontmatter, {
    //               description: edge.node.frontmatter.spoiler,
    //               date: edge.node.frontmatter.date,
    //               url: site.siteMetadata.siteUrl + edge.node.fields.slug,
    //               guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
    //               custom_elements: [{ 'content:encoded': html + postText }],
    //             });
    //           });
    //         },
    //         query: `
    //           {
    //             allMarkdownRemark(
    //               limit: 1000,
    //               sort: { order: DESC, fields: [frontmatter___date] }
    //               filter: {fields: { langKey: {eq: "en"}}}
    //             ) {
    //               edges {
    //                 node {
    //                   excerpt(pruneLength: 250)
    //                   html
    //                   fields { 
    //                     slug   
    //                   }
    //                   frontmatter {
    //                     title
    //                     date
    //                     spoiler
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         `,
    //         output: '/rss.xml',
    //         title: "Irismmr's Blog RSS Feed",
    //       },
    //     ],
    //   },
    // },
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
    // page metadata for SEO
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'zh-hans',
        useLangKeyLayout: false,
      },
    },
    `gatsby-plugin-catch-links`,
    // PWA config
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Irismmr`,
        short_name: `Irismmr`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffa7c4`,
        display: `standalone`,
        icon: `src/assets/icon.png`, // This path is relative to the root of the site.
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
