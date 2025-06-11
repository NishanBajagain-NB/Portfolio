"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
}

export default function AnimatedText({ text, className, delay = 0 }: AnimatedTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1))
          setCurrentIndex(currentIndex + 1)
        }
      },
      delay * 1000 + currentIndex * 50,
    )

    return () => clearTimeout(timer)
  }, [currentIndex, text, delay])

  return (
    <div className={cn("", className)}>
      {displayText}
      {currentIndex < text.length && <span className="animate-pulse text-[#8a7bff]">|</span>}
    </div>
  )
}
