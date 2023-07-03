import { RefObject, useEffect, useState } from 'react'

interface ElementOnScreenProps {
  ref: RefObject<HTMLElement>
  rootMargin?: string
}

export const useElementOnScreen = ({
  ref,
  rootMargin = '0px',
}: ElementOnScreenProps) => {
  const [isOnScreen, setIsOnScreen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOnScreen(entry.isIntersecting)
      },
      { rootMargin }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return isOnScreen
}
