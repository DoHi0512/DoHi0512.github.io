import React from "react"
const Tag = ({ tag }: { tag: string }) => {
  return (
    <span className="rounded-full bg-bg-color flex justify-center items-center mr-4 py-1 px-4  duration-300 text-Greenlight/10 font-semibold text-sm whitespace-nowrap">
      {tag}
    </span>
  )
}
export default Tag
