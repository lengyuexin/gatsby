import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        author
        description
        siteUrl
        social {
          twitter
        }
      }
    }
  }
`;

function SEO({ meta, image, title, description, slug, lang = 'zh-hans' }) {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const { siteMetadata } = data.site;
        const metaDescription = description || siteMetadata.description;
        const metaImage = image ? `${siteMetadata.siteUrl}/${image}` : null;
        const url = `${siteMetadata.siteUrl}${slug}`;
        const metaData = [
          {
            name: 'description',
            content: metaDescription,
          },
          {
            property: 'og:url',
            content: url,
          },
          {
            property: 'og:title',
            content: title || siteMetadata.title,
          },
          {
            property: 'og:description',
            content: metaDescription,
          },
        ]
          .concat(
            metaImage
              ? [
                  {
                    property: 'og:image',
                    content: metaImage,
                  }
                ]
              : []
          )
          .concat(meta);
        return (
          <Helmet
            htmlAttributes={{ lang }}
            >
              <title>{title ? `${title} — ${siteMetadata.title}` : `${siteMetadata.title} — Blog`}</title>
              {metaData.map((v, idx) => <meta name={v.name} content={v.content} key={idx} />)}
            </Helmet>
        );
      }}
    />
  );
}

SEO.defaultProps = {
  meta: [],
  title: '',
  slug: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  meta: PropTypes.array,
  slug: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default SEO;
