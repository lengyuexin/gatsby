import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import homePic from "../assets/home.jpg";
import styles from './home-index.module.css';

/**
 * 首页模板
 * 有不同语言的首页
 */
export default ({
    data,
    location,
}) => {
    return (
        <Layout location={location} title={data.site.siteMetadata.title}>
            <div className={styles.bg}>
                <img src={homePic}
                    style={{
                        height: 'auto',
                        width: '50%',
                    }}
                    alt="bg"
                />
                <div style={{
                    margin: '0 auto'
                }}>
                    <h4 style={{
                        color: 'var(--textLink)',
                        fontSize: '4vw',
                        margin: 0
                    }}>生活杂志社</h4>
                    <h3 style={{
                        color: 'var(--textLink)',
                        marginLeft: '-80px',
                        fontSize: '2vw',
                        margin: 0
                    }}>EXPLORE RECORD</h3>
                    <p>想要做一个酷炫的首页，还没想好做些啥，你有主意吗？</p>
                    <p>差距在哪，你自己心里没点数吗？</p>
                </div>
            </div>
        </Layout>
    )
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
