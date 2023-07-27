import React, { FunctionComponent } from "react"
import { graphql } from "gatsby"
import { IPostItem } from "src/types/PostItem.type"

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

const PostTemplate: FunctionComponent<IPostTemplateProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
  location: { href },
}) {
  const {
    node: {
      html,
      frontmatter: { title, date, tags, thumbnail },
    },
  } = edges[0]

  return <div dangerouslySetInnerHTML={{ __html: html }}></div>
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
