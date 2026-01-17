"use client"

import { useEffect, useRef } from "react"

export function FloatingGlow() {
  const glowRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })
  const animationRef = useRef<number>(0)

  useEffect(() => {
    // Baslangicta ekranin ortasina yerlestirelim
    mouseRef.current.x = window.innerWidth / 2
    mouseRef.current.y = window.innerHeight / 2
    mouseRef.current.targetX = window.innerWidth / 2
    mouseRef.current.targetY = window.innerHeight / 2

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX
      mouseRef.current.targetY = e.clientY
    }

    const animate = () => {
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${mouseRef.current.x - 300}px, ${mouseRef.current.y - 300}px, 0)`
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-[2] h-[600px] w-[600px] will-change-transform"
      style={{
        background: `radial-gradient(circle at center, 
          rgba(0, 255, 255, 0.15) 0%, 
          rgba(0, 200, 255, 0.08) 25%, 
          rgba(0, 100, 200, 0.03) 50%, 
          transparent 70%
        )`,
      }}
    />
  )
}
