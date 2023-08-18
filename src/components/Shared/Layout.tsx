import * as React from "react"
import Header from "./Header"
import Seo from "../seo"

const Layout = ({
  children,
  width,
}: {
  children: React.ReactNode
  width: string
}) => {
  return (
    <>
      <Seo title="DoHi.log" description="DoHi's TechBlog" />
      <div className="w-full flex justify-center items-center duration-300 pb-12 bg-bg-color text-text-color min-h-screen">
        <Header />
        <div className={width}>{children}</div>
      </div>
    </>
  )
}

export default Layout
