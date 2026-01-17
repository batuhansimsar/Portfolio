"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Zap, Menu, X } from "lucide-react"

const navItems = [
  { label: "Ana Sayfa", href: "#" },
  { label: "Projeler", href: "#projects" },
  { label: "Yetenekler", href: "#skills" },
  { label: "İletişim", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={cn(
          "fixed left-0 right-0 top-0 z-40 transition-all duration-500",
          isScrolled ? "bg-[#030305]/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-2">
            <div className="relative flex h-10 w-10 items-center justify-center">
              <div className="absolute inset-0 rounded-lg bg-cyan-500/20 blur-md transition-all group-hover:bg-cyan-500/40" />
              <Zap className="relative h-6 w-6 text-cyan-400 transition-all group-hover:text-cyan-300" />
            </div>
            <span className="font-mono text-lg font-semibold tracking-wider text-white">
              <span className="text-cyan-400">{"<"}</span>DEV<span className="text-cyan-400">{"/>"}</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="interactive-element relative px-4 py-2 font-mono text-sm text-gray-400 transition-colors hover:text-cyan-300"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 rounded-lg bg-cyan-400/0 transition-all hover:bg-cyan-400/10" />
              </a>
            ))}
            <a
              href="#contact"
              className="interactive-element ml-4 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 font-mono text-sm text-cyan-300 transition-all hover:border-cyan-400/60 hover:bg-cyan-400/20 hover:shadow-[0_0_20px_rgba(0,255,255,0.2)]"
            >
              Bağlantı Kur
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="interactive-element flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 md:hidden"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-30 bg-[#030305]/95 backdrop-blur-xl transition-all duration-300 md:hidden",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible",
        )}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-mono text-2xl text-gray-300 transition-colors hover:text-cyan-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
