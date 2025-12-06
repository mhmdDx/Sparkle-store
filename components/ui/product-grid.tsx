"use client"

import { useState } from "react"
import { products, categories } from "@/lib/product-data"
import { ProductCard } from "./product-card"
import { cn } from "@/lib/utils"
import { Filter } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { motion } from "framer-motion"

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
}


export function ProductGrid() {
    const [selectedCategory, setSelectedCategory] = useState("all")

    const filteredProducts = selectedCategory === "all"
        ? products
        : products.filter(p => p.category === selectedCategory)

    const selectedCategoryName = categories.find(c => c.id === selectedCategory)?.name || "All Products"

    return (
        <div className="w-full space-y-8">
            {/* Filter Icon Dropdown */}
            <div className="flex justify-end">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border-2 border-gray-200 hover:border-gray-900 transition-all duration-300 shadow-md hover:shadow-lg">
                            <Filter className="h-5 w-5 text-black" />
                            <span className="font-semibold text-black">{selectedCategoryName}</span>
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48 bg-white border-2 border-gray-200 shadow-xl">
                        {categories.map((category) => (
                            <DropdownMenuItem
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={cn(
                                    "cursor-pointer font-medium transition-colors",
                                    selectedCategory === category.id
                                        ? "bg-black text-white"
                                        : "text-black hover:bg-gray-100"
                                )}
                            >
                                {category.name}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* Product Swiper for Small/Medium Screens */}
            <div className="lg:hidden">
                <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                        },
                    }}
                    className="product-swiper"
                >
                    {filteredProducts.map((product) => (
                        <SwiperSlide key={product.id}>
                            <ProductCard product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Product Grid for Large Screens */}
            <motion.div
                className="hidden lg:grid grid-cols-3 xl:grid-cols-4 gap-6"
                variants={container}
                initial="hidden"
                animate="show"
            >
                {filteredProducts.map((product) => (
                    <motion.div key={product.id} variants={item}>
                        <ProductCard product={product} />
                    </motion.div>
                ))}
            </motion.div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-gray-700 text-lg font-medium">
                        No products found in this category
                    </p>
                </div>
            )}
        </div>
    )
}
