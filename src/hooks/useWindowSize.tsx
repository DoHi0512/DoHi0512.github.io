import { useEffect, useState } from "react"

export const useWindowSize = (delay: number) => {
  const [width, setWidth] = useState<number | null>(null)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    if (typeof window !== "undefined") {
      handleResize()
      window.addEventListener("resize", handleResize)
    }

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [delay])

  return { width }
}

export default useWindowSize
