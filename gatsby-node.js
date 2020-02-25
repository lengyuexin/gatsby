const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');
const { supportedLanguages } = require('./i18n');
const { createFilePath } = require("gatsby-source-filesystem")

const translationsByDirectory = (posts) => {
  return _.reduce(
    posts,
    (result, post) => {
      const directoryName = _.get(post, 'node.fields.directoryName');
      const langKey = _.get(post, 'node.fields.langKey');
      if (directoryName && langKey && langKey !== 'zh-hans') {
        (result[directoryName] || (result[directoryName] = [])).push(
          langKey
        );
      }

      return result;
    },
    {}
  );
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  // Oops
  createRedirect({
    fromPath: '/zh_TW/things-i-dont-know-as-of-2018/',
    toPath: '/zh-hant/things-i-dont-know-as-of-2018/',
    isPermanent: true,
    redirectInBrowser: true,
  });
  // Oops 2
  createRedirect({
    fromPath: '/not-everything-should-be-a-hook/',
    toPath: '/why-isnt-x-a-hook/',
    isPermanent: true,
    redirectInBrowser: true,
  });
  // Oops 3
  createRedirect({
    fromPath: '/making-setinterval-play-well-with-react-hooks/',
    toPath: '/making-setinterval-declarative-with-react-hooks/',
    isPermanent: true,
    redirectInBrowser: true,
  });

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/components/BlogLayout/index.js');

    // Create index pages for all supported languages
    Object.keys(supportedLanguages).forEach(langKey => {
      createPage({
        path: langKey === 'zh-hans' ? '/' : `/${langKey}/`,
        component: path.resolve('./src/templates/home-index.js'),
        context: {
          langKey,
        },
      });
      createPage({
        path: langKey === 'zh-hans' ? '/blog' : `/${langKey}/blog`,
        component: path.resolve('./src/templates/blog-index.js'),
        context: {
          langKey,
        },
      });
    });

    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  frontmatter {
                    title
                    path
                  }
                  fields {
                    slug
                    langKey
                    directoryName
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
          return;
        }

        // // Create blog posts pages.
        // const posts = result.data.allMdx.edges

        // posts.forEach((post, index) => {
        //   const previous = index === posts.length - 1 ? null : posts[index + 1].node
        //   const next = index === 0 ? null : posts[index - 1].node

        //   createPage({
        //     path: post.node.fields.slug,
        //     component: blogPost,
        //     context: {
        //       slug: post.node.fields.slug,
        //       previous,
        //       next,
        //     },
        //   })
        // })

        // // Create blog posts pages.
        // const posts = result.data.allMdx.edges;

        // const allSlugs = _.reduce(
        //   posts,
        //   (result, post) => {
        //     result.add(post.node.fields.slug);
        //     return result;
        //   },
        //   new Set()
        // );

        // const defaultLangPosts = posts.filter(
        //   ({ node }) => node.fields.langKey === 'zh-hans'
        // );
        
        // const postTranslationsByDirectory = translationsByDirectory(posts);

        // _.each(defaultLangPosts, (post, index) => {
        //   const next =
        //     index === defaultLangPosts.length - 1
        //       ? null
        //       : defaultLangPosts[index + 1].node;
        //   const previous = index === 0 ? null : defaultLangPosts[index - 1].node;

        //   const translations =
        //     postTranslationsByDirectory[_.get(post, 'node.fields.directoryName')] ||
        //     [];
        //   createPage({
        //     path: post.node.fields.slug,
        //     component: blogPost,
        //     context: {
        //       slug: post.node.fields.slug,
        //       previous,
        //       next,
        //       translations,
        //       translatedLinks: [],
        //     },
        //   });

        //   const otherLangPosts = posts.filter(
        //     ({ node }) => node.fields.langKey !== 'zh-hans'
        //   );
        //   _.each(otherLangPosts, post => {
        //     const translations =
        //       translationsByDirectory[_.get(post, 'node.fields.directoryName')];

        //     // Record which links to internal posts have translated versions
        //     // into this language. We'll replace them before rendering HTML.
        //     let translatedLinks = [];
        //     const { langKey, maybeAbsoluteLinks } = post.node.fields;
        //     maybeAbsoluteLinks.filter(v => v).forEach(link => {
        //       if (allSlugs.has(link)) {
        //         if (allSlugs.has('/' + langKey + link)) {
        //           // This is legit an internal post link,
        //           // and it has been already translated.
        //           translatedLinks.push(link);
        //         } else if (link.startsWith('/' + langKey + '/')) {
        //           console.log('-----------------');
        //           console.error(
        //             `It looks like "${langKey}" translation of "${
        //               post.node.frontmatter.title
        //             }" ` +
        //               `is linking to a translated link: ${link}. Don't do this. Use the original link. ` +
        //               `The blog post renderer will automatically use a translation if it is available.`
        //           );
        //           console.log('-----------------');
        //         }
        //       }
        //     });

        //     createPage({
        //       path: post.node.fields.slug,
        //       component: blogPost,
        //       context: {
        //         slug: post.node.fields.slug,
        //         translations,
        //         translatedLinks,
        //       },
        //     });
        //   });
        // });
      })
    );
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: 'slug',
      // TODO: The GraphQL query in the non-page component "/Users/m_liu/Documents/irismmr-blog/src/templates/blog-post-mdx.js" will not be run.
      value,
    })
    createNodeField({
      node,
      name: 'langKey',
      value: node.frontmatter.langKey || 'zh-hans',
    })
    createNodeField({
      node,
      name: 'directoryName',
      value: path.basename(path.dirname(_.get(node, 'fileAbsolutePath'))),
    });
  }
};
