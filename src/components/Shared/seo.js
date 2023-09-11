import { Helmet } from "react-helmet"
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
const Seo = ({ description, title = "" }) => {
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
    <Helmet
      title={
        defaultTitle
          ? title
            ? `${title} | ${defaultTitle}`
            : defaultTitle
          : title
      }
    >
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
        name="naver-site-verification"
        content="a310cab35c8122abe717700aa145f7c11954dd6f"
      />
      <meta name="instagram:title" content={title} />
      <meta name="instagram:description" content={metaDescription} />
    </Helmet>
  )
}

export default Seo
