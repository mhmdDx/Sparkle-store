"use client"

import { Product } from "@/lib/product-data"
import { useCart } from "@/lib/cart-context"
import { Button } from "./button"
import { ShoppingCart, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface ProductCardProps {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {
    const { addItem } = useCart()
    const [isAdding, setIsAdding] = useState(false)

    const handleAddToCart = () => {
        setIsAdding(true)
        addItem(product)
        setTimeout(() => setIsAdding(false), 600)
    }

    return (
        <div className="group relative overflow-hidden rounded-2xl bg-white border-2 border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-gray-900">
            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                />
                {product.featured && (
                    <div className="absolute top-3 right-3 z-10">
                        <span className="inline-flex items-center gap-1 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white shadow-lg">
                            <Sparkles className="h-3 w-3" />
                            Featured
                        </span>
                    </div>
                )}
            </div>

            {/* Product Info */}
            <div className="p-4 space-y-3">
                <div>
                    <h3 className="font-semibold text-black text-lg line-clamp-1">
                        {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                        {product.description}
                    </p>
                </div>

                <div className="flex items-center justify-between gap-2">
                    <span className="text-2xl font-bold text-black">
                        ${product.price}
                    </span>

                    <Button
                        onClick={handleAddToCart}
                        disabled={!product.inStock || isAdding}
                        className={cn(
                            "relative overflow-hidden bg-black hover:bg-gray-800 text-white border-0 shadow-lg transition-all duration-300",
                            isAdding && "scale-95"
                        )}
                        size="sm"
                    >
                        <span className={cn("flex items-center gap-2 transition-all", isAdding && "scale-0")}>
                            <ShoppingCart className="h-4 w-4" />
                            Add
                        </span>
                        {isAdding && (
                            <span className="absolute inset-0 flex items-center justify-center">
                                <Sparkles className="h-4 w-4 animate-spin" />
                            </span>
                        )}
                    </Button>
                </div>

                {!product.inStock && (
                    <div className="text-center">
                        <span className="text-xs text-red-600 font-semibold">Out of Stock</span>
                    </div>
                )}
            </div>
        </div>
    )
}
