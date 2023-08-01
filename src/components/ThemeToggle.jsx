import React, { useState } from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { BsFillMoonFill } from "react-icons/bs"
const ThemeButton = () => {
  const [moveX, setMoveX] = useState(0)
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div
          className="w-24 h-8 rounded-2xl bg-white flex flex-row items-center relative justify-end"
          onClick={() => {
            toggleTheme(theme === "light" ? "dark" : "light")
            setMoveX(moveX === 0 ? -1.6 : 0)
          }}
        >
          <div
            className="w-full h-full flex items-center rounded-2xl bg-black justify-between z-10"
            style={{ transform: `translateX(${moveX}rem)` }}
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
