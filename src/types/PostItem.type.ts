import { IGatsbyImageData } from "gatsby-plugin-image"

export interface IPostItem {
  html: string
  id: string
  excerpt: string
  fields: {
    slug: string
  }
  frontmatter: IPostFrontmatter
  rawMarkdownBody: string
  timeToRead: number
}

export interface IPostFrontmatter {
  title: string
  description: string
  date?: string
  excerpt?: string
  tags?: string[]
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

export interface IHeadings {
  id: string
  text: string
  level: number
  focus: boolean
}
