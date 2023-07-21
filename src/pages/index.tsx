import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { PostList } from "../components/PostList"
import { IPostItem } from "../types/PostItem.type"
import HotPostList from "../components/HotPostList"
interface IIndexPage {
  data: {
    allMarkdownRemark: {
      edges: IPostItem[]
    }
  }
}
const BlogIndex = ({
  data: {
    allMarkdownRemark: { edges },
  },
}: IIndexPage) => {
  console.log(edges)
  return (
    <Layout>
      <HotPostList postList={edges} />
      <PostList postList={edges} />
    </Layout>
  )
}
export const metadataQuery = graphql`
  {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
            thumbnail
            link
          }
        }
      }
    }
  }
`

export default BlogIndex
