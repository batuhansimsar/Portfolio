"use client"

import { useState, FormEvent, useEffect } from "react"
import emailjs from "@emailjs/browser"
import { GlassCard } from "@/components/glass-card"
import { MagneticButton } from "@/components/magnetic-button"
import { Mail, MapPin, Clock, Send, Zap, CheckCircle, XCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    if (publicKey) {
      emailjs.init(publicKey)
    } else {
      console.error("EmailJS public key is not defined")
    }
  }, [])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: null, message: "" })

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = "template_bep23vf" // Your actual EmailJS template ID

    if (!serviceId) {
      setStatus({
        type: "error",
        message: "Email servisi yapılandırılmamış. Lütfen doğrudan email ile iletişime geçin.",
      })
      setLoading(false)
      return
    }

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "batuhansimsarjs@gmail.com",
        }
      )

      console.log("EmailJS Success:", result)

      if (result.status === 200) {
        setStatus({
          type: "success",
          message: "Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağım.",
        })
        setFormData({ name: "", email: "", message: "" })
      }
    } catch (error: any) {
      console.error("EmailJS Error:", error)

      let errorMessage = "Mesaj gönderilemedi. "

      if (error?.text) {
        errorMessage += error.text
      } else if (error?.message) {
        errorMessage += error.message
      } else {
        errorMessage += "Lütfen doğrudan email ile iletişime geçin: batuhansimsarjs@gmail.com"
      }

      setStatus({
        type: "error",
        message: errorMessage,
      })
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 space-y-4 text-center">
          <p className="font-mono text-sm text-cyan-400/60 tracking-widest uppercase">Bağlantı</p>
          <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl tracking-tight">
            <span className="text-cyan-400">{"/*"}</span> İletişim <span className="text-cyan-400">{"*/"}</span>
          </h2>
          <p className="font-mono text-gray-500 max-w-xl mx-auto">Birlikte harika şeyler yaratmak ister misiniz?</p>
        </div>

        <GlassCard className="p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-white tracking-tight">Bana Ulaşın</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 shadow-[0_0_15px_rgba(0,255,255,0.1)]">
                    <Mail className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="font-mono text-sm text-gray-500">E-posta</p>
                    <p className="font-mono text-cyan-300">batuhansimsarjs@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 shadow-[0_0_15px_rgba(0,255,255,0.1)]">
                    <MapPin className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="font-mono text-sm text-gray-500">Konum</p>
                    <p className="font-mono text-cyan-300">İstanbul, Türkiye</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 shadow-[0_0_15px_rgba(0,255,255,0.1)]">
                    <Clock className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="font-mono text-sm text-gray-500">Durum</p>
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                      </span>
                      <p className="font-mono text-emerald-400">Müsait</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="mb-2 block font-mono text-sm text-gray-500">
                  İsim
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="interactive-element w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 font-mono text-white placeholder-gray-600 outline-none transition-all duration-300 focus:border-cyan-400/40 focus:shadow-[0_0_20px_rgba(0,255,255,0.1)] disabled:opacity-50"
                  placeholder="Adınız"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block font-mono text-sm text-gray-500">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="interactive-element w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 font-mono text-white placeholder-gray-600 outline-none transition-all duration-300 focus:border-cyan-400/40 focus:shadow-[0_0_20px_rgba(0,255,255,0.1)] disabled:opacity-50"
                  placeholder="ornek@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block font-mono text-sm text-gray-500">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="interactive-element w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 font-mono text-white placeholder-gray-600 outline-none transition-all duration-300 focus:border-cyan-400/40 focus:shadow-[0_0_20px_rgba(0,255,255,0.1)] disabled:opacity-50"
                  placeholder="Mesajınız..."
                />
              </div>

              {/* Status Message */}
              {status.type && (
                <div
                  className={`flex items-center gap-2 rounded-lg border p-3 font-mono text-sm ${status.type === "success"
                    ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-400"
                    : "border-red-400/30 bg-red-400/10 text-red-400"
                    }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <XCircle className="h-4 w-4" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <MagneticButton className="w-full" variant="primary" type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Gönderiliyor...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Gönder
                  </>
                )}
              </MagneticButton>
            </form>
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
