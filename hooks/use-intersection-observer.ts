"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface UseIntersectionObserverProps {
  threshold?: number
  rootMargin?: string
  root?: Element | null
}

export function useIntersectionObserver(
  elementRef: React.RefObject<Element>,
  options: UseIntersectionObserverProps = {},
) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      {
        threshold: options.threshold ?? 0,
        rootMargin: options.rootMargin ?? "0px",
        root: options.root ?? null,
      },
    )

    observerRef.current.observe(element)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [elementRef, options.threshold, options.rootMargin, options.root])

  return { isIntersecting }
}
