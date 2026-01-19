"use client"

import { BentoGrid, BentoCard } from "@/components/bento-grid"
import { MagneticButton } from "@/components/magnetic-button"
import { ExternalLink, Github, Zap, Code2, Cpu, Globe, Server, Terminal } from "lucide-react"

const projects = [
  {
    title: "NexusFlow",
    description: "Slack/Discord-inspired team collaboration chat with SignalR real-time messaging, file sharing, typing indicators, and read receipts. Clean Architecture + CQRS pattern.",
    tech: [".NET 8", "SignalR", "PostgreSQL", "Redis", "MinIO", "CQRS"],
    icon: Server,
    colSpan: 2 as const,
    featured: true,
    github: "https://github.com/batuhansimsar/NexusFlow",
  },
  {
    title: "Microbank",
    description: "Mikroservis mimarisi ile geliştirilmiş bankacılık uygulaması. SAGA pattern, MassTransit ve Docker ile production-ready çözüm.",
    tech: [".NET 8", "MassTransit", "PostgreSQL", "Docker", "RabbitMQ"],
    icon: Server,
    colSpan: 2 as const,
    featured: true,
    github: "https://github.com/batuhansimsar/Microbank",
  },
  {
    title: "HospitalApp",
    description: "Hastane yönetim sistemi. Hasta, doktor, randevu ve departman yönetimi. Clean Architecture ile geliştirilmiş.",
    tech: [".NET 8", "Entity Framework", "PostgreSQL", "Docker"],
    icon: Server,
    colSpan: 1 as const,
    github: "https://github.com/batuhansimsar/HospitalApp",
  },
  {
    title: "AI Document Assistant",
    description: "RAG (Retrieval-Augmented Generation) ile PDF analizi ve soru-cevap sistemi. Gemini AI entegrasyonu.",
    tech: ["Python", "FastAPI", "Gemini AI", "RAG", "ChromaDB"],
    icon: Cpu,
    colSpan: 1 as const,
    github: "https://github.com/batuhansimsar/ai-document-assistant",
  },
  {
    title: "IonCLI",
    description: "Clean Architecture ile .NET projesi oluşturmak için CLI aracı. NuGet'te yayınlı.",
    tech: [".NET 9", "CLI", "Clean Architecture"],
    icon: Terminal,
    colSpan: 1 as const,
    github: "https://github.com/batuhansimsar/IonCLI",
  },
  {
    title: "Bootcamp Management",
    description: "RBAC ile bootcamp yönetim sistemi. .NET 8 backend + React frontend.",
    tech: [".NET 8", "React", "TypeScript", "JWT", "RBAC"],
    icon: Code2,
    colSpan: 1 as const,
    github: "https://github.com/batuhansimsar/Bootcamp",
  },
  {
    title: "Budget Management",
    description: "Kişisel bütçe ve harcama takip uygulaması. ASP.NET Core MVC ile geliştirilmiş.",
    tech: ["ASP.NET Core", "MVC", "Entity Framework", "SQL Server"],
    icon: Code2,
    colSpan: 1 as const,
    github: "https://github.com/batuhansimsar/BudgetManagement",
  },
  {
    title: "Brain Tumor Detection",
    description: "YOLO modelleri ile beyin tümörü tespiti. YOLOv9c, YOLOv10n ve YOLO11n karşılaştırmalı analiz.",
    tech: ["Python", "YOLO", "PyTorch", "Computer Vision"],
    icon: Cpu,
    colSpan: 2 as const,
    github: "https://github.com/batuhansimsar/TumorProjectWithYolo",
  },
  {
    title: "PlantVillage Classification",
    description: "Deep Learning ile bitki hastalığı tespiti. Transfer learning ve custom CNN modelleri.",
    tech: ["Python", "TensorFlow", "Deep Learning"],
    icon: Zap,
    colSpan: 1 as const,
    github: "https://github.com/batuhansimsar/PlantVillage-Disease-Classification",
  },
  {
    title: "ZeroAds YouTube",
    description: "YouTube reklamlarını engelleyen Chrome extension.",
    tech: ["TypeScript", "Chrome API", "Web Extension"],
    icon: Globe,
    colSpan: 1 as const,
    github: "https://github.com/batuhansimsar/ZeroAds-YouTube",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 space-y-4">
          <p className="font-mono text-sm text-cyan-400/60 tracking-widest uppercase">Portfolyo</p>
          <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl tracking-tight">
            <span className="text-cyan-400">{"{"}</span> Projelerim <span className="text-cyan-400">{"}"}</span>
          </h2>
          <p className="font-mono text-gray-500 max-w-xl">
            Üzerinde çalıştığım bazı projeler. Her biri farklı bir problem çözümü.
          </p>
        </div>

        <BentoGrid>
          {projects.map((project) => (
            <BentoCard key={project.title} colSpan={project.colSpan} className={project.featured ? "row-span-2" : ""}>
              <div className="flex h-full flex-col justify-between p-6 md:p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 shadow-[0_0_20px_rgba(0,255,255,0.1)]">
                      <project.icon className="h-7 w-7 text-cyan-400" />
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <MagneticButton href={project.github} variant="icon">
                          <Github className="h-4 w-4" />
                        </MagneticButton>
                      )}
                      {project.demo && (
                        <MagneticButton href={project.demo} variant="icon">
                          <ExternalLink className="h-4 w-4" />
                        </MagneticButton>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-2xl font-semibold text-white tracking-tight">{project.title}</h3>
                    <p className="font-mono text-sm text-gray-400 leading-relaxed">{project.description}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-400/15 bg-cyan-400/5 px-4 py-1.5 font-mono text-xs text-cyan-300/80 transition-all hover:border-cyan-400/30 hover:text-cyan-300"
                    >
                      {tech}
                    </span>
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
