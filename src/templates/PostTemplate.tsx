import React, { FunctionComponent } from "react"
import { graphql } from "gatsby"
import { IPostItem } from "src/types/PostItem.type"
import PostContent from "../components/Post/PostContent"
import Layout from "../components/Shared/Layout"
import PostLayout from "../components/Post/PostLayout"
import PostHeader from "../components/Post/PostHeader"

interface IPostTemplateProps {
  data: {
    allMarkdownRemark: {
      edges: IPostItem[]
    }
  }
  location: {
    href: string
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
  return (
    <>
      <PostLayout>
        <PostHeader {...frontmatter} />
        <PostContent html={html} />
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
        }
      }
    }
  }
`
