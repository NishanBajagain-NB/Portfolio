"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface RotatingTextProps {
  texts: string[]
  className?: string
  interval?: number
}

export default function RotatingText({ texts, className, interval = 3000 }: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const timer = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
        setIsVisible(true)
      }, 300)
    }, interval)

    return () => clearInterval(timer)
  }, [texts.length, interval, isClient])

  if (!isClient) {
    return (
      <div className={cn("min-h-[3rem] flex items-center justify-start", className)}>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a7bff] to-[#ff6b9d]">{texts[0]}</span>
        <span className="animate-pulse text-[#8a7bff] ml-2 text-3xl font-thin">|</span>
      </div>
    )
  }

  return (
    <div className={cn("min-h-[3rem] flex items-center justify-start", className)}>
      <span
        className={cn(
          "inline-block transition-all duration-300 ease-in-out transform whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-[#8a7bff] to-[#ff6b9d]",
          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-95",
        )}
      >
        {texts[currentIndex]}
      </span>
      <span className="animate-pulse text-[#8a7bff] ml-2 text-3xl font-thin">|</span>
    </div>
  )
}
