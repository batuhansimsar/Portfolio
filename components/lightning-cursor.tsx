"use client"

import { useEffect, useRef, useCallback } from "react"

interface Point {
  x: number
  y: number
  age: number
}

interface LightningBolt {
  points: { x: number; y: number }[]
  age: number
  maxAge: number
}

export function LightningCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0 })
  const trailRef = useRef<Point[]>([])
  const lightningRef = useRef<LightningBolt[]>([])
  const animationRef = useRef<number>(0)
  const lastFrameRef = useRef<number>(0)
  const targetFPS = 30 // Reduced from 60

  const generateLightningPath = useCallback(
    (startX: number, startY: number, endX: number, endY: number, segments = 5): { x: number; y: number }[] => {
      const points: { x: number; y: number }[] = []
      const dx = endX - startX
      const dy = endY - startY
      const distance = Math.sqrt(dx * dx + dy * dy)

      for (let i = 0; i <= segments; i++) {
        const t = i / segments
        let x = startX + dx * t
        let y = startY + dy * t

        if (i > 0 && i < segments) {
          const offset = (Math.random() - 0.5) * distance * 0.3
          const perpX = -dy / distance
          const perpY = dx / distance
          x += perpX * offset
          y += perpY * offset
        }

        points.push({ x, y })
      }

      return points
    },
    [],
  )

  const drawLightning = useCallback(
    (ctx: CanvasRenderingContext2D, points: { x: number; y: number }[], alpha: number) => {
      if (points.length < 2) return

      ctx.shadowBlur = 15
      ctx.shadowColor = `rgba(0, 255, 255, ${alpha})`
      ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`
      ctx.lineWidth = 2
      ctx.lineCap = "round"
      ctx.lineJoin = "round"

      ctx.beginPath()
      ctx.moveTo(points[0].x, points[0].y)
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y)
      }
      ctx.stroke()

      // Single bright core
      ctx.shadowBlur = 5
      ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.8})`
      ctx.lineWidth = 1
      ctx.stroke()
    },
    [],
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
    }
    resize()

    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(resize, 100)
    }
    window.addEventListener("resize", handleResize)

    let lastMoveTime = 0
    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now()
      if (now - lastMoveTime < 16) return // ~60fps max for mouse tracking
      lastMoveTime = now

      mouseRef.current.prevX = mouseRef.current.x
      mouseRef.current.prevY = mouseRef.current.y
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY

      const dx = mouseRef.current.x - mouseRef.current.prevX
      const dy = mouseRef.current.y - mouseRef.current.prevY
      const speed = Math.sqrt(dx * dx + dy * dy)

      if (speed > 3) {
        if (trailRef.current.length < 20) {
          trailRef.current.push({
            x: mouseRef.current.x,
            y: mouseRef.current.y,
            age: 0,
          })
        }

        if (Math.random() > 0.7 && lightningRef.current.length < 8) {
          const angle = Math.random() * Math.PI * 2
          const length = 30 + Math.random() * 40
          const endX = mouseRef.current.x + Math.cos(angle) * length
          const endY = mouseRef.current.y + Math.sin(angle) * length

          lightningRef.current.push({
            points: generateLightningPath(mouseRef.current.x, mouseRef.current.y, endX, endY, 4),
            age: 0,
            maxAge: 15,
          })
        }
      }
    }

    const handleClick = (e: MouseEvent) => {
      const boltCount = 8 // Reduced from 16
      for (let i = 0; i < boltCount; i++) {
        const angle = (i / boltCount) * Math.PI * 2
        const length = 60 + Math.random() * 40
        const endX = e.clientX + Math.cos(angle) * length
        const endY = e.clientY + Math.sin(angle) * length

        lightningRef.current.push({
          points: generateLightningPath(e.clientX, e.clientY, endX, endY, 5),
          age: 0,
          maxAge: 20,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("click", handleClick)

    const animate = (timestamp: number) => {
      const elapsed = timestamp - lastFrameRef.current
      if (elapsed < 1000 / targetFPS) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }
      lastFrameRef.current = timestamp

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw trail
      trailRef.current = trailRef.current.filter((point) => {
        point.age++
        return point.age < 25
      })

      // Draw trail connections
      if (trailRef.current.length > 1) {
        for (let i = 1; i < trailRef.current.length; i++) {
          const p1 = trailRef.current[i - 1]
          const p2 = trailRef.current[i]
          const alpha = 1 - Math.max(p1.age, p2.age) / 25
          drawLightning(ctx, [p1, p2], alpha * 0.5)
        }
      }

      // Update and draw lightning bolts
      lightningRef.current = lightningRef.current.filter((bolt) => {
        bolt.age++
        const alpha = 1 - bolt.age / bolt.maxAge
        drawLightning(ctx, bolt.points, alpha)
        return bolt.age < bolt.maxAge
      })

      const { x, y } = mouseRef.current

      const gradient = ctx.createRadialGradient(x, y, 0, x, y, 30)
      gradient.addColorStop(0, "rgba(150, 255, 255, 0.6)")
      gradient.addColorStop(0.4, "rgba(0, 255, 255, 0.2)")
      gradient.addColorStop(1, "rgba(0, 200, 255, 0)")
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(x, y, 30, 0, Math.PI * 2)
      ctx.fill()

      // Bright core
      ctx.fillStyle = "rgba(255, 255, 255, 0.9)"
      ctx.beginPath()
      ctx.arc(x, y, 4, 0, Math.PI * 2)
      ctx.fill()

      const dx = x - mouseRef.current.prevX
      const dy = y - mouseRef.current.prevY
      const speed = Math.sqrt(dx * dx + dy * dy)

      if (speed < 1 && Math.random() > 0.92 && lightningRef.current.length < 5) {
        const angle = Math.random() * Math.PI * 2
        const length = 15 + Math.random() * 20
        const endX = x + Math.cos(angle) * length
        const endY = y + Math.sin(angle) * length

        lightningRef.current.push({
          points: generateLightningPath(x, y, endX, endY, 3),
          age: 0,
          maxAge: 8,
        })
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("click", handleClick)
      cancelAnimationFrame(animationRef.current)
      clearTimeout(resizeTimeout)
    }
  }, [generateLightningPath, drawLightning])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-50" style={{ cursor: "none" }} />
}
