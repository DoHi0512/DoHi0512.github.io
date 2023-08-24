import React from "react"
import ThemeToggler from "./ThemeToggle"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
export const Header = () => {
  return (
    <div
      className={`items-center w-4/5 absolute top-0 h-16 lg:text-3xl text-2xl font-bold flex justify-between [&>*]:text-text-color z-10 `}
    >
      <Link to="/" className="hover:animate-fly">
        <StaticImage
          src="../../assets/logo.png"
          alt="logo"
          className="z-10 object-contain w-[8rem] h-[full]"
        />
      </Link>
      <div className="flex justify-end items-center w-56">
        <ThemeToggler />
        <a
          href="https://dohi-portfolio.notion.site/be632645758247a097123455c1d918bc?pvs=4"
          className="w-24 text-base border-[1px] justify-center items-center h-8 rounded-2xl text-text-color bg-bg-color hover:text-bg-color hover:bg-text-color border-text-color md:flex hidden ml-8"
        >
          About
        </a>
      </div>
    </div>
  )
}
export default Header
