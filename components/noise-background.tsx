"use client"

export function NoiseBackground() {
  return (
    <>
      {/* Base gradient mesh */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* Dark vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, #030305 100%)`,
          }}
        />
      </div>

      {/* Subtle grain overlay - CSS only, no SVG */}
      <div
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </>
  )
}
