import React from "react"
import { graphql } from "gatsby"
import { IPostItem } from "src/types/PostItem.type"
import PostContent from "../components/Post/PostContent"
import PostHeader from "../components/Post/PostHeader"
import Comments from "../components/Post/Comments"
import { useRecoilValue } from "recoil"
import { themeState } from "../state/Theme"
import Layout from "../components/Shared/Layout"

interface IPostTemplateProps {
  data: {
    allMarkdownRemark: {
      edges: IPostItem[]
    }
  }
}
const PostTemplate = ({
  data: {
    allMarkdownRemark: { edges },
  },
}: IPostTemplateProps) => {
  const {
    node: { html, frontmatter },
  } = edges[0]
  const theme = useRecoilValue(themeState)
  return (
    <>
      <Layout width="w-full">
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
      edges {
        node {
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
  }
`
