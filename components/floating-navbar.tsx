"use client"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { ShoppingCart, Sparkles, Menu } from "lucide-react"
import { useState } from "react"
import { MobileMenu } from "./mobile-menu"

export function FloatingNavbar() {
  const { totalItems, setIsOpen } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-2 py-2 sm:px-4 sm:py-4">
      <div className="mx-auto max-w-7xl rounded-2xl border-2 border-gray-200 bg-white/90 px-3 py-2 sm:px-6 sm:py-4 backdrop-blur-sm shadow-lg">
        <div className="relative flex items-center justify-between h-12">
          {/* Left: Desktop Navigation Links & Mobile Menu */}
          <div className="flex items-center gap-6">
            {/* Mobile Menu Button */}
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden text-black hover:bg-gray-100"
            >
              <Menu className="h-6 w-6" />
            </Button>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
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
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <button onClick={() => scrollToSection("home")} className="cursor-pointer">
              <div className="flex items-center gap-2 text-black">
                <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-gray-900" />
                <span className="text-lg sm:text-xl font-bold text-black">
                  Sparkle
                </span>
              </div>
            </button>
          </div>

          {/* Right: Cart */}
          <div className="flex items-center gap-3 ml-auto md:ml-0">
            {/* Shopping Cart Button */}
            <Button
              size="sm"
              onClick={() => setIsOpen(true)}
              className="relative bg-black hover:bg-gray-800 text-white border-0 shadow-lg"
            >
              <ShoppingCart className="h-4 w-4 mr-2"  />
              <span className="hidden sm:inline">Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white">
                  {totalItems}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} onNavigate={scrollToSection} />
    </nav>
  )
}
