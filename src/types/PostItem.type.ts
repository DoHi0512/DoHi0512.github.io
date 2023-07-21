import { IGatsbyImageData } from "gatsby-plugin-image"

export interface IPostItem {
  node: {
    excerpt: string
    fields: {
      slug: string
    }
    frontmatter: IPostFrontmatter
  }
}

export interface IPostFrontmatter {
  title: string
  description: string
  date: string
  excerpt: string
  tags: string[]
  thumbnail: string
  link: string
}
