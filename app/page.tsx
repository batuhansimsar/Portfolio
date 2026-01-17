import { LightningCursor } from "@/components/lightning-cursor"
import { NoiseBackground } from "@/components/noise-background"
import { FloatingGlow } from "@/components/floating-glow"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Home() {
  return (
    <main className="relative min-h-screen cursor-none overflow-x-hidden bg-[#030305]">
      {/* 1. Gradient mesh - sabit ambient glow'lar */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Sol ust - mavi */}
        <div
          className="absolute -left-[20%] -top-[20%] h-[60vh] w-[60vh] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(30, 64, 175, 0.8) 0%, rgba(30, 64, 175, 0.2) 40%, transparent 70%)",
          }}
        />
        {/* Sag alt - cyan */}
        <div
          className="absolute -bottom-[10%] -right-[10%] h-[50vh] w-[50vh] rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 200, 255, 0.7) 0%, rgba(0, 150, 200, 0.2) 40%, transparent 70%)",
          }}
        />
        {/* Orta - subtle accent */}
        <div
          className="absolute left-[40%] top-[30%] h-[40vh] w-[40vh] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(0, 255, 200, 0.5) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* 2. Noise texture */}
      <NoiseBackground />

      {/* 3. Mouse-following glow */}
      <FloatingGlow />

      {/* 4. Lightning cursor */}
      <LightningCursor />

      {/* Navigation */}
      <Navigation />

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </main>
  )
}
