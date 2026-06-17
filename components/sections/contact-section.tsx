"use client"

import { GlassCard } from "@/components/glass-card"
import { MagneticButton } from "@/components/magnetic-button"
import { Mail, MapPin, Clock, Send, Zap, Github, Linkedin } from "lucide-react"

export function ContactSection() {
  const handleEmailClick = () => {
    window.location.href = "mailto:batuhansimsarjs@gmail.com?subject=Portfolio İletişim&body=Merhaba Batuhan,"
  }

  return (
    <section id="contact" className="relative px-4 sm:px-6 py-20 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 sm:mb-16 space-y-4 text-center">
          <p className="font-mono text-sm text-cyan-400/60 tracking-widest uppercase">Bağlantı</p>
          <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl tracking-tight">
            <span className="text-cyan-400">{"/*"}</span> İletişim <span className="text-cyan-400">{"*/"}</span>
          </h2>
          <p className="font-mono text-gray-500 max-w-xl mx-auto">Birlikte harika şeyler yaratmak ister misiniz?</p>
        </div>

        <GlassCard className="p-5 sm:p-8 md:p-12">
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight text-center">Bana Ulaşın</h3>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              {/* Email */}
              <a
                href="mailto:batuhansimsarjs@gmail.com"
                className="flex items-center gap-3 sm:gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-3 sm:p-4 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05] group overflow-hidden"
              >
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 shadow-[0_0_15px_rgba(0,255,255,0.1)] group-hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-all">
                  <Mail className="h-5 w-5 text-cyan-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-xs sm:text-sm text-gray-500">E-posta</p>
                  <p className="font-mono text-cyan-300 text-xs sm:text-sm break-all">batuhansimsarjs@gmail.com</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 sm:gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-3 sm:p-4 overflow-hidden">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 shadow-[0_0_15px_rgba(0,255,255,0.1)]">
                  <MapPin className="h-5 w-5 text-cyan-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-xs sm:text-sm text-gray-500">Konum</p>
                  <p className="font-mono text-cyan-300 text-xs sm:text-sm truncate">İstanbul, Türkiye</p>
                </div>
              </div>

              {/* GitHub */}
              <a
                href="https://github.com/batuhansimsar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-3 sm:p-4 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05] group overflow-hidden"
              >
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 shadow-[0_0_15px_rgba(0,255,255,0.1)] group-hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-all">
                  <Github className="h-5 w-5 text-cyan-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-xs sm:text-sm text-gray-500">GitHub</p>
                  <p className="font-mono text-cyan-300 text-xs sm:text-sm truncate">@batuhansimsar</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/eşref-batuhan-simsar-828973248"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-3 sm:p-4 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05] group overflow-hidden"
              >
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 shadow-[0_0_15px_rgba(0,255,255,0.1)] group-hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-all">
                  <Linkedin className="h-5 w-5 text-cyan-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-xs sm:text-sm text-gray-500">LinkedIn</p>
                  <p className="font-mono text-cyan-300 text-xs sm:text-sm truncate">Eşref Batuhan Simsar</p>
                </div>
              </a>
            </div>

            {/* Status */}
            <div className="flex items-center justify-start sm:justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 sm:p-4 overflow-hidden">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 shadow-[0_0_15px_rgba(0,255,255,0.1)]">
                <Clock className="h-5 w-5 text-cyan-400" />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-xs sm:text-sm text-gray-500">Durum</p>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                  </span>
                  <p className="font-mono text-emerald-400 text-xs sm:text-sm truncate">Müsait - Yeni projeler için hazırım</p>
                </div>
              </div>
            </div>

            {/* Contact Button */}
            <div className="flex justify-center pt-4">
              <MagneticButton className="w-full md:w-auto" variant="primary" onClick={handleEmailClick}>
                <Send className="h-4 w-4" />
                E-posta Gönder
              </MagneticButton>
            </div>
          </div>
        </GlassCard>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-2 font-mono text-sm text-gray-600">
            <span className="text-cyan-400/40">{"</"}</span>
            <span>Tasarlandı & Geliştirildi</span>
            <Zap className="h-4 w-4 text-cyan-400/60" />
            <span className="text-cyan-400/40">{">"}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
