import { IPostList } from "../types/PostItem.type"
import React from "react"
import PostItem from "./PostItem"
export const PostList = ({ allMarkdownRemark: { nodes } }: IPostList) => {
  const List = nodes.map((item, idx) => {
    const data = item.frontmatter
    return (
      <PostItem
        tags={data.tags}
        title={data.title}
        description={data.description}
        date={data.date}
        excerpt={item.excerpt}
        thumbnail={data.thumbnail}
        link={data.link}
        key={idx}
      />
    )
  })
  return <div className="w-full grid grid-cols-3 gap-8">{List}</div>
}

export default PostList
