import { Link, graphql } from "gatsby"
import { formatPostDate } from "../utils/helpers"
import Layout from "../components/Layout"
import React from "react"
import get from "lodash/get"
import { rhythm } from "../utils/typography"

/**
 * 首页模板
 * 有不同语言的首页
 */
class BlogIndexTemplate extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    const langKey = this.props.pageContext.langKey

    const posts = this.props.data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <main>
            {posts.map(({ node }) => {
              const title =
                get(node, "frontmatter.title") || get(node, "fields.slug")

              return (
                <article key={get(node, "fields.slug")}>
                  <header>
                    <h3
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: rhythm(1),
                        marginBottom: rhythm(1 / 4),
                      }}
                    >
                      <Link
                        style={{ boxShadow: "none" }}
                        to={get(node, "fields.slug")}
                        rel="bookmark"
                      >
                        {title}
                      </Link>
                    </h3>
                    <small>
                      {formatPostDate(node.frontmatter.date, langKey)}
                    </small>
                  </header>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.spoiler,
                    }}
                  />
                </article>
              )
            })}
          </main>
        </div>
      </Layout>
    )
  }
}

export default BlogIndexTemplate

export const pageQuery = graphql`
  query($langKey: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(
      filter: { fields: { langKey: { eq: $langKey } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
          fields {
            slug
            langKey
          }
        }
      }
    }
  }
`
