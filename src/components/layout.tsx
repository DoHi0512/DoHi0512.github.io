import * as React from "react"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <div className="w-full flex justify-center pb-8 bg-black ">
      <div className="w-4/5">
        <Header />
        {children}
      </div>
    </div>
  )
}

export default Layout
