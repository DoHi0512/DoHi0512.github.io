import React from "react"
import { IHeadings } from "src/types/PostItem.type"
const TOC = ({ headings }: { headings: IHeadings[] }) => {
  return (
    <div className="sticky top-20 h-full whitespace-nowrap w-1/4 pl-10 lg:flex hidden sidebar">
      <div className="border-l-[.5px] border-Grayscale/30 flex flex-col">
        {headings.map(({ id, level, text, focus }, idx) => (
          <a
            href={"#" + id}
            className={`${"level-" + level} ${
              focus ? "focus" : ""
            } hover:text-text-color whitespace-normal`}
            key={idx}
          >
            {text}
          </a>
        ))}
      </div>
    </div>
  )
}

export default TOC
