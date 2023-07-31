import React from "react"

const PostContent = ({ html }: { html: string }) => {
  return <div className="" dangerouslySetInnerHTML={{ __html: html }}></div>
}

export default PostContent
