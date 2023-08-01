import React from "react"
import Tag from "../Main/Tag"

const PostContent = ({ html }: { html: string }) => {
  return (
    <div className="lg:w-1/2 w-4/5 pt-20 pb-20">
      <div className="" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export default PostContent
