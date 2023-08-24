import React, { useRef } from "react"
import Slider from "react-slick"
import RecentPostLayout from "./RecentPostLayout"
import { IPostItem } from "src/types/PostItem.type"
export const RecentPostList = ({ postList }: { postList: IPostItem[] }) => {
  const settings = {
    className: "w-full  mt-16 duration-300",
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1.5,
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
