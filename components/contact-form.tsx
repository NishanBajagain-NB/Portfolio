"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle, Sparkles, AlertCircle } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "3015be41-05bb-47ee-87e7-c8e793365540", // Replace with your Web3Forms access key
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.name}`,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", message: "" })

        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        throw new Error(result.message || "Something went wrong")
      }
    } catch (error) {
      console.error("Error:", error)
      setError("Failed to send message. Please try again or contact me directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-[#1a1f29]/90 to-[#2d1b69]/30 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl">
        <div className="text-center space-y-6">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-2">
              Message Sent!
            </h3>
            <p className="text-gray-300 text-lg">Thank you for reaching out. I'll get back to you soon!</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-[#1a1f29]/90 to-[#2d1b69]/30 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8a7bff] to-[#ff6b9d] mb-2 flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-[#8a7bff]" />
          Send Me a Message
        </h3>
        <p className="text-gray-400">I'd love to hear about your project ideas!</p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-xl flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
          <p className="text-red-300 text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-semibold text-[#8a7bff]">
            Your Name *
          </label>
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-[#0d1117]/80 border-white/20 focus:border-[#8a7bff] text-white placeholder:text-gray-500 h-12 rounded-xl transition-all duration-300 focus:shadow-lg focus:shadow-[#8a7bff]/20 backdrop-blur-sm"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold text-[#ff6b9d]">
            Your Email *
          </label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-[#0d1117]/80 border-white/20 focus:border-[#ff6b9d] text-white placeholder:text-gray-500 h-12 rounded-xl transition-all duration-300 focus:shadow-lg focus:shadow-[#ff6b9d]/20 backdrop-blur-sm"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-semibold text-[#00d4aa]">
            Your Message *
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell me about your project or just say hello!"
            value={formData.message}
            onChange={handleChange}
            required
            className="bg-[#0d1117]/80 border-white/20 focus:border-[#00d4aa] text-white placeholder:text-gray-500 min-h-[150px] rounded-xl transition-all duration-300 focus:shadow-lg focus:shadow-[#00d4aa]/20 resize-none backdrop-blur-sm"
          />
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-[#8a7bff] via-[#ff6b9d] to-[#00d4aa] hover:from-[#7a6bef] hover:via-[#ef5b8d] hover:to-[#00c49a] text-white h-14 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none animate-gradient-x"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-3">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Sending Message...
            </div>
          ) : (
            <div className="flex items-center justify-center gap-3">
              <Send className="w-5 h-5" />
              Send Message
            </div>
          )}
        </Button>
        <p className="text-xs text-gray-500 text-center">
          Powered by{" "}
          <a
            href="https://web3forms.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8a7bff] hover:underline"
          >
            Web3Forms
          </a>
        </p>
      </form>
    </div>
  )
}
