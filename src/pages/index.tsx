import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Shared/Layout"
import { PostList } from "../components/Main/post/PostList"
import { IPostItem } from "../types/PostItem.type"
import RecentPostList from "../components/Main/recent/RecentPostList"
import Header from "../components/Shared/Header"
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
    <>
      <RecentPostList postList={edges} />
      <Layout width="w-4/5">
        <PostList postList={edges} />
      </Layout>
    </>
  )
}

export const getPostList = graphql`
  {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          timeToRead
        }
      }
    }
  }
`
export default BlogIndex
