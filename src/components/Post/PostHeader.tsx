import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { IPostFrontmatter } from "src/types/PostItem.type"

const PostHeader = ({
  title,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  date,
  tags,
}: IPostFrontmatter) => {
  return (
    <div className="h-[30rem] mt-16 w-full relative flex justify-center items-center bg-black">
      <GatsbyImage
        image={gatsbyImageData}
        className="w-full h-full bg-white object-cover absolute opacity-40"
        alt="img"
      />
      <div className="absolute flex flex-col items-center">
        <span className="lg:text-4xl text-3xl text-center text-white font-bold">
          {title}
        </span>
        <span className="text-sm text-white mt-2">{date}</span>
        <span className="text-sm text-white mt-2">{tags?.join("/")}</span>
      </div>
    </div>
  )
}
export default PostHeader
