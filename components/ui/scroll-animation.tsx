"use client"

import { motion, useInView, Variant } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface ScrollAnimationProps {
    children: React.ReactNode
    className?: string
    variant?: "fade" | "slideUp" | "slideLeft" | "slideRight" | "zoom"
    delay?: number
    duration?: number
    blur?: boolean
    scale?: number
    once?: boolean
}

export function ScrollAnimation({
    children,
    className,
    variant = "slideUp",
    delay = 0,
    duration = 0.5,
    blur = false,
    scale = 1,
    once = true,
}: ScrollAnimationProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once, amount: 0.2 })

    const variants = {
        hidden: {
            opacity: 0,
            y: variant === "slideUp" ? 40 : 0,
            x: variant === "slideLeft" ? 40 : variant === "slideRight" ? -40 : 0,
            scale: variant === "zoom" ? 0.95 : scale,
            filter: blur ? "blur(8px)" : "none",
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration,
                delay,
                ease: "easeOut" as const,
            },
        },
    }

    return (
        <motion.div
            ref={ref}
            className={cn(className)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
        >
            {children}
        </motion.div>
    )
}
