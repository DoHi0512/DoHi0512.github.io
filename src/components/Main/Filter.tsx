import { IPostItem } from "src/types/PostItem.type"
import React, { ChangeEvent, useEffect, useState } from "react"
import Tag from "./post/Tag"
import HorizontalScroll from "react-scroll-horizontal"
import { AiOutlineSearch } from "react-icons/ai"
import lodash from "lodash"
export const Filter = ({
  postList,
  setData,
  setTitle,
}: {
  postList: IPostItem[]
  setData: (v: string) => void
  setTitle: (v: string) => void
}) => {
  const debounceOnChange = lodash.debounce(
    (e: ChangeEvent<HTMLInputElement>) => {
      setTitle && setTitle(e.target.value)
    },
    450
  )
  const [tagList, setTagList] = useState<string[]>([])
  const [activeIdx, setActiveIdx] = useState<number>(0)
  useEffect(() => {
    const data = postList.flatMap(
      ({
        node: {
          frontmatter: { tags },
        },
      }) => tags || []
    )
    const tagSet = new Set(data)
    setTagList(["전체", ...tagSet])
  }, [postList])
  const TagList = tagList.map((tag, idx) => {
    return (
      <div
        onClick={() => {
          setActiveIdx(idx)
          setData(tag)
        }}
        key={idx}
        className="cursor-pointer"
      >
        <Tag tag={tag} key={idx} active={idx === activeIdx} />
      </div>
    )
  })
  return (
    <div className="h-full w-full border-l-8 justify-between relative border-Greenlight/10 flex items-center  bg-bg-color2 duration-300">
      <button className="peer ml-6 flex z-10 ">
        <AiOutlineSearch size="2rem" />
      </button>
      <input
        onChange={debounceOnChange}
        placeholder="검색어를 입력하세요"
        className="duration-300 text-text-color indent-20 placeholder:text-Grayscale/30 bg-bg-color2 absolute h-full w-0 focus:w-full peer-focus:w-full border-text-color outline-none focus:border-[.5px] peer-focus:border-[.5px] text-lg"
      />
      <div className="overflow-auto w-[90%] scroll-hidden flex justify-between">
        {/* <HorizontalScroll className="w-full h-full" reverseScroll={true}> */}
        {TagList}
      </div>
      {/* </HorizontalScroll> */}
    </div>
  )
}

export default Filter
