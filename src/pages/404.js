import * as React from "react"
import LottieLight from "../assets/light.json"
import LottieDark from "../assets/dark.json"
import Layout from "../components/shared/Layout"
import Seo from "../components/shared/seo"
import Lottie from "react-lottie"
import { useRecoilValue } from "recoil"
import { themeState } from "../state/Theme"
import { Link } from "gatsby"
const NotFoundPage = ({ data, location }) => {
  const theme = useRecoilValue(themeState)
  const defaultOption = {
    loop: false,
    autoplay: true,
    animationData: theme === "light" ? LottieLight : LottieDark,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
  return (
    <Layout>
      <Seo title="404:Not Found" description="페이지를 찾을수 없음" />
      <div className="flex justify-center items-center flex-col mt-16">
        <Lottie options={defaultOption} className="h-full w-full" l />
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
