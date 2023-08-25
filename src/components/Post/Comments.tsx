import React, { createRef, useLayoutEffect } from "react"
const src = "https://utteranc.es/client.js"
export interface IUtterancesProps {
  repo: string
  theme: string
}
const Comments: React.FC<IUtterancesProps> = React.memo(({ repo, theme }) => {
  const containerRef = createRef<HTMLDivElement>()
  useLayoutEffect(() => {
    const utterances = document.createElement("script")
    const attributes = {
      src,
      repo,
      theme,
      "issue-term": "pathname",
      label: "✨💬 comments ✨",
      crossOrigin: "anonymous",
      async: "true",
    }

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value)
    })

    containerRef.current!.appendChild(utterances)
  }, [repo])

  return <div className="w-full" ref={containerRef} />
})

Comments.displayName = "Utterances"

export default Comments
