export interface Product {
    id: string
    name: string
    description: string
    price: number
    category: "jewelry" | "hair" | "bags" | "fashion"
    image: string
    inStock: boolean
    featured?: boolean
}

export const products: Product[] = [
    {
        id: "prod-001",
        name: "Premium Accessory 1",
        description: "Beautiful and stylish accessory perfect for any occasion",
        price: 29.99,
        category: "jewelry",
        image: "/p1.jpg",
        inStock: true,
        featured: true,
    },
    {
        id: "prod-002",
        name: "Premium Accessory 2",
        description: "Elegant design with high-quality materials",
        price: 34.99,
        category: "fashion",
        image: "/p2.jpg",
        inStock: true,
        featured: true,
    },
    {
        id: "prod-003",
        name: "Premium Accessory 3",
        description: "Trendy and modern accessory for everyday wear",
        price: 24.99,
        category: "bags",
        image: "/p3.jpg",
        inStock: true,
        featured: true,
    },
    {
        id: "prod-004",
        name: "Premium Accessory 4",
        description: "Stylish and versatile accessory for any outfit",
        price: 27.99,
        category: "hair",
        image: "/P4.jpg",
        inStock: true,
        featured: true,
    },
]

export const categories = [
    { id: "all", name: "All Products" },
    { id: "jewelry", name: "Jewelry" },
    { id: "hair", name: "Hair Accessories" },
    { id: "bags", name: "Bags" },
    { id: "fashion", name: "Fashion" },
]
