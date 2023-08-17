import { Helmet } from "react-helmet"
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ description, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              instagram
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet title={defaultTitle ? `${title} | ${defaultTitle}` : title}>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="instagram:card" content="summary" />
      <meta
        name="instagram:creator"
        content={site.siteMetadata?.social?.instagram || ``}
      />
      <meta
        name="google-site-verification"
        content={process.env.GATSBY_SITE_KEY}
      />
      <meta name="instagram:title" content={title} />
      <meta name="instagram:description" content={metaDescription} />
    </Helmet>
  )
}

export default Seo
