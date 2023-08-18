import React from "react"
import ThemeToggler from "../ThemeToggle"
import { Link } from "gatsby"
export const Header = () => {
  return (
    <div
      className={`items-center w-4/5 absolute top-0 h-16 lg:text-3xl text-2xl font-bold flex justify-between [&>*]:text-text-color z-10 `}
    >
      <Link to="/">DoHi</Link>
      <div className="flex justify-between items-center">
        <ThemeToggler />
      </div>
    </div>
  )
}
export default Header
