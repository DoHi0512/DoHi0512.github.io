import React from "react"
const PostLayout = ({ children }: any) => {
  return (
    <div className="w-full flex justify-center">
      <div className="lg:w-1/2 w-4/5 text-blue">{children}</div>
    </div>
  )
}

export default PostLayout
