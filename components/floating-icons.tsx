"use client"

import { FileCode2, Database, Code2, Palette, GitBranch, Smartphone } from "lucide-react"

export default function FloatingIcons() {
  const icons = [
    { Icon: FileCode2, color: "text-orange-500", position: "top-4 left-4", delay: "0s" },
    { Icon: Database, color: "text-green-500", position: "top-8 right-8", delay: "0.5s" },
    { Icon: Code2, color: "text-blue-500", position: "bottom-12 left-8", delay: "1s" },
    { Icon: Palette, color: "text-purple-500", position: "bottom-4 right-4", delay: "1.5s" },
    { Icon: GitBranch, color: "text-yellow-500", position: "top-1/2 left-0", delay: "2s" },
    { Icon: Smartphone, color: "text-pink-500", position: "top-1/2 right-0", delay: "2.5s" },
  ]

  return (
    <>
      {icons.map(({ Icon, color, position, delay }, index) => (
        <div
          key={index}
          className={`absolute ${position} animate-bounce`}
          style={{ animationDelay: delay, animationDuration: "3s" }}
        >
          <div className="p-3 rounded-full bg-[#1a1f29]/80 backdrop-blur-sm border border-white/20 shadow-lg hover:scale-110 transition-transform duration-300">
            <Icon className={`w-6 h-6 ${color}`} />
          </div>
        </div>
      ))}
    </>
  )
}
