import Image from "next/image"
import Link from "next/link"
import { Eye, Code, CircleDot, ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  liveCount?: number
  codeCount?: number
  status?: "completed" | "in-progress" | "pending"
  liveUrl?: string
  codeUrl?: string
}

export default function ProjectCard({
  title,
  description,
  image,
  liveCount = 0,
  codeCount = 0,
  status = "completed",
  liveUrl,
  codeUrl,
}: ProjectCardProps) {
  const getStatusBadge = () => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-green-900/50 text-green-400 hover:bg-green-900/70 flex items-center gap-1 border-green-400/20">
            <CircleDot className="w-3 h-3" /> Completed
          </Badge>
        )
      case "in-progress":
        return (
          <Badge className="bg-yellow-900/50 text-yellow-400 hover:bg-yellow-900/70 flex items-center gap-1 border-yellow-400/20">
            <CircleDot className="w-3 h-3" /> In Progress
          </Badge>
        )
      case "pending":
        return (
          <Badge className="bg-red-900/50 text-red-400 hover:bg-red-900/70 flex items-center gap-1 border-red-400/20">
            <CircleDot className="w-3 h-3" /> Pending
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <div className="group bg-gradient-to-br from-[#1a1f29] to-[#2d1b69]/20 rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-white group-hover:text-[#8a7bff] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            {liveUrl ? (
              <Link
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#8a7bff] hover:text-[#ff6b9d] transition-colors duration-300 group/link"
              >
                <Eye className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" />
                <span>{liveCount}</span>
                <span>Live</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
              </Link>
            ) : (
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Eye className="w-4 h-4" />
                <span>{liveCount}</span>
                <span>Live</span>
              </div>
            )}

            {codeUrl ? (
              <Link
                href={codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#ff6b9d] hover:text-[#00d4aa] transition-colors duration-300 group/link"
              >
                <Code className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" />
                <span>{codeCount}</span>
                <span>Code</span>
                <Github className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
              </Link>
            ) : (
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Code className="w-4 h-4" />
                <span>{codeCount}</span>
                <span>Code</span>
              </div>
            )}
          </div>
          {getStatusBadge()}
        </div>

        <div className="flex gap-2 pt-2">
          {liveUrl && (
            <Button
              size="sm"
              className="flex-1 bg-gradient-to-r from-[#8a7bff] to-[#ff6b9d] hover:from-[#7a6bef] hover:to-[#ef5b8d] text-white"
              asChild
            >
              <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Preview
              </Link>
            </Button>
          )}
          {codeUrl && (
            <Button
              size="sm"
              variant="outline"
              className="flex-1 border-[#ff6b9d] text-[#ff6b9d] hover:bg-[#ff6b9d] hover:text-white"
              asChild
            >
              <Link href={codeUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Source Code
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
