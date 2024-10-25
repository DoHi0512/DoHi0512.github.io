import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import RecentPostLayout from "./RecentPostLayout"
import { IPostItem } from "src/types/PostItem.type"
import useWindowSize from "../../../hooks/useWindowSize"

export const RecentPostList = ({ postList }: { postList: IPostItem[] }) => {
  const { width } = useWindowSize(0)
  const [slidesToShow, setSlidesToShow] = useState(1.5)

  useEffect(() => {
    if (width) {
      if (width <= 767) setSlidesToShow(0.3)
      else if (width <= 1023) setSlidesToShow(1)
      else setSlidesToShow(1.5)
    }
  }, [width])

  const settings = {
    className: "w-full mt-16 duration-300",
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: slidesToShow,
    centerMode: true,
    arrows: false,
  }

  return (
    <Slider {...settings}>
      <RecentPostLayout option={1} postList={postList.slice(0, 3)} />
      <RecentPostLayout option={2} postList={postList.slice(3, 7)} />
      <RecentPostLayout option={3} postList={postList.slice(7, 10)} />
    </Slider>
  )
}

export default RecentPostList
