import React, { useEffect, useMemo, useState } from "react"
import { useIntersectionObserver } from "../../hooks/useIntersactionObserver"
import TOC from "./TOC"
import { IHeadings } from "src/types/PostItem.type"
import getHeading from "../../utils/getHeading"
const PostContent = ({ html }: { html: string }) => {
  const [headings, setHeadings] = React.useState<IHeadings[]>([])
  const [activeId, setActiveId] = useState("")
  useEffect(() => {
    const newHeadings = useMemo(() => getHeading(activeId), [activeId])
    setHeadings(newHeadings)
  }, [activeId])

  const { addIntersectHandler, removeIntersectHandler } =
    useIntersectionObserver()

  useEffect(() => {
    const targetElements = headings
      .map(info => document.getElementById(info.id))
      .filter(el => el !== null)
    addIntersectHandler(
      targetElements,
      {
        root: null,
        rootMargin: "0px 0px -95% 0px",
        threshold: 0,
      },
      entries => {
        entries.forEach((entry: any) => {
          if (entry.isIntersecting && entry.target?.id) {
            setActiveId(entry.target?.id)
          }
        })
      },
    )
    return () => {
      removeIntersectHandler()
    }
  }, [addIntersectHandler, removeIntersectHandler, headings])
  return (
    <div className="w-full h-full pt-40 pb-20 relative flex flex-row lg:justify-end justify-center">
      <div
        className="lg:w-1/2 w-4/5 markdown"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <TOC headings={headings} />
    </div>
  )
}

export default PostContent
