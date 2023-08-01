import React from "react"
const Tag = ({ tag }: { tag: string }) => {
  return (
    <div className="rounded-md bg-bg-color2 flex justify-center items-center mr-4">
      <span className="pt-1 pb-1 pr-2 pl-2 text-Greenlight/10 font-bold text-sm">
        {tag}
      </span>
    </div>
  )
}
export default Tag
