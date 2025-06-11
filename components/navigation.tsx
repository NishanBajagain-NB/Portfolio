"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Project" },
    { href: "#contact", label: "Contact" },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        scrolled
          ? "bg-[#0d1117]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-[#8a7bff]/5 translate-y-0"
          : "bg-transparent translate-y-0",
      )}
    >
      <nav className="container mx-auto py-4 px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link
            href="#home"
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8a7bff] to-[#ff6b9d] hover:scale-110 transition-transform duration-300"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick("#home")
            }}
          >
            NB.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-white hover:text-[#8a7bff] transition-colors duration-300 font-medium group py-2"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8a7bff] to-[#ff6b9d] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-[#1a1f29]/80 backdrop-blur-sm hover:bg-[#8a7bff] transition-colors duration-300 border border-white/10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 p-4 bg-[#1a1f29]/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-[#8a7bff] transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-white/5"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
