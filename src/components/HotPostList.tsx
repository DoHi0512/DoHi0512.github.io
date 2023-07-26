import { IPostItem } from "../types/PostItem.type"
import React from "react"
import HotPostItem from "./HotPostItem"
const HotPostList = ({ postList }: { postList: IPostItem[] }) => {
  return (
    <div className="text-white w-full lg:flex hidden [&>div]:flex [&>div]:flex-col-reverse [&>div]:justify-between justify-between mt-16 ">
      <div className="w-3/5">
        <span className="text-4xl font-bold mt-4 text-omit">
          {postList[0].node.frontmatter.title}
        </span>
        <img
          src={postList[0].node.frontmatter.thumbnail}
          className="image-base min-h-[30rem] mt-4"
        />
        <span className="text-6xl font-bold">최근 등록된 글</span>
      </div>
      <div className="w-[35%]">
        <HotPostItem
          title={postList[1].node.frontmatter.title}
          thumbnail={postList[1].node.frontmatter.thumbnail}
          link={postList[1].node.frontmatter.link}
        />
        <HotPostItem
          title={postList[2].node.frontmatter.title}
          thumbnail={postList[2].node.frontmatter.thumbnail}
          link={postList[2].node.frontmatter.link}
        />
      </div>
    </div>
  )
}

export default HotPostList
