import React from "react"
import { IPostFrontmatter } from "src/types/PostItem.type"

const PostHeader = ({ title, thumbnail, date, tags }: IPostFrontmatter) => {
  return (
    <div className="h-[30rem] w-full relative flex justify-center items-center bg-black">
      <img
        className="w-full h-full object-cover absolute opacity-40"
        src={thumbnail}
      />
      <div className="absolute flex flex-col items-center">
        <span className="lg:text-4xl text-3xl text-white font-bold">
          {title}
        </span>
        <span className="text-sm text-white mt-2">{date}</span>
        <span className="text-sm text-white mt-2">{tags.join("/")}</span>
      </div>
    </div>
  )
}
export default PostHeader
