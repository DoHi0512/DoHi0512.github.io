// custom typefaces
import "@fontsource-variable/montserrat"
import "@fontsource/merriweather"
// normalize CSS across browsers
// custom CSS styles
import "@fontsource/nanum-gothic"
// Highlighting for code blocks
import "prismjs/themes/prism.css"

import "./src/styles/global.css"
import React from "react"

import { RecoilRoot } from "recoil"

export const wrapRootElement = ({ element }) => {
  return <RecoilRoot>{element}</RecoilRoot>
}
