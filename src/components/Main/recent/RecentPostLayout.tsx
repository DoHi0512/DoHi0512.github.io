import React from "react"
import RecentPostItem from "./RecentPostItem"
import { IPostItem } from "src/types/PostItem.type"
interface IGrid {
  [key: number]: string
}

export const RecentPostLayout = ({
  option,
  postList,
}: {
  option: number
  postList: IPostItem[]
}) => {
  const gridTrack: IGrid = {
    1: "grid grid-cols-3",
    2: "grid grid-cols-3",
    3: "grid grid-cols-2",
  }
  const gridItem: IGrid = {
    1: "",
    2: "col-start-1 col-end-4",
    3: "row-start-1 row-end-3",
  }

  const GridItem = postList.map(({ node: { fields, frontmatter } }, idx) => {
    return (
      <RecentPostItem
        link={fields.slug}
        title={frontmatter.title}
        description={frontmatter.description}
        thumbnail={frontmatter.thumbnail}
        className={idx === 0 ? gridItem[option] : ""}
        key={idx}
      />
    )
  })
  return (
    <div className={`${gridTrack[option]} auto-rows-fr auto-cols-fr h-[30rem]`}>
      {GridItem}
    </div>
  )
}
export default RecentPostLayout
