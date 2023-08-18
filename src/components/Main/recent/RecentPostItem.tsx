import { GatsbyImage } from "gatsby-plugin-image"
import { IPostFrontmatter } from "src/types/PostItem.type"
import React from "react"
import { Link } from "gatsby"
interface IRecentPostItem extends IPostFrontmatter {
  className: string
  link: string
}
export const RecentPostItem = ({
  title,
  description,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  className,
  link,
}: IRecentPostItem) => {
  return (
    <Link
      to={link}
      className={`relative flex justify-center items-center object-contain bg-black ${className} overflow-hidden`}
    >
      <div className="absolute z-10 w-[80%] text-white font-thin text-center flex flex-col pointer-events-none">
        <span className="text-2xl">{title}</span>
        <span className="text-sm mt-4">{description}</span>
      </div>
      <GatsbyImage
        image={gatsbyImageData}
        alt="post image"
        className="opacity-80 relative h-full w-full hover:scale-110 duration-300"
      />
    </Link>
  )
}

export default RecentPostItem
