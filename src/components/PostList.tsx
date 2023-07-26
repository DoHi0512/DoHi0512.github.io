import { IPostItem } from "../types/PostItem.type"
import React from "react"
import PostItem from "./PostItem"
export const PostList = ({ postList }: { postList: IPostItem[] }) => {
  console.log(postList)
  const List = postList.map(
    (
      {
        node: {
          excerpt,
          fields: { slug },
          frontmatter,
        },
      }: IPostItem,
      idx: number
    ) => {
      return <PostItem {...frontmatter} excerpt={excerpt} key={idx} />
    }
  )
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 lg:mt-10 mt-10">
      {List}
    </div>
  )
}

export default PostList
