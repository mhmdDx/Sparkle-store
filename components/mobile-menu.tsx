"use client"

import { Button } from "./ui/button"
import { X, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

interface MobileMenuProps {
    isOpen: boolean
    onClose: () => void
    onNavigate: (sectionId: string) => void
}

export function MobileMenu({ isOpen, onClose, onNavigate }: MobileMenuProps) {
    if (!isOpen) return null

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
                onClick={onClose}
            />

            {/* Sidebar Drawer */}
            <div className="fixed left-0 top-0 h-full w-full max-w-sm bg-white border-r-2 border-gray-200 shadow-2xl z-50 flex flex-col transform transition-transform duration-300">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b-2 border-gray-200">
                    <div className="flex items-center gap-2">
                        <Sparkles className="h-7 w-7 text-black" />
                        <span className="text-xl font-bold text-black">Menu</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="rounded-full p-3 hover:bg-gray-100 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                    >
                        <X className="h-6 w-6 text-black" />
                    </button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-2">
                    <button
                        onClick={() => onNavigate("home")}
                        className="text-left text-lg font-medium text-gray-800 hover:text-black hover:bg-gray-50 transition-all py-4 px-4 rounded-lg min-h-[48px]"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => onNavigate("products")}
                        className="text-left text-lg font-medium text-gray-800 hover:text-black hover:bg-gray-50 transition-all py-4 px-4 rounded-lg min-h-[48px]"
                    >
                        Shop
                    </button>
                    <button
                        onClick={() => onNavigate("about")}
                        className="text-left text-lg font-medium text-gray-800 hover:text-black hover:bg-gray-50 transition-all py-4 px-4 rounded-lg min-h-[48px]"
                    >
                        About
                    </button>
                    <button
                        onClick={() => onNavigate("contact")}
                        className="text-left text-lg font-medium text-gray-800 hover:text-black hover:bg-gray-50 transition-all py-4 px-4 rounded-lg min-h-[48px]"
                    >
                        Contact
                    </button>
                </div>

                {/* Footer */}
                <div className="p-6 border-t-2 border-gray-200 bg-gray-50">
                    <p className="text-sm text-gray-500 text-center">
                        © 2024 Sparkle & Shine
                    </p>
                </div>
            </div>
        </>
    )
}
