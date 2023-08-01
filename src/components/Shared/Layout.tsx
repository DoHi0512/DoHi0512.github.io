import * as React from "react"
import Header from "./Header"

const Layout = ({ children }: any) => {
  return (
    <div className="w-full flex justify-center duration-300 pb-12 bg-bg-color text-text-color min-h-screen ">
      <div className="w-4/5">
        <Header width="full" />
        {children}
      </div>
    </div>
  )
}

export default Layout
