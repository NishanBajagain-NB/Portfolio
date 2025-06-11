import { FileCode2, FileJson, Database, Code2, Figma, GitBranch, Search, Smartphone } from "lucide-react"

interface SkillCardProps {
  name: string
  icon: string
}

export default function SkillCard({ name, icon }: SkillCardProps) {
  const getIcon = () => {
    switch (icon.toLowerCase()) {
      case "html":
        return <FileCode2 className="w-12 h-12 text-orange-500" />
      case "css":
        return <FileCode2 className="w-12 h-12 text-blue-500" />
      case "javascript":
        return <FileJson className="w-12 h-12 text-yellow-400" />
      case "react":
        return <Code2 className="w-12 h-12 text-cyan-400" />
      case "nextjs":
        return <Code2 className="w-12 h-12 text-white" />
      case "nodejs":
        return <Code2 className="w-12 h-12 text-green-500" />
      case "express":
        return <Code2 className="w-12 h-12 text-gray-400" />
      case "mongodb":
        return <Database className="w-12 h-12 text-green-600" />
      case "sql":
        return <Database className="w-12 h-12 text-blue-600" />
      case "git":
        return <GitBranch className="w-12 h-12 text-orange-600" />
      case "figma":
        return <Figma className="w-12 h-12 text-purple-500" />
      case "responsive":
        return <Smartphone className="w-12 h-12 text-teal-500" />
      case "seo":
        return <Search className="w-12 h-12 text-green-500" />
      default:
        return <Code2 className="w-12 h-12 text-gray-400" />
    }
  }

  return (
    <div className="group cursor-pointer">
      <div className="relative p-8 rounded-2xl bg-[#1a1f29]/80 backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 hover:border-white/20">
        <div className="flex flex-col items-center space-y-4">
          <div className="p-4 rounded-full bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-all duration-300 group-hover:scale-110">
            {getIcon()}
          </div>
          <h3 className="text-white font-bold text-lg text-center group-hover:text-[#8a7bff] transition-colors duration-300">
            {name}
          </h3>
        </div>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  )
}
