import { Link } from "gatsby"
import React from "react"
export const Footer = () => {
  return (
    <div className="bg-bg-color flex  justify-center items-center h-8 text-sm mt-20">
      <span>
        © 2023{" "}
        <Link to="https://github.com/DoHi0512" className="text-Greenlight/10">
          DoHi0512{" "}
        </Link>
        powerd by
        <Link
          to="https://github.com/DoHi0512/DoHi0512.github.io"
          className="text-Greenlight/10"
        >
          {" "}
          DoHi.log
        </Link>
      </span>
    </div>
  )
}

export default Footer
