import React, { useEffect, useState } from "react"
import { useIntersectionObserver } from "../../hooks/useIntersactionObserver"
import { IHeadings } from "src/types/Post.type"
import TOC from "./TOC"
const PostContent = ({ html }: { html: string }) => {
  const [headings, setHeadings] = React.useState<IHeadings[]>([])
  const [activeId, setActiveId] = useState("")
  useEffect(() => {
    const headingElements = document.querySelectorAll("h1, h2, h3")
    const headings = Array.from(headingElements).map(headingElement => ({
      id: headingElement.getAttribute("id") || "",
      text: headingElement.textContent || "",
      level: Number(headingElement.tagName.charAt(1)),
      focus: headingElement.getAttribute("id") === activeId,
    }))
    setHeadings(headings)
  }, [activeId])

  const { addIntersectHandler, removeIntersectHandler } =
    useIntersectionObserver()

  useEffect(() => {
    const targetElements = headings
      .map(info => document.getElementById(info.id)) // Use info.id instead of info.text
      .filter(el => el !== null) // Filter out null values
    addIntersectHandler(
      targetElements,
      {
        root: null,
        rootMargin: "0px 0px -95% 0px",
        threshold: 0,
      },
      (entries: any, observer: any) => {
        entries.forEach((entry: any) => {
          if (entry.isIntersecting && entry.target?.id) {
            setActiveId(entry.target?.id)
          }
        })
      }
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
