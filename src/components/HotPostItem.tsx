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
    <Link to={link} className="h-full">
      <div className="flex flex-col h-full">
        <img src={thumbnail} className="image-base border-[.5px] h-full" />
        <span className="mt-2 text-xl font-bold text-omit">{title}</span>
      </div>
    </Link>
  )
}
export default HotPostItem
