import type React from "react"
import { cn } from "@/lib/utils"
import { GlassCard } from "./glass-card"

interface BentoGridProps {
  children: React.ReactNode
  className?: string
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn("grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4", className)}
    >
      {children}
    </div>
  )
}

interface BentoCardProps {
  children: React.ReactNode
  className?: string
  colSpan?: 1 | 2 | 3 | 4
  rowSpan?: 1 | 2
}

export function BentoCard({ children, className, colSpan = 1, rowSpan = 1 }: BentoCardProps) {
  const colSpanClasses = {
    1: "lg:col-span-1",
    2: "md:col-span-2 lg:col-span-2",
    3: "md:col-span-2 lg:col-span-3",
    4: "md:col-span-2 lg:col-span-4",
  }

  const rowSpanClasses = {
    1: "row-span-1",
    2: "row-span-2",
  }

  return <GlassCard className={cn(colSpanClasses[colSpan], rowSpanClasses[rowSpan], className)}>{children}</GlassCard>
}
