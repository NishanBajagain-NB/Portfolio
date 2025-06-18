import Image from "next/image"
import Link from "next/link"
<link rel="icon" href="/favicon.ico" />
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  User,
  Download,
  ExternalLink,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ContactForm from "@/components/contact-form"
import SkillCard from "@/components/skill-card"
import ProjectCard from "@/components/project-card"
import RotatingText from "@/components/rotating-text"
import FloatingIcons from "@/components/floating-icons"
import Navigation from "@/components/navigation"

export const metadata = {
  title: "Nishan Bajagain - Software Developer, Web Developer, UI/UX Designer",
  description:
    "Portfolio of Nishan Bajagain, a passionate web developer focused on crafting clean and modern digital experiences with expertise in frontend and full-stack development.",
  keywords: "Nishan Bajagain, Software Developer, Web Developer, UI/UX Designer, Full Stack Developer, Portfolio",
  openGraph: {
    title: "Nishan Bajagain - Software Developer, Web Developer, UI/UX Designer",
    description:
      "Portfolio of Nishan Bajagain, a passionate web developer focused on crafting clean and modern digital experiences with expertise in frontend and full-stack development.",
    url: "https://nishanbajagain.eu.org",
    siteName: "Nishan Bajagain Portfolio",
    locale: "en_US",
    type: "website",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0d1117] text-white overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section
        id="home"
        className="container mx-auto py-20 px-4 md:px-6 md:py-32 flex flex-col lg:flex-row items-center justify-between min-h-screen relative"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#8a7bff]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ff6b9d]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00d4aa]/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="lg:w-1/2 mb-16 lg:mb-0 z-10">
          <div className="space-y-6 mb-8">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="block text-white mb-2 opacity-0 animate-fade-in">Hi, I'm</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#8a7bff] via-[#ff6b9d] to-[#00d4aa] opacity-0 animate-fade-in delay-300">
                Nishan Bajagain
              </span>
            </h1>
          </div>

          <div className="mb-8 opacity-0 animate-fade-in delay-700">
            <RotatingText
              texts={["Full Stack Developer", "UI/UX Designer", "Web Developer", "Software Developer"]}
              className="text-2xl md:text-4xl font-bold"
            />
          </div>

          <div className="mb-10 opacity-0 animate-fade-in delay-1000">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
              I create clean, modern, and user-friendly digital experiences for the web, combining design and
              development expertise to build exceptional applications that make a difference.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mb-12 opacity-0 animate-fade-in delay-1300">
            <Button
              className="bg-gradient-to-r from-[#8a7bff] to-[#ff6b9d] hover:from-[#7a6bef] hover:to-[#ef5b8d] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-[#8a7bff]/25 group"
              asChild
            >
              <Link href="/cv.pdf" download>
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download CV
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-2 border-[#8a7bff] text-[#8a7bff] hover:bg-[#8a7bff] hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 group"
              asChild
            >
              <Link href="#projects">
                <ExternalLink className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                View Projects
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-2 border-[#ff6b9d] text-[#ff6b9d] hover:bg-[#ff6b9d] hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 group"
              asChild
            >
              <Link href="#contact">
                <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Contact Me
              </Link>
            </Button>
          </div>

          <div className="flex space-x-6 opacity-0 animate-fade-in delay-1600">
            <Link href="https://github.com/NishanBajagain-NB" aria-label="GitHub" className="group">
              <div className="p-4 rounded-full bg-[#1a1f29]/80 backdrop-blur-sm border border-white/10 group-hover:bg-[#8a7bff] group-hover:border-[#8a7bff] transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#8a7bff]/25">
                <Github className="w-6 h-6 text-white" />
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/nishan-bajagain-83b888362/" aria-label="LinkedIn" className="group">
              <div className="p-4 rounded-full bg-[#1a1f29]/80 backdrop-blur-sm border border-white/10 group-hover:bg-[#0077b5] group-hover:border-[#0077b5] transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#0077b5]/25">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
            </Link>
            <Link href="https://x.com/_Nishan_NB?s=08" aria-label="Twitter" className="group">
              <div className="p-4 rounded-full bg-[#1a1f29]/80 backdrop-blur-sm border border-white/10 group-hover:bg-[#1da1f2] group-hover:border-[#1da1f2] transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#1da1f2]/25">
                <Twitter className="w-6 h-6 text-white" />
              </div>
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center relative opacity-0 animate-fade-in-right delay-500">
          <div className="relative">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-[#8a7bff]/30 via-[#ff6b9d]/20 to-[#00d4aa]/30 overflow-hidden backdrop-blur-sm border border-white/20 shadow-2xl animate-float">
              <Image
                src="/profile-image.png"
                alt="Nishan Bajagain"
                width={384}
                height={384}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <FloatingIcons />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-[#1a1f29]/90 via-[#2d1b69]/30 to-[#1a1f29]/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20 flex justify-between w-full max-w-3xl animate-fade-in-up">
            <div className="text-center group cursor-pointer">
              <div className="relative">
                <p className="text-[#8a7bff] font-bold text-4xl md:text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  0+
                </p>
                <div className="absolute inset-0 bg-[#8a7bff]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <p className="text-sm text-gray-400 font-medium">Projects Completed</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="relative">
                <p className="text-[#ff6b9d] font-bold text-4xl md:text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  0+
                </p>
                <div className="absolute inset-0 bg-[#ff6b9d]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <p className="text-sm text-gray-400 font-medium">
                Years of
                <br />
                Experience
              </p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="relative">
                <p className="text-[#00d4aa] font-bold text-4xl md:text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  100%
                </p>
                <div className="absolute inset-0 bg-[#00d4aa]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <p className="text-sm text-gray-400 font-medium">
                Client
                <br />
                Satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto py-20 px-4 md:px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8a7bff] via-[#ff6b9d] to-[#00d4aa] mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Passionate developer crafting digital experiences that make a difference
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - About content */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#1a1f29]/90 to-[#2d1b69]/30 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8a7bff] to-[#ff6b9d] mb-6">
                  My Story
                </h3>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    I'm Nishan Bajagain, a passionate web developer focused on crafting clean and modern digital
                    experiences. With over 3 years of experience, I specialize in front-end and full-stack development.
                  </p>
                  <p>
                    My approach combines creativity, technical skill, and user-centric design to build websites and
                    applications that are not only functional but visually appealing and accessible to everyone.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Contact info */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#1a1f29]/90 to-[#2d1b69]/30 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b9d] to-[#00d4aa] mb-6">
                  Get In Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                    <div className="p-3 rounded-full bg-gradient-to-r from-[#8a7bff] to-[#ff6b9d] group-hover:shadow-lg group-hover:shadow-[#8a7bff]/25">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[#8a7bff] font-semibold text-sm">Email</p>
                      <a
                        href="mailto:nishan.nb.rai@gmail.com"
                        className="text-white hover:text-[#8a7bff] transition-colors text-lg"
                      >
                        nishan.nb.nis@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                    <div className="p-3 rounded-full bg-gradient-to-r from-[#ff6b9d] to-[#00d4aa] group-hover:shadow-lg group-hover:shadow-[#ff6b9d]/25">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[#ff6b9d] font-semibold text-sm">Phone</p>
                      <a
                        href="tel:+9779768980979"
                        className="text-white hover:text-[#ff6b9d] transition-colors text-lg"
                      >
                        +977 9768980979
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                    <div className="p-3 rounded-full bg-gradient-to-r from-[#00d4aa] to-[#8a7bff] group-hover:shadow-lg group-hover:shadow-[#00d4aa]/25">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[#00d4aa] font-semibold text-sm">Location</p>
                      <p className="text-white text-lg">Kathmandu, Nepal</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                    <div className="p-3 rounded-full bg-gradient-to-r from-[#8a7bff] to-[#ff6b9d] group-hover:shadow-lg group-hover:shadow-[#8a7bff]/25">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[#8a7bff] font-semibold text-sm">Status</p>
                      <p className="text-green-400 font-semibold text-lg">Available for Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto py-20 px-4 md:px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8a7bff] via-[#ff6b9d] to-[#00d4aa] mb-4">
            My Skills
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Technologies and tools I use to bring ideas to life</p>
        </div>

        <Tabs defaultValue="frontend" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-[#1a1f29]/90 backdrop-blur-xl rounded-full p-1 border border-white/10 shadow-lg max-w-md mx-auto">
            <TabsTrigger
              value="frontend"
              className="rounded-full py-3 px-4 font-semibold transition-all duration-300 text-gray-300 hover:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#8a7bff] data-[state=active]:to-[#ff6b9d] data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-[#8a7bff]/25 text-sm"
            >
              Frontend
            </TabsTrigger>
            <TabsTrigger
              value="backend"
              className="rounded-full py-3 px-4 font-semibold transition-all duration-300 text-gray-300 hover:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#ff6b9d] data-[state=active]:to-[#00d4aa] data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-[#ff6b9d]/25 text-sm"
            >
              Backend
            </TabsTrigger>
            <TabsTrigger
              value="other"
              className="rounded-full py-3 px-4 font-semibold transition-all duration-300 text-gray-300 hover:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00d4aa] data-[state=active]:to-[#8a7bff] data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-[#00d4aa]/25 text-sm"
            >
              Other
            </TabsTrigger>
          </TabsList>
          <TabsContent value="frontend">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <SkillCard name="HTML" icon="html" />
              <SkillCard name="CSS" icon="css" />
              <SkillCard name="JavaScript In progress" icon="javascript" />
{/*               <SkillCard name="React" icon="react" />
              <SkillCard name="Next.js" icon="nextjs" /> */}
            </div>
          </TabsContent>
          <TabsContent value="backend">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <SkillCard name="Node.js In progress" icon="nodejs" />
              <SkillCard name="Express In progress" icon="express" />
              <SkillCard name="MongoDB In progress" icon="mongodb" />
{/*               <SkillCard name="SQL" icon="sql" /> */}
            </div>
          </TabsContent>
          <TabsContent value="other">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <SkillCard name="Git" icon="git" />
               <SkillCard name="GitHUB" icon="SiGithub" />
              <SkillCard name="Figma" icon="figma" />
              <SkillCard name="Responsive" icon="responsive" />
              <SkillCard name="VS-CODE" icon="	SiVisualstudiocode" />
              <SkillCard name="SEO" icon="seo" />
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto py-20 px-4 md:px-6 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-20 w-72 h-72 bg-[#00d4aa]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-[#8a7bff]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8a7bff] via-[#ff6b9d] to-[#00d4aa] mb-4">
            My Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">A showcase of my recent work and creative solutions</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Portfolio Website"
            description="Responsive personal portfolio website using TailwindCSS and smooth animations."
            image="https://i.imgur.com/f6e4BAc.png"
            liveCount={1}
            codeCount={14}
            status="completed"
            liveUrl="https://nishan-bajagain.vercel.app/"
            codeUrl="https://github.com/NishanBajagain-NB/Portfolio"
          />
          <ProjectCard
            title="Figma-Foodmandu"
            description="Foodmandu is a clean and modern mobile-first food delivery UI/UX design created in Figma. "
            image="https://i.imgur.com/8yAkv3Z.png"
            liveCount={1}
            codeCount={1}
            status="Completed"
            liveUrl="https://www.figma.com/proto/Lum5z4H9xLPjVP0aKDWND0?node-id=0-1"
            codeUrl="https://github.com/NishanBajagain-NB/Foodmandu"
          />
          <ProjectCard
            title="Blog CMS"
            description="Node.js & MongoDB-powered CMS with full CRUD for blogging and user authentication."
            image="/project3.png"
            liveCount={2}
            codeCount={4}
            status="pending"
            liveUrl="https://blog-cms-demo.vercel.app"
            codeUrl="https://github.com/nishanbajagain/blog-cms"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto py-20 px-4 md:px-6 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-80 h-80 bg-[#ff6b9d]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8a7bff]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00d4aa]/3 rounded-full blur-3xl"></div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8a7bff] via-[#ff6b9d] to-[#00d4aa] mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to start your next project? Let's create something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#1a1f29]/90 to-[#2d1b69]/30 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8a7bff] to-[#ff6b9d] mb-6">
                Let's Connect
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-gradient-to-r from-[#8a7bff] to-[#ff6b9d] p-4 rounded-2xl group-hover:shadow-xl group-hover:shadow-[#8a7bff]/25 transition-shadow duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[#8a7bff] font-semibold text-sm">Email Me</p>
                    <a
                      href="mailto:nishan.nb.nis@gmail.com"
                      className="text-white hover:text-[#8a7bff] text-lg transition-colors"
                    >
                      nishan.nb.nis@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-gradient-to-r from-[#ff6b9d] to-[#00d4aa] p-4 rounded-2xl group-hover:shadow-xl group-hover:shadow-[#ff6b9d]/25 transition-shadow duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[#ff6b9d] font-semibold text-sm">Call Me</p>
                    <a href="tel:+977 9768980979" className="text-white hover:text-[#ff6b9d] text-lg transition-colors">
                      +977 9768980979
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-gradient-to-r from-[#00d4aa] to-[#8a7bff] p-4 rounded-2xl group-hover:shadow-xl group-hover:shadow-[#00d4aa]/25 transition-shadow duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[#00d4aa] font-semibold text-sm">Visit Me</p>
                    <p className="text-white text-lg">Kathmandu, Nepal</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a1f29]/90 to-[#2d1b69]/30 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b9d] to-[#00d4aa] mb-6">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                <Link href="https://github.com/NishanBajagain-NB" aria-label="GitHub" className="group">
                  <div className="bg-[#1a1f29] p-4 rounded-2xl hover:bg-gradient-to-r hover:from-[#8a7bff] hover:to-[#ff6b9d] transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#8a7bff]/25">
                    <Github className="w-8 h-8 text-white" />
                  </div>
                </Link>
                <Link href="https://www.linkedin.com/in/nishan-bajagain-83b888362/" aria-label="LinkedIn" className="group">
                  <div className="bg-[#1a1f29] p-4 rounded-2xl hover:bg-[#0077b5] transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#0077b5]/25">
                    <Linkedin className="w-8 h-8 text-white" />
                  </div>
                </Link>
                <Link href="https://x.com/_Nishan_NB?s=08" aria-label="Twitter" className="group">
                  <div className="bg-[#1a1f29] p-4 rounded-2xl hover:bg-[#1da1f2] transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#1da1f2]/25">
                    <Twitter className="w-8 h-8 text-white" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#0a0d13] via-[#1a1f29] to-[#0a0d13] py-16 px-4 md:px-6 border-t border-white/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8a7bff] to-[#ff6b9d]">
                Nishan Bajagain
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Passionate web developer crafting elegant, high-performance, and responsive digital experiences for the
                modern web.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b9d] to-[#00d4aa]">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#home" className="text-gray-400 hover:text-[#8a7bff] transition-colors duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-[#8a7bff] transition-colors duration-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#skills" className="text-gray-400 hover:text-[#8a7bff] transition-colors duration-300">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-gray-400 hover:text-[#8a7bff] transition-colors duration-300">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-[#8a7bff] transition-colors duration-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00d4aa] to-[#8a7bff]">
                Connect with Me
              </h3>
              <div className="flex space-x-4">
                <Link href="https://github.com/NishanBajagain-NB" aria-label="GitHub" className="group">
                  <div className="p-3 rounded-full bg-[#1a1f29] group-hover:bg-gradient-to-r group-hover:from-[#8a7bff] group-hover:to-[#ff6b9d] transition-all duration-300 transform group-hover:scale-110">
                    <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </div>
                </Link>
                <Link href="https://www.linkedin.com/in/nishan-bajagain-83b888362/" aria-label="LinkedIn" className="group">
                  <div className="p-3 rounded-full bg-[#1a1f29] group-hover:bg-[#0077b5] transition-all duration-300 transform group-hover:scale-110">
                    <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </div>
                </Link>
                <Link href="https://x.com/_Nishan_NB?s=08" aria-label="Twitter" className="group">
                  <div className="p-3 rounded-full bg-[#1a1f29] group-hover:bg-[#1da1f2] transition-all duration-300 transform group-hover:scale-110">
                    <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </div>
                </Link>
                <Link href="mailto:nishan.nb.nis@gmail.com" aria-label="Email" className="group">
                  <div className="p-3 rounded-full bg-[#1a1f29] group-hover:bg-gradient-to-r group-hover:from-[#ff6b9d] group-hover:to-[#00d4aa] transition-all duration-300 transform group-hover:scale-110">
                    <Mail className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 Nishan Bajagain. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
