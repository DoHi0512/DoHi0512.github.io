import { IGatsbyImageData } from "gatsby-plugin-image"

export interface IPostItem {
  title: string
  description: string
  date: string
  excerpt: string
  tags: string[]
  thumbnail: string
  link: string
}

export interface IPostList {
  allMarkdownRemark: {
    nodes: [
      {
        excerpt: string
        fields: {
          slug: string
        }
        frontmatter: IPostItem
      }
    ]
  }
}
