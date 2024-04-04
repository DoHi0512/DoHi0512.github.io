import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { BsFillMoonFill } from "react-icons/bs"
import { useSetRecoilState } from "recoil"
import { themeState } from "../../state/Theme"
const ThemeButton = () => {
  const setLocalTheme = useSetRecoilState(themeState)
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <button
          className="w-24 h-8 duration-300 rounded-2xl bg-text-color flex items-center relative cursor-pointer "
          onClick={() => {
            toggleTheme(theme === "light" ? "dark" : "light")
            setLocalTheme(theme === "light" ? "dark" : "light")
          }}
        >
          <div
            className={`w-full h-full flex items-center duration-300 rounded-2xl bg-black justify-between z-10 border-text-color border-[1px] ${
              theme === "light" ? "" : "-translate-x-[1.6rem]"
            }`}
          >
            <BsFillMoonFill size={"1rem"} color="white" className="ml-3" />
            <span className="text-sm mr-3 text-white whitespace-nowrap">
              다크모드
            </span>
          </div>
          <span className="absolute text-xs right-0 text-black mr-2">On</span>
        </button>
      )}
    </ThemeToggler>
  )
}

export default ThemeButton
