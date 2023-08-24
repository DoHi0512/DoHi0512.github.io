import * as React from "react"
import Header from "./Header"
import Footer from "./Footer"
const Layout = ({
  children,
  width,
  itemCenter,
}: {
  children: React.ReactNode
  width: string
  itemCenter?: string
}) => {
  return (
    <>
      <div
        className={`w-full flex items-center duration-300 flex-col pb-12 bg-bg-color text-text-color min-h-screen ${itemCenter}`}
      >
        <Header />
        <div className={width}>{children}</div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
