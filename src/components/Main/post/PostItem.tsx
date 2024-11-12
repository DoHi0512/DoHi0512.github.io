import React from "react"
import { IPostFrontmatter } from "../../../types/PostItem.type"
import { Link } from "gatsby"
import Tag from "./Tag"
import { GatsbyImage } from "gatsby-plugin-image"
interface IPostItemProps extends IPostFrontmatter {
  link: string
  timeToRead: number
}
export const PostItem = ({
  title,
  date,
  description,
  tags,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
  timeToRead,
}: IPostItemProps) => {
  return (
    <Link
      to={link}
      className="w-full flex flex-col  shadow-lg items-center bg-bg-color2 rounded-lg hover:translate-y-[-.8rem] duration-300"
    >
      <GatsbyImage
        alt="img"
        image={gatsbyImageData}
        className="w-full object-cover h-[15rem] rounded-t-lg"
      />
      <div className="w-[85%] flex-1 flex flex-col ">
        <span className="text-xl font-bold text-omit mt-4 ">{title}</span>
        <span className="text-excerpt mt-2 h-[3rem]">{description}</span>
        <div className="flex flex-wrap gap-y-2 flex-1 mt-6 ">
          {tags?.map((tag, idx) => <Tag tag={tag} key={idx} />)}
        </div>
        <span className="flex justify-between w-full pb-4 mt-4">
          <span>{date}</span>
          <span>{timeToRead} min read</span>
        </span>
      </div>
    </Link>
  )
}

export default PostItem
