import React from "react"
import Header from "../Shared/Header"
const PostLayout = ({ children }: any) => {
  return (
    <div className="w-full duration-300 flex flex-col items-center bg-bg-color">
      <Header width="4/5" />
      {children}
    </div>
  )
}

export default PostLayout
