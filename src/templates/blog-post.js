// import React from 'react';
// import { Link, graphql } from 'gatsby';
// import get from 'lodash/get';
// import { MDXRenderer } from "gatsby-plugin-mdx"
// import  { MDXProvider } from '@mdx-js/react';

// import '../fonts/fonts-post.css';
// import Layout from '../components/Layout';
// import SEO from '../components/SEO';
// import Panel from '../components/Panel';
// import { formatPostDate, formatReadingTime } from '../utils/helpers';
// import { rhythm, scale } from '../utils/typography';
// import {
//   codeToLanguage,
//   createLanguageLink,
//   loadFontsForCode,
// } from '../utils/i18n';

// const GITHUB_USERNAME = 'gaearon';
// const GITHUB_REPO_NAME = 'overreacted.io';
// const systemFont = `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
//     "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
//     "Droid Sans", "Helvetica Neue", sans-serif`;

// class Translations extends React.Component {
//   render() {
//     let { translations, lang, languageLink, editUrl } = this.props;

//     return (
//       <div className="translations">
//         <Panel style={{ fontFamily: systemFont }}>
//           {translations.length > 0 && (
//             <>
//               <span>Translated by readers into: </span>
//               {translations.map((l, i) => (
//                 <React.Fragment key={l}>
//                   {l === lang ? (
//                     <b>{codeToLanguage(l)}</b>
//                   ) : (
//                     <Link to={languageLink(l)}>{codeToLanguage(l)}</Link>
//                   )}
//                   {i === translations.length - 1 ? '' : ' • '}
//                 </React.Fragment>
//               ))}
//             </>
//           )}
//           {lang !== 'zh-hans' && (
//             <>
//                 <br />
//                 <br />
//                 <Link to={languageLink('zh-hans')}>Read the original</Link>
//                 {' • '}
//                 <a href={editUrl} target="_blank" rel="noopener noreferrer">
//                     Improve this translation
//                 </a>
//                 {' • '}
//                 <Link to={`/${lang}`}>View all translated posts</Link>{' '}
//             </>
//           )}
//         </Panel>
//       </div>
//     );
//   }
// }

// class BlogPostMdxTemplate extends React.Component {
//   render() {
//     const post = this.props.data.mdx;
//     const siteTitle = get(this.props, 'data.site.siteMetadata.title');

//     let {
//       previous,
//       next,
//       slug,
//       translations,
//     } = this.props.pageContext;
//     const lang = post.fields.langKey;

//     translations = translations.slice();
//     translations.sort((a, b) => {
//       return codeToLanguage(a) < codeToLanguage(b) ? -1 : 1;
//     });

//     loadFontsForCode(lang);
//     // TODO: this curried function is annoying
//     const languageLink = createLanguageLink(slug, lang);
//     // eg: /en/data-post/
//     const enSlug = languageLink('en');
//     const editUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/master/src/pages/${enSlug.slice(1, enSlug.length - 1)}/index${lang === 'zh-hans' ? '' : '.' + lang}.md`;

//     return (
//       <div>
//       <h1>{post.frontmatter.title}</h1>
//       <MDXProvider >
//         <MDXRenderer>{post.body}</MDXRenderer>
//       </MDXProvider>
//     </div>
//     )
//     // return (
//     //   <Layout location={this.props.location} title={siteTitle}>
//     //     <SEO
//     //       lang={lang}
//     //       title={post.frontmatter.title}
//     //       description={post.frontmatter.spoiler}
//     //       slug={post.fields.slug}
//     //     />
//     //     <div style={{
//     //       marginLeft: 'auto',
//     //       marginRight: 'auto',
//     //       maxWidth: rhythm(24)
//     //     }}>
//     //       <article>
//     //         <header>
//     //           <h1 style={{ color: 'var(--textTitle)' }}>
//     //             {post.frontmatter.title}
//     //           </h1>
//     //           <p
//     //             style={{
//     //               ...scale(-1 / 5),
//     //               display: 'block',
//     //               marginBottom: rhythm(1),
//     //               marginTop: rhythm(-4 / 5),
//     //             }}
//     //           >
//     //             {formatPostDate(post.frontmatter.date, lang)}
//     //             {` • ${formatReadingTime(post.timeToRead)}`}
//     //           </p>
//     //           {translations.length > 0 && (
//     //             <Translations
//     //               translations={translations}
//     //               editUrl={editUrl}
//     //               languageLink={languageLink}
//     //               lang={lang}
//     //             />
//     //           )}
//     //         </header>
//     //         {/* <MDXRenderer>{post.body}</MDXRenderer> */}
//     //         <MDXProvider>
//     //     <MDXRenderer>{post.body}</MDXRenderer>
//     //   </MDXProvider>
//     //       </article>
//     //       <aside>
//     //         <nav>
//     //           <ul
//     //             style={{
//     //               display: 'flex',
//     //               flexWrap: 'wrap',
//     //               justifyContent: 'space-between',
//     //               listStyle: 'none',
//     //               padding: 0,
//     //             }}
//     //           >
//     //             <li>
//     //               {previous && (
//     //                 <Link
//     //                   to={previous.fields.slug}
//     //                   rel="prev"
//     //                   style={{ marginRight: 20 }}
//     //                 >
//     //                   ← {previous.frontmatter.title}
//     //                 </Link>
//     //               )}
//     //             </li>
//     //             <li>
//     //               {next && (
//     //                 <Link to={next.fields.slug} rel="next">
//     //                   {next.frontmatter.title} →
//     //                 </Link>
//     //               )}
//     //             </li>
//     //           </ul>
//     //         </nav>
//     //       </aside>
//     //     </div>
//     //   </Layout>
//     // );
//   }
// }

// export default BlogPostMdxTemplate;

// export const pageQuery = graphql`
//   query ($slug: String!) {
//     site {
//       siteMetadata {
//         title
//         author
//       }
//     }
//     mdx(fields: { slug: { eq: $slug } }) {
//       id
//       body
//       timeToRead
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//         spoiler
//       }
//       fields {
//         slug
//         langKey
//       }
//     }
//   }
// `;
