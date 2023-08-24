import React from "react"
const Tag = ({ tag, active = true }: { tag: string; active?: boolean }) => {
  return (
    <div className="rounded-md bg-bg-color flex justify-center items-center mr-4 duration-300">
      <span
        className={`pt-1 pb-1 pr-2 pl-2 duration-300 ${
          active ? "text-Greenlight/10" : "text-text-color"
        } font-bold text-sm whitespace-nowrap`}
      >
        {tag}
      </span>
    </div>
  )
}
export default Tag
