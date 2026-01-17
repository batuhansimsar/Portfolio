"use client"

import type React from "react"

import { useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
  variant?: "primary" | "secondary" | "icon"
}

export function MagneticButton({ children, className, onClick, href, variant = "primary" }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return
    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = (e.clientX - centerX) * 0.35
    const deltaY = (e.clientY - centerY) * 0.35

    setPosition({ x: deltaX, y: deltaY })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
    setIsHovered(false)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const variants = {
    primary: cn(
      "px-8 py-4 text-base",
      "bg-gradient-to-r from-cyan-500/20 to-cyan-400/10",
      "border-cyan-400/40 hover:border-cyan-300/80",
      "text-cyan-200 hover:text-white",
      "hover:shadow-[0_0_30px_rgba(0,255,255,0.4),inset_0_0_20px_rgba(0,255,255,0.1)]",
      isHovered && "shadow-[0_0_30px_rgba(0,255,255,0.4),inset_0_0_20px_rgba(0,255,255,0.1)]",
    ),
    secondary: cn(
      "px-6 py-4 text-base",
      "bg-white/5",
      "border-white/20 hover:border-cyan-400/50",
      "text-gray-300 hover:text-cyan-200",
      "hover:shadow-[0_0_20px_rgba(0,255,255,0.2)]",
    ),
    icon: cn(
      "px-3 py-3",
      "bg-white/5",
      "border-white/10 hover:border-cyan-400/40",
      "text-gray-400 hover:text-cyan-300",
      "hover:shadow-[0_0_15px_rgba(0,255,255,0.25)]",
    ),
  }

  const baseClassName = cn(
    "interactive-element relative inline-flex items-center justify-center gap-2",
    "rounded-xl border backdrop-blur-sm",
    "font-mono font-medium tracking-wide",
    "transition-all duration-300",
    variants[variant],
    className,
  )

  const style = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition:
      position.x === 0 && position.y === 0
        ? "transform 0.5s cubic-bezier(0.33, 1, 0.68, 1)"
        : "transform 0.1s ease-out",
  }

  if (href) {
    return (
      <a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={baseClassName}
        style={style}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      className={baseClassName}
      style={style}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {children}
    </button>
  )
}
