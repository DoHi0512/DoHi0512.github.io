import * as React from "react"
import Layout from "../components/Shared/Layout"
import Seo from "../components/Shared/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
const NotFoundPage = ({ data, location }) => {
  return (
    <Layout>
      <Seo title="404:Not Found" description="페이지를 찾을수 없음" />
      <div className="flex justify-center items-center flex-col mt-16">
        <StaticImage
          src="../assets/404.png"
          className="object-contain w-[30rem]"
          alt="404"
        />
        <span className="text-4xl font-bold text-text-color">
          아무것도 없네요!
        </span>
        <Link
          to="/"
          className="w-[6rem] h-[3rem] flex justify-center items-center bg-Greenlight/10 text-xl text-bg-color2 mt-12 rounded-md"
        >
          홈으로
        </Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage
