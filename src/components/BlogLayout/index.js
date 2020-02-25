import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import get from 'lodash/get';

import '../../fonts/fonts-post.css';
import Layout from '../Layout';
import SEO from '../SEO';
import Translations from './Translations';
import { formatPostDate, formatReadingTime } from '../../utils/helpers';
import { rhythm, scale } from '../../utils/typography';
import {
  codeToLanguage,
  createLanguageLink,
  loadFontsForCode,
} from '../../utils/i18n';

const GITHUB_USERNAME = 'gaearon';
const GITHUB_REPO_NAME = 'overreacted.io';

class BlogLayout extends React.Component {
  render() {
    console.log(this.props);

    let {
        pageContext,
        children,
        location,

        // TODO: 不存在的
        previous,
        next,
        translations,
    } = this.props;
    const siteTitle = get(this.props, 'queryData.site.siteMetadata.title')
    const lang = pageContext.langKey;
    const slug = pageContext.slug;
    const timeToRead = 0;

    if (translations) {
        translations = translations.slice();
        translations.sort((a, b) => {
          return codeToLanguage(a) < codeToLanguage(b) ? -1 : 1;
        });
    }

    loadFontsForCode(lang);

    const languageLink = createLanguageLink(slug, lang);
    // eg: /en/data-post/
    const enSlug = languageLink('en');
    const editUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/master/src/pages/${enSlug.slice(1, enSlug.length - 1)}/index${lang === 'zh-hans' ? '' : '.' + lang}.md`;

    return (
      <Layout location={location} title={siteTitle}>
        <SEO
          lang={lang}
          title={pageContext.frontmatter.title}
          description={pageContext.frontmatter.spoiler}
          slug={slug}
        />
        <div style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24)
        }}>
          <article>
            <header>
              <h1 style={{ color: 'var(--textTitle)' }}>
                {pageContext.frontmatter.title}
              </h1>
              <p
                style={{
                  ...scale(-1 / 5),
                  display: 'block',
                  marginBottom: rhythm(1),
                  marginTop: rhythm(-4 / 5),
                }}
              >
                {formatPostDate(pageContext.frontmatter.date, lang)}
                {` • ${formatReadingTime(timeToRead)}`}
              </p>
              {translations && translations.length > 0 && (
                <Translations
                  translations={translations}
                  editUrl={editUrl}
                  languageLink={languageLink}
                  lang={lang}
                />
              )}
            </header>
            <div>{children}</div>
          </article>
          <aside>
            <nav>
              <ul
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  listStyle: 'none',
                  padding: 0,
                }}
              >
                <li>
                  {previous && (
                    <Link
                      to={previous.fields.slug}
                      rel="prev"
                      style={{ marginRight: 20 }}
                    >
                      ← {previous.frontmatter.title}
                    </Link>
                  )}
                </li>
                <li>
                  {next && (
                    <Link to={next.fields.slug} rel="next">
                      {next.frontmatter.title} →
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
          </aside>
        </div>
      </Layout>
    );
  }
}

export default (props) => {
  return (
    <StaticQuery
      query={
        graphql`
          query {
            site {
              siteMetadata {
                title
                author
              }
            }
          }
        `
      }
      render={data => <BlogLayout queryData={data} {...props} />}
    />
  )
};

    