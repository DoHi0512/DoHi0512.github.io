import { IPostFrontmatter } from "./PostItem.type"

export interface IFuseItem {
  item: {
    id: string
    excerpt: string
    fields: {
      slug: string
    }
    frontmatter: IPostFrontmatter
    rawMarkdownBody: string
  }
}
