import * as React from "react"
import { graphql } from "gatsby"

import { PostList } from "../components/Main/post/PostList"
import { IPostItem } from "../types/PostItem.type"
import RecentPostList from "../components/Main/recent/RecentPostList"
import Seo from "../components/Shared/seo"
import Layout from "../components/Shared/Layout"
interface IIndexPage {
  data: {
    allMarkdownRemark: {
      nodes: IPostItem[]
    }
  }
}
const BlogIndex = ({
  data: {
    allMarkdownRemark: { nodes },
  },
}: IIndexPage) => {
  return (
    <>
      <Seo description="donghun's TechBlog" />
      <RecentPostList postList={nodes} />
      <Layout width="lg:w-[75%] w-[85%]">
        <PostList postList={nodes} />
      </Layout>
    </>
  )
}

export const getPostList = graphql`
  {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY.MM.DD")
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
`
export default BlogIndex
