import React from "react"
import Tag from "../Main/Tag"

const PostContent = ({
  html,
  tableOfContents,
}: {
  html: string
  tableOfContents: string
}) => {
  return (
    <div className="w-full h-full pt-40 pb-20 relative flex flex-row lg:justify-end justify-center">
      <div
        className="lg:w-1/2 w-4/5 markdown"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <div className="sticky top-20 h-full whitespace-nowrap w-1/4 pl-10 lg:flex hidden sidebar">
        <div
          className="border-l-[1px] border-Grayscale/30"
          dangerouslySetInnerHTML={{ __html: tableOfContents }}
        />
      </div>
    </div>
  )
}

export default PostContent
