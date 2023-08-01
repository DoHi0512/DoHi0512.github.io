import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Shared/Layout"
import { PostList } from "../components/Main/PostList"
import { IPostItem } from "../types/PostItem.type"
import HotPostList from "../components/Main/HotPostList"
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
  return (
    <Layout>
      <HotPostList />
      <PostList postList={edges} />
    </Layout>
  )
}

export const getPostList = graphql`
  {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 50)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
            thumbnail
          }
          rawMarkdownBody
          timeToRead
        }
      }
    }
  }
`
export default BlogIndex
