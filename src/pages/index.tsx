import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/shared/Layout"
import { PostList } from "../components/main/post/PostList"
import { IPostItem } from "../types/PostItem.type"
import RecentPostList from "../components/main/recent/RecentPostList"
import Seo from "../components/shared/seo"
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
      <Seo title="donglog" description="donghun's TechBlog" />
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
