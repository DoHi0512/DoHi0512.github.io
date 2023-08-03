import React from "react"
import { graphql } from "gatsby"
import { IPostItem } from "src/types/PostItem.type"
import PostContent from "../components/Post/PostContent"

import PostLayout from "../components/Post/PostLayout"
import PostHeader from "../components/Post/PostHeader"
import Comments from "../components/Post/Comments"

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
    node: { html, frontmatter, tableOfContents },
  } = edges[0]
  return (
    <>
      <PostLayout>
        <PostHeader {...frontmatter} />
        <PostContent html={html} tableOfContents={tableOfContents} />
        <Comments repo="DoHi0512/DoHi0512.github.io" theme="github-light" />
      </PostLayout>
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
            thumbnail
          }
          tableOfContents
        }
      }
    }
  }
`
