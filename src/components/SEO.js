import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const query = graphql`
  query {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        title
        author
        description
        siteUrl
        defaultBanner
      }
    }
  }
`

function SEO({
  meta,
  image,
  title,
  description,
  slug,
  lang = "zh-hans",
  date,
}) {
  return (
    <StaticQuery
      query={query}
      render={({ site: { siteMetadata } }) => {
        const defaultDescription = siteMetadata.description
        const siteUrl = siteMetadata.siteUrl
        const url = `${siteUrl}${slug}`
        const defaultTitle = `${siteMetadata.title} — Blog`
        const author = siteMetadata.author

        const schemaOrgWebPage = {
          "@context": "http://schema.org", // 告知google您正在使用的schema.org结构数据
          "@type": "WebPage", //告诉Google您要描述的是哪种类型
          url: siteUrl,
          headline: defaultTitle,
          inLanguage: lang,
          mainEntityOfPage: siteUrl,
          description: defaultDescription,
          name: defaultTitle,
          author: {
            "@type": "Person",
            name: author,
          },
          copyrightHolder: {
            "@type": "Person",
            name: author,
          },
          copyrightYear: "2020",
          creator: {
            "@type": "Person",
            name: author,
          },
          publisher: {
            "@type": "Person",
            name: author,
          },
          datePublished: "2020-02-27T10:30:00+01:00",
          dateModified: siteMetadata.buildTime,
          image: {
            "@type": "ImageObject",
            url: `${siteUrl}${siteMetadata.defaultBanner}`,
          },
        }

        const itemListElement = [
          {
            "@type": "ListItem",
            item: {
              "@id": siteUrl,
              name: "Homepage",
            },
            position: 1,
          },
        ]

        let schemaArticle = null

        if (title) {
          schemaArticle = {
            "@context": "http://schema.org",
            "@type": "Article", // article文章类型的页面有各类属性 https://developers.google.com/search/docs/data-types/article
            author: {
              "@type": "Person",
              name: author,
            },
            copyrightHolder: {
              "@type": "Person",
              name: author,
            },
            copyrightYear: "2020",
            creator: {
              "@type": "Person",
              name: author,
            },
            publisher: {
              "@type": "Organization",
              name: author,
              logo: {
                "@type": "ImageObject",
                url: `${siteUrl}${siteMetadata.defaultBanner}`,
              },
            },
            datePublished: date,
            dateModified: date,
            description: description,
            headline: title,
            inLanguage: lang,
            url: url,
            name: title,
            image: {
              "@type": "ImageObject",
              url: image || `${siteUrl}${siteMetadata.defaultBanner}`,
            },
            mainEntityOfPage: url,
          }
          // Push current blogpost into breadcrumb list
          itemListElement.push({
            "@type": "ListItem",
            item: {
              "@id": url,
              name: title,
            },
            position: 2,
          })
        }

        const breadcrumb = {
          "@context": "http://schema.org",
          "@type": "BreadcrumbList",
          description: "Breadcrumbs list",
          name: "Breadcrumbs",
          itemListElement,
        }

        return (
          <Helmet htmlAttributes={{ lang }}>
            <title>
              {title ? `${title} — ${siteMetadata.title}` : defaultTitle}
            </title>

            <meta name="author" content={siteMetadata.author} />
            <meta name="keywords" content={siteMetadata.keywords} />
            <meta name="generator" content={siteMetadata.generator} />
            <meta
              name="description"
              content={description || defaultDescription}
            />

            {/* facebook open graph protocol */}
            <meta name="og:url" content={url} />
            <meta name="og:title" content={title || defaultTitle} />
            <meta
              name="og:description"
              content={description || defaultDescription}
            />
            {image && <meta name="og:image" content={`${siteUrl}/${image}`} />}

            {meta && <meta name={meta.name} content={meta.content} />}

            {/* Google search's structure data */}
            {!title && (
              <script type="application/ld+json">
                {JSON.stringify(schemaOrgWebPage)}
              </script>
            )}
            {title && (
              <script type="application/ld+json">
                {JSON.stringify(schemaArticle)}
              </script>
            )}
            <script type="application/ld+json">
              {JSON.stringify(breadcrumb)}
            </script>
          </Helmet>
        )
      }}
    />
  )
}

SEO.defaultProps = {
  meta: [],
  title: "",
  slug: "",
}

SEO.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  meta: PropTypes.array,
  slug: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default SEO
