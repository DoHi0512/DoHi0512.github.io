import React from "react"
import { graphql } from "gatsby"
import { IPostItem } from "src/types/PostItem.type"
import PostContent from "../components/post/PostContent"
import PostHeader from "../components/post/PostHeader"
import Comments from "../components/post/Comments"
import { useRecoilValue } from "recoil"
import { themeState } from "../state/Theme"
import Layout from "../components/shared/Layout"
import Seo from "../components/shared/seo"
interface IPostTemplateProps {
  data: {
    allMarkdownRemark: {
      nodes: IPostItem[]
    }
  }
}
const PostTemplate = ({
  data: {
    allMarkdownRemark: { nodes },
  },
}: IPostTemplateProps) => {
  const { html, frontmatter } = nodes[0]
  const theme = useRecoilValue(themeState)
  return (
    <>
      <Seo title={frontmatter.title} description={frontmatter.description} />
      <Layout width="w-full" itemCenter="items-center">
        <PostHeader {...frontmatter} />
        <PostContent html={html} />
        <Comments
          repo="DoHi0512/DoHi0512.github.io"
          theme={`github-${theme}`}
        />
      </Layout>
    </>
  )
}

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      nodes {
        html
        frontmatter {
          title
          date(formatString: "YYYY.MM.DD")
          tags
          thumbnail {
            childImageSharp {
              gatsbyImageData(width: 768, height: 400)
            }
          }
        }
      }
    }
  }
`
