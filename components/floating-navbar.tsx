"use client"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { ShoppingCart, Sparkles } from "lucide-react"

export function FloatingNavbar() {
  const { totalItems, setIsOpen } = useCart()

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
    }
  }

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
      <div className="mx-auto max-w-7xl rounded-2xl border-2 border-gray-200 bg-white/90 px-6 py-4 backdrop-blur-sm shadow-lg">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollToSection("home")} className="cursor-pointer">
            <div className="flex items-center gap-2 text-black">
              <Sparkles className="h-8 w-8 text-gray-900" />
              <span className="text-xl font-bold text-black">
                Sparkle
              </span>
            </div>
          </button>

          {/* Navigation Links */}
          <div className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-black"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-black"
            >
              Shop
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-black"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-black"
            >
              Contact
            </button>
          </div>

          {/* Shopping Cart Button */}
          <Button
            size="sm"
            onClick={() => setIsOpen(true)}
            className="relative bg-black hover:bg-gray-800 text-white border-0 shadow-lg"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white">
                {totalItems}
              </span>
            )}
          </Button>
        </div>
      </div>
    </nav>
  )
}
