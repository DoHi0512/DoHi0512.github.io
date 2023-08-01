import React from "react"
import { useRecoilState } from "recoil"
import ThemeToggler from "../ThemeToggle"
import { Link } from "gatsby"
export const Header = ({ width }: { width: string }) => {
  return (
    <div
      className={`items-center w-${width} h-16 text-3xl font-bold flex justify-between [&>*]:text-text-color`}
    >
      <Link to="/">dohi.log</Link>
      <div className="flex justify-between items-center">
        {/* <span className="mr-8"></span> */}
        <ThemeToggler />
      </div>
    </div>
  )
}
export default Header
