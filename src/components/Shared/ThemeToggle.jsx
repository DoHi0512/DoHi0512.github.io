import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { BsFillMoonFill } from "react-icons/bs"
import { useRecoilState } from "recoil"
import { themeState } from "../../state/Theme"
const ThemeButton = () => {
  const [, setLocalTheme] = useRecoilState(themeState)
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <button
          className="w-24 h-8 rounded-2xl bg-text-color flex items-center relative justify-end cursor-pointer "
          onClick={() => {
            toggleTheme(theme === "light" ? "dark" : "light")
            setLocalTheme(theme === "light" ? "dark" : "light")
          }}
        >
          <div
            className={`w-full h-full flex items-center rounded-2xl bg-black justify-between z-10 border-text-color border-[1px] ${
              theme === "light" ? "" : "darkmode"
            }`}
          >
            <BsFillMoonFill size={"1rem"} color="white" className="ml-3" />
            <span className="text-sm mr-3 text-white">다크모드</span>
          </div>
          <span className="absolute text-xs text-black mr-2">On</span>
        </button>
      )}
    </ThemeToggler>
  )
}

export default ThemeButton
