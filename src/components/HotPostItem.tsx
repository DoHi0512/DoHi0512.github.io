import { Link } from "gatsby"
import React from "react"
const HotPostItem = ({
  thumbnail,
  title,
  link,
}: {
  thumbnail: string
  title: string
  link: string
}) => {
  return (
    <Link to={link}>
      <div className="flex flex-col">
        <img
          src={thumbnail}
          className="image-base border-[.5px] min-h-[14rem]"
        />
        <span className="mt-2 text-xl font-bold text-omit">{title}</span>
      </div>
    </Link>
  )
}
export default HotPostItem
