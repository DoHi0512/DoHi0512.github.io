import React from "react"
import { IPostItem } from "../types/PostItem.type"
import { Link } from "gatsby"
export const PostItem = ({
  title,
  date,
  excerpt,
  tags,
  thumbnail,
  link,
}: IPostItem) => {
  return (
    <Link to={link}>
      <div className="w-full flex flex-col [&>span]:mt-2">
        <img src={thumbnail} className="w-full object-cover h-[15rem]" />
        <span className=" text-2xl font-bold">{title}</span>
        <span className="text-Grayscale/40 h-[8rem]">{excerpt}</span>
        <div className="">{tags}</div>
        <span className="text-Grayscale/40">{date}</span>
      </div>
    </Link>
  )
}

export default PostItem
