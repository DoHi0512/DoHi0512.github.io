import React from "react"
import { IPostFrontmatter } from "../types/PostItem.type"
import { Link } from "gatsby"
import Tag from "./Tag"
interface IPostItemProps extends IPostFrontmatter {
  link : string
}
export const PostItem = ({
  title,
  date,
  excerpt,
  tags,
  thumbnail,
  link
}: IPostItemProps) => {
  console.log(tags)
  return (
    <Link to={link}>
      <div className="w-full flex flex-col [&>span]:mt-2">
        <img src={thumbnail} className="w-full object-cover h-[15rem]" />
        <span className="text-white text-2xl font-bold text-omit">{title}</span>
        <span className="text-Grayscale/50">{excerpt}</span>
        <div className="flex flex-row mt-2">
          {tags.map((tag, idx) => (
            <Tag tag={tag} key={idx} />
          ))}
        </div>
        <span className="text-Grayscale/40">{date}</span>
      </div>
    </Link>
  )
}

export default PostItem
