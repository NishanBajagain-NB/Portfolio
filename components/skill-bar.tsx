import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"
import { FileCode2, FileJson, Database, Code2, Figma, GitBranch, Search, Smartphone } from "lucide-react"

interface SkillBarProps extends HTMLAttributes<HTMLDivElement> {
  name: string
  percentage: number
  icon?: string
  status?: string
}

export default function SkillBar({ name, percentage, icon, status, className, ...props }: SkillBarProps) {
  const getIcon = () => {
    switch (icon?.toLowerCase()) {
      case "html":
        return <FileCode2 className="w-5 h-5 text-orange-500" />
      case "css":
        return <FileCode2 className="w-5 h-5 text-blue-500" />
      case "javascript":
        return <FileJson className="w-5 h-5 text-yellow-500" />
      case "react":
        return <Code2 className="w-5 h-5 text-cyan-500" />
      case "nextjs":
        return <Code2 className="w-5 h-5 text-white" />
      case "nodejs":
        return <Code2 className="w-5 h-5 text-green-500" />
      case "express":
        return <Code2 className="w-5 h-5 text-gray-400" />
      case "mongodb":
        return <Database className="w-5 h-5 text-green-600" />
      case "sql":
        return <Database className="w-5 h-5 text-blue-600" />
      case "git":
        return <GitBranch className="w-5 h-5 text-orange-600" />
      case "figma":
        return <Figma className="w-5 h-5 text-purple-500" />
      case "responsive":
        return <Smartphone className="w-5 h-5 text-teal-500" />
      case "seo":
        return <Search className="w-5 h-5 text-green-500" />
      default:
        return <Code2 className="w-5 h-5 text-gray-400" />
    }
  }

  return (
    <div className={cn("bg-[#1a1f29] p-4 rounded-lg", className)} {...props}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {getIcon()}
          <span className="font-medium">{name}</span>
        </div>
        {status && (
          <span
            className={cn(
              "text-xs px-2 py-1 rounded-full",
              status.toLowerCase() === "in progress" ? "bg-blue-900/50 text-blue-400" : "bg-gray-800 text-gray-400",
            )}
          >
            {status}
          </span>
        )}
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full bg-[#8a7bff] rounded-full" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  )
}
