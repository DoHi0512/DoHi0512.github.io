import React from "react"
const Tag = ({ tag }: { tag: string }) => {
  return (
    <div className="rounded-xl bg-Grayscale/60 flex justify-center items-center mr-4">
      <span className="pt-1 pb-1 pr-2 pl-2 text-Greenlight/10 font-bold">
        {tag}
      </span>
    </div>
  )
}
export default Tag
