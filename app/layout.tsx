import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nishan Bajagain - Software Developer, Web Developer, UI/UX Designer",
  description:
    "Portfolio of Nishan Bajagain, a passionate web developer focused on crafting clean and modern digital experiences with expertise in frontend and full-stack development.",
  keywords: "Nishan Bajagain, Software Developer, Web Developer, UI/UX Designer, Full Stack Developer, Portfolio",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://nishanbajagain.com" />
        <meta name="theme-color" content="#8a7bff" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nishanbajagain.com" />
        <meta property="og:title" content="Nishan Bajagain - Software Developer, Web Developer, UI/UX Designer" />
        <meta
          property="og:description"
          content="Portfolio of Nishan Bajagain, a passionate web developer focused on crafting clean and modern digital experiences with expertise in frontend and full-stack development."
        />
        <meta property="og:image" content="https://nishanbajagain.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://nishanbajagain.com" />
        <meta name="twitter:title" content="Nishan Bajagain - Software Developer, Web Developer, UI/UX Designer" />
        <meta
          name="twitter:description"
          content="Portfolio of Nishan Bajagain, a passionate web developer focused on crafting clean and modern digital experiences with expertise in frontend and full-stack development."
        />
        <meta name="twitter:image" content="https://nishanbajagain.com/og-image.jpg" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
