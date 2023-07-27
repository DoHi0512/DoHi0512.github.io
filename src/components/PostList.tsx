import { IPostItem } from "../types/PostItem.type"
import React from "react"
import PostItem from "./PostItem"
import Fuse from "fuse.js"
import { graphql, useStaticQuery } from "gatsby"
import SearchBar from "./SearchBar"
import { IFuseItem } from "src/types/Fuse.type"
export const PostList = ({ postList }: { postList: IPostItem[] }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          id
          excerpt(pruneLength: 250)
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
        }
      }
    }
  `)
  const [query, setQuery] = React.useState("")
  const fuse = new Fuse(data.allMarkdownRemark.nodes, {
    keys: ["frontmatter.title", "rawMarkdownBody"],
  })
  const results = fuse.search(query) as IFuseItem[]
  const QueryList = results.map(
    ({
      item: {
        excerpt,
        fields: { slug },
        frontmatter,
        id,
      },
    }: IFuseItem) => {
      return (
        <PostItem {...frontmatter} excerpt={excerpt} key={id} link={slug} />
      )
    }
  )
  const AllList = postList.map(
    ({
      node: {
        excerpt,
        fields: { slug },
        frontmatter,
        id,
      },
    }: IPostItem) => {
      return (
        <PostItem {...frontmatter} excerpt={excerpt} key={id} link={slug} />
      )
    }
  )
  return (
    <div>
      <SearchBar setData={setQuery} />
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 lg:mt-10 mt-10">
        {query ? QueryList : AllList}
      </div>
    </div>
  )
}

export default PostList
