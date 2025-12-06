"use client"

import { useCart } from "@/lib/cart-context"
import { Button } from "./button"
import { X, Plus, Minus, ShoppingBag, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

export function ShoppingCart() {
    const { items, removeItem, updateQuantity, totalItems, totalPrice, isOpen, setIsOpen } = useCart()

    if (!isOpen) return null

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
                onClick={() => setIsOpen(false)}
            />

            {/* Cart Drawer */}
            <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white border-l-2 border-gray-200 shadow-2xl z-50 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b-2 border-gray-200">
                    <div className="flex items-center gap-3">
                        <ShoppingBag className="h-6 w-6 text-black" />
                        <h2 className="text-2xl font-bold text-black">
                            Shopping Cart
                        </h2>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="rounded-full p-2 hover:bg-gray-100 transition-colors"
                    >
                        <X className="h-5 w-5 text-black" />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                            <Sparkles className="h-16 w-16 text-gray-400" />
                            <p className="text-gray-700 text-lg font-semibold">
                                Your cart is empty
                            </p>
                            <p className="text-gray-600 text-sm">
                                Add some sparkle to your collection!
                            </p>
                        </div>
                    ) : (
                        items.map((item) => (
                            <div
                                key={item.id}
                                className="flex gap-4 p-4 rounded-xl bg-gray-50 border-2 border-gray-200 hover:border-gray-900 transition-all duration-300 shadow-md hover:shadow-lg"
                            >
                                {/* Product Image */}
                                <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center flex-shrink-0 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Product Info */}
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-black text-sm line-clamp-1">
                                        {item.name}
                                    </h3>
                                    <p className="text-black font-bold mt-1">${item.price}</p>

                                    {/* Quantity Controls */}
                                    <div className="flex items-center gap-2 mt-2">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="rounded-full p-1 bg-gray-200 hover:bg-gray-300 transition-colors"
                                        >
                                            <Minus className="h-3 w-3 text-black" />
                                        </button>
                                        <span className="text-black font-semibold w-8 text-center">
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="rounded-full p-1 bg-gray-200 hover:bg-gray-300 transition-colors"
                                        >
                                            <Plus className="h-3 w-3 text-black" />
                                        </button>
                                    </div>
                                </div>

                                {/* Remove Button */}
                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="rounded-full p-2 hover:bg-red-100 transition-colors self-start"
                                >
                                    <X className="h-4 w-4 text-red-600" />
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                    <div className="border-t-2 border-gray-200 p-6 space-y-4 bg-gray-50">
                        <div className="flex items-center justify-between text-black">
                            <span className="text-lg font-semibold">Total ({totalItems} items)</span>
                            <span className="text-2xl font-bold text-black">
                                ${totalPrice.toFixed(2)}
                            </span>
                        </div>
                        <Button
                            className="w-full bg-black hover:bg-gray-800 text-white border-0 shadow-lg text-lg py-6 transition-all duration-300"
                        >
                            Checkout
                        </Button>
                    </div>
                )}
            </div>
        </>
    )
}
