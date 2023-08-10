import React, { useState } from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { BsFillMoonFill } from "react-icons/bs"
import { useRecoilState } from "recoil"
import { themeState } from "../state/Theme"
const ThemeButton = () => {
  const [localTheme, setLocalTheme] = useRecoilState(themeState)
  console.log(localTheme)
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div
          className="w-24 h-8 rounded-2xl bg-white flex flex-row items-center relative justify-end"
          onClick={() => {
            toggleTheme(theme === "light" ? "dark" : "light")
            setLocalTheme(theme === "light" ? "dark" : "light")
          }}
        >
          <div
            className="w-full h-full flex items-center rounded-2xl bg-black justify-between z-10"
            style={{
              transform: `translateX(${theme === "light" ? 0 : -1.6}rem)`,
            }}
          >
            <BsFillMoonFill size={"1rem"} color="white" className="ml-3" />
            <span className="text-sm mr-3 text-white">다크모드</span>
          </div>
          <span className="absolute text-xs text-black mr-2">On</span>
        </div>
      )}
    </ThemeToggler>
  )
}

export default ThemeButton
