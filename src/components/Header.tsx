import React from "react"
export const Header = () => {
  return (
    <div className="h-16 items-center text-3xl font-bold flex justify-between">
      <span>dohi.log</span>
      <div className="flex justify-between items-center">
        <span className="mr-8">dark</span>
        <span>About me</span>
      </div>
    </div>
  )
}
export default Header
