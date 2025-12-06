"use client"

import { useEffect, useState } from "react"
import { MeshGradient } from "@paper-design/shaders-react"

export function LiquidMetalBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-100 to-white" />
  }

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-white">
      {/* Mobile Static Fallback */}
      <div className="absolute inset-0 block sm:hidden bg-gradient-to-br from-gray-100 via-gray-200 to-gray-400" />

      {/* Desktop 3D Mesh Gradient */}
      <div className="hidden sm:block absolute inset-0 w-full h-full">
        <MeshGradient
          className="absolute inset-0 w-full h-full"
          colors={["#ffffff", "#e5e7eb", "#9ca3af", "#6b7280", "#374151"]}
          speed={0.4}
        />

        {/* Secondary mesh overlay for depth */}
        <MeshGradient
          className="absolute inset-0 w-full h-full opacity-30"
          colors={["#f3f4f6", "#d1d5db", "#9ca3af", "#4b5563"]}
          speed={0.3}
        />
      </div>

      {/* Subtle overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10" />
    </div>
  )
}
