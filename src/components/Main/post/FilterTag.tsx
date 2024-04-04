import React from "react"
const FilterTag = ({
  tag,
  active = true,
}: {
  tag: string
  active?: boolean
}) => {
  return (
    <span
      className={`flex rounded-full justify-center items-center py-1 px-6 text-text-color  duration-300 font-semibold text-md whitespace-nowrap ${
        active ? "bg-Greenlight/10 text-white" : "hover:text-[#6e6d71]"
      } `}
    >
      {tag}
    </span>
  )
}
export default FilterTag
