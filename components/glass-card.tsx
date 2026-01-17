"use client"

import type React from "react"

import { useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  glowOnHover?: boolean
}

export function GlassCard({ children, className, glowOnHover = true }: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      ref={cardRef}
      className={cn(
        "glass-card relative overflow-hidden rounded-2xl",
        "border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl",
        "transition-all duration-500",
        isHovered && glowOnHover && "border-cyan-400/30 shadow-[0_0_40px_rgba(0,255,255,0.1)]",
        className,
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={
        isHovered && glowOnHover
          ? {
              background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,255,255,0.04), transparent 40%)`,
            }
          : undefined
      }
    >
      {/* Animated border glow that follows mouse */}
      {isHovered && glowOnHover && (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-60"
          style={{
            background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,255,255,0.5), transparent 40%)`,
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "xor",
            WebkitMaskComposite: "xor",
            padding: "1px",
          }}
        />
      )}

      {/* Subtle inner glow */}
      {isHovered && glowOnHover && (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-30"
          style={{
            background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,255,255,0.15), transparent 50%)`,
          }}
        />
      )}

      {children}
    </div>
  )
}
