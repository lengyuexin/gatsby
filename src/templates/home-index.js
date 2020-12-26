import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import homePic from "../assets/code.jpg"
import styles from "./home-index.module.css"
import { Link } from "gatsby"
/**
 * 首页模板
 * 有不同语言的首页
 */
export default ({ data, location }) => {
  return (
    <Layout location={location} title={data.site.siteMetadata.title}>
      <Link to={"/blog"}>
        <div className={styles.bg}>
          <h4
            style={{
              color: "var(--textLink)",
              fontSize: "4vw",
              margin: 10,
            }}
          >
            一只小前端
          </h4>

          <article className={styles.text}>
            泠泠七弦寂寞听, 三更不敢问前因。 忍将沧海屠龙志, 付与江南冷月心。
          </article>

          <p>
            <img
              src={homePic}
              alt="微信公众号:前端前端大前端"
              title="佛系更新-微信公众号:前端前端大前端"
            />
          </p>

          <p className={styles.text}> 情如风雪无常,却是一动既殇。</p>
          <p className={styles.text}> 你好,我是冷月心。</p>
          <p className={styles.text}> 一个喜欢日语,英语的小前端。</p>
        </div>
      </Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
