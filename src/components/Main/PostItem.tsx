import React from "react"
import { IPostFrontmatter } from "../../types/PostItem.type"
import { Link } from "gatsby"
import Tag from "./Tag"
interface IPostItemProps extends IPostFrontmatter {
  link: string
  timeToRead: number
}
export const PostItem = ({
  title,
  date,
  excerpt,
  description,
  tags,
  thumbnail,
  link,
  timeToRead,
}: IPostItemProps) => {
  console.log(timeToRead)
  return (
    <Link to={link}>
      <div className="w-full flex flex-col  shadow-lg items-center bg-bg-color2 rounded-lg">
        <img
          src={thumbnail}
          className="w-full object-cover h-[15rem] rounded-t-lg"
        />
        <div className="w-[85%] flex flex-col ">
          <span className="text-2xl font-bold text-omit mt-4">{title}</span>
          <span className="text-excerpt mt-2">{description}</span>
          <div className="flex flex-row mt-6">
            {tags.map((tag, idx) => (
              <Tag tag={tag} key={idx} />
            ))}
          </div>
          <span className="flex justify-between w-full pb-4 mt-4">
            <span>{date}</span>
            <span>{timeToRead} min read</span>
          </span>
        </div>
      </div>
    </Link>
  )
}

export default PostItem
