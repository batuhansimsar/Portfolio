"use client"

import { BentoGrid, BentoCard } from "@/components/bento-grid"
import { Code2, Server, Database, Palette, Cloud, Terminal } from "lucide-react"

const skillCategories = [
  {
    title: "Backend Development",
    icon: Server,
    skills: [".NET 6/8", "C#", "EF Core", "REST APIs", "Clean Architecture"],
    colSpan: 2 as const,
  },
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    colSpan: 1 as const,
  },
  {
    title: "Database",
    icon: Database,
    skills: ["SQL Server", "PostgreSQL", "LINQ"],
    colSpan: 1 as const,
  },
  {
    title: "Security & Auth",
    icon: Terminal,
    skills: ["JWT", "RBAC", "Authentication", "Authorization"],
    colSpan: 1 as const,
  },
  {
    title: "DevOps & Tools",
    icon: Cloud,
    skills: ["Docker", "Git", "Serilog", "AutoMapper", "Swagger"],
    colSpan: 1 as const,
  },
  {
    title: "AI & ML",
    icon: Code2,
    skills: ["YOLO", "TensorFlow", "PyTorch", "Computer Vision"],
    colSpan: 2 as const,
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 space-y-4">
          <p className="font-mono text-sm text-cyan-400/60 tracking-widest uppercase">Teknolojiler</p>
          <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl tracking-tight">
            <span className="text-cyan-400">{"<"}</span>Yetenekler<span className="text-cyan-400">{" />"}</span>
          </h2>
          <p className="font-mono text-gray-500 max-w-xl">Uzmanlaştığım teknolojiler ve araçlar</p>
        </div>

        <BentoGrid>
          {skillCategories.map((category) => (
            <BentoCard key={category.title} colSpan={category.colSpan}>
              <div className="space-y-5 p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 shadow-[0_0_15px_rgba(0,255,255,0.1)]">
                    <category.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-tight">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="interactive-element group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 font-mono text-sm text-gray-300 transition-all duration-300 hover:border-cyan-400/30 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.1)]"
                    >
                      <span className="relative z-10">{skill}</span>
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                    </div>
                  ))}
                </div>
              </div>
            </BentoCard>
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}
