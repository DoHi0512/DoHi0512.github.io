import React from "react"
import { AiOutlineSearch } from "react-icons/ai"
const SearchBar = ({ setData }: { setData: (v: any) => void }) => {
  return (
    <div className="flex flex-row h-[3rem] items-center mt-24">
      <AiOutlineSearch className="absolute pl-2" size={"2rem"} />
      <input
        placeholder="제목으로 검색"
        className="w-[30rem] outline-none h-full pl-12 rounded-xl text-lg"
        onChange={e => setData(e.target.value)}
      />
    </div>
  )
}
export default SearchBar
