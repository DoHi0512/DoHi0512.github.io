import { useCallback } from "react"

const IODefaultOptions = {
  root: null,
  rootMargin: "-50% 0px -50% 0px",
  threshold: 0,
}

type DoWhenIntersectFunction = (
  entries: IntersectionObserverEntry[],
  observer: any
) => void

let observer: IntersectionObserver

export const useIntersectionObserver = () => {
  const addIntersectHandler = useCallback(
    (
      targets: any[],
      options = IODefaultOptions,
      doWhenIntersect: DoWhenIntersectFunction
    ) => {
      observer = new IntersectionObserver(doWhenIntersect, options)
      targets.forEach(el => {
        observer.observe(el)
      })
    },
    []
  )

  const removeIntersectHandler = useCallback(() => {
    observer.disconnect()
  }, [])

  return {
    addIntersectHandler,
    removeIntersectHandler,
  }
}
