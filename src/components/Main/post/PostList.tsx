import { IPostItem } from "../../../types/PostItem.type"
import React, { useState } from "react"
import PostItem from "./PostItem"
import Fuse from "fuse.js"
import Filter from "../Filter"
export const PostList = ({ postList }: { postList: IPostItem[] }) => {
  const [category, setCategory] = useState("전체")
  const [query, setQuery] = React.useState("")
  const fuse = new Fuse(postList, {
    keys: ["frontmatter.title", "rawMarkdownBody"],
  })
  const results = !!query ? fuse.search(query).map(item => item.item) : postList
  const QueryList = results.map(
    ({ excerpt, fields: { slug }, frontmatter, id, timeToRead }: IPostItem) => {
      return frontmatter.tags?.indexOf(category) !== -1 ||
        category === "전체" ? (
        <PostItem
          {...frontmatter}
          excerpt={excerpt}
          key={id}
          link={slug}
          timeToRead={timeToRead}
        />
      ) : null
    }
  )
  return (
    <>
      <div className="flex w-full h-[3.5rem] mt-24 justify-between">
        <Filter postList={postList} setData={setCategory} setTitle={setQuery} />
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-14 mt-10">
        {QueryList.length ? QueryList : "검색 결과가 없습니다!"}
      </div>
    </>
  )
}

export default PostList
