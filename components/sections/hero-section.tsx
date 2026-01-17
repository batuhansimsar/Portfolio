"use client"

import { useEffect, useState } from "react"
import { MagneticButton } from "@/components/magnetic-button"
import { Github, Linkedin, Twitter, Mail, ChevronDown } from "lucide-react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[20%] h-32 w-32 rounded-full border border-cyan-400/10 opacity-30" />
        <div className="absolute right-[15%] top-[30%] h-24 w-24 rounded-full border border-cyan-400/10 opacity-20" />
        <div className="absolute bottom-[25%] left-[20%] h-16 w-16 rounded-full border border-cyan-400/10 opacity-25" />

        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="space-y-8">
          {/* Terminal-style intro */}
          <div
            className={`font-mono text-sm text-cyan-400/60 transition-all duration-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="text-cyan-300">{">"}</span> initializing creative_engine...
            <span className="ml-1 inline-block w-2 h-4 bg-cyan-400/80 animate-pulse" />
          </div>

          <div className="space-y-6">
            <h1
              className={`text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl transition-all duration-500 delay-100 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ letterSpacing: "-0.02em" }}
            >
              <span className="block text-gray-400 text-2xl md:text-3xl lg:text-4xl font-normal mb-2 tracking-wide">
                Merhaba, ben
              </span>
              <span className="block text-glow-intense bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-clip-text text-transparent">
                Eşref Batuhan Simsar
              </span>
            </h1>

            <div
              className={`transition-all duration-500 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <p className="font-mono text-xl md:text-2xl text-gray-300 tracking-widest">
                <span className="text-cyan-400">{"<"}</span>
                <span className="text-white">Junior .NET Developer</span>
                <span className="text-cyan-400">{" />"}</span>
              </p>
              <p className="mt-4 max-w-xl font-mono text-base md:text-lg text-gray-500 leading-relaxed">
                Backend odaklı .NET geliştirici. Clean Architecture ve modern API tasarımı üzerine çalışıyorum.
                <br />
                <span className="text-cyan-400/60">// building scalable backend solutions with .NET</span>
              </p>
            </div>
          </div>

          {/* Status indicator */}
          <div
            className={`flex items-center gap-3 font-mono text-sm transition-all duration-500 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="relative flex h-3 w-3">
              <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
            </span>
            <span className="text-gray-400">
              Su anda <span className="text-cyan-300 text-glow">musait</span> - yeni projeler icin hazirim
            </span>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-4 pt-4 transition-all duration-500 delay-400 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <MagneticButton href="#projects" variant="primary">
              Projelerim
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary">
              <Mail className="h-4 w-4" />
              Iletisim
            </MagneticButton>
          </div>

          {/* Social links */}
          <div
            className={`flex gap-4 pt-6 transition-all duration-500 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <MagneticButton href="https://github.com/batuhansimsar" variant="icon">
              <Github className="h-5 w-5" />
            </MagneticButton>
            <MagneticButton href="https://www.linkedin.com/in/eşref-batuhan-simsar-828973248" variant="icon">
              <Linkedin className="h-5 w-5" />
            </MagneticButton>
            <MagneticButton href="mailto:batuhansimsarjs@gmail.com" variant="icon">
              <Mail className="h-5 w-5" />
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-gray-500">
          <span className="font-mono text-xs tracking-widest">SCROLL</span>
          <ChevronDown className="h-5 w-5 animate-bounce text-cyan-400/50" />
        </div>
      </div>
    </section>
  )
}
