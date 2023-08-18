import React, { ChangeEvent } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import lodash from "lodash"
const SearchBar = ({ setData }: { setData: (v: any) => void }) => {
  const debounceOnChange = lodash.debounce(
    (e: ChangeEvent<HTMLInputElement>) => {
      setData && setData(e.target.value)
    },
    450
  )
  return (
    <div className="flex flex-row h-[3rem] items-center mt-24 ">
      <AiOutlineSearch className="absolute pl-2 text-black" size={"2rem"} />
      <input
        placeholder="제목으로 검색"
        className="w-[30rem] outline-none h-full pl-12 rounded-xl text-lg border-[1px] text-Grayscale/20 bg-[#f2f2f2]"
        onChange={debounceOnChange}
      />
    </div>
  )
}
export default SearchBar
