"use client"

import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { LiquidMetalBackground } from "@/components/liquid-metal-background"
import { FloatingNavbar } from "@/components/floating-navbar"
import { ShinyButton } from "@/components/ui/shiny-button"
import { ProductGrid } from "@/components/ui/product-grid"
import { ShoppingCart } from "@/components/ui/shopping-cart"
import { ContactCard } from "@/components/ui/contact-card"
import { AboutQuote } from "@/components/ui/about-quote"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MailIcon, PhoneIcon, MapPinIcon, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"
import { products } from "@/lib/product-data"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const productsSectionRef = useRef<HTMLDivElement>(null)
  const categoriesSectionRef = useRef<HTMLDivElement>(null)
  const aboutSectionRef = useRef<HTMLDivElement>(null)
  const contactSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    // Custom touch handling removed to restore native fluidity
    // standard horizontal scroll will be handled by CSS snap


    // Desktop: use wheel events
    const handleWheel = (e: WheelEvent) => {
      const delta = e.deltaY
      const currentScroll = scrollContainer.scrollLeft
      const containerWidth = scrollContainer.offsetWidth
      const currentSection = Math.round(currentScroll / containerWidth)

      if (currentSection === 1 && productsSectionRef.current) {
        const productsSection = productsSectionRef.current
        const isAtTop = productsSection.scrollTop <= 5
        const isAtBottom = productsSection.scrollTop + productsSection.clientHeight >= productsSection.scrollHeight - 5

        if (delta > 0 && !isAtBottom) {
          return
        }

        if (delta < 0 && !isAtTop) {
          return
        }

        if (delta < 0 && isAtTop) {
          e.preventDefault()
          scrollContainer.scrollTo({
            left: 0 * containerWidth,
            behavior: "smooth",
          })
          return
        }

        if (delta > 0 && isAtBottom) {
          e.preventDefault()
          scrollContainer.scrollTo({
            left: 2 * containerWidth,
            behavior: "smooth",
          })
          return
        }
      }

      if (currentSection === 2 && aboutSectionRef.current) {
        const aboutSection = aboutSectionRef.current
        const isAtTop = aboutSection.scrollTop <= 5
        const isAtBottom = aboutSection.scrollTop + aboutSection.clientHeight >= aboutSection.scrollHeight - 5

        if (delta > 0 && !isAtBottom) {
          return
        }

        if (delta < 0 && !isAtTop) {
          return
        }

        if (delta < 0 && isAtTop) {
          e.preventDefault()
          scrollContainer.scrollTo({
            left: 1 * containerWidth,
            behavior: "smooth",
          })
          return
        }

        if (delta > 0 && isAtBottom) {
          e.preventDefault()
          scrollContainer.scrollTo({
            left: 3 * containerWidth,
            behavior: "smooth",
          })
          return
        }
      }

      if (currentSection === 3 && contactSectionRef.current) {
        const contactSection = contactSectionRef.current
        const isAtTop = contactSection.scrollTop <= 5
        const isAtBottom = contactSection.scrollTop + contactSection.clientHeight >= contactSection.scrollHeight - 5

        if (delta > 0 && !isAtBottom) {
          return
        }

        if (delta < 0 && !isAtTop) {
          return
        }

        if (delta < 0 && isAtTop) {
          e.preventDefault()
          scrollContainer.scrollTo({
            left: 2 * containerWidth,
            behavior: "smooth",
          })
          return
        }

        if (delta > 0 && isAtBottom) {
          e.preventDefault()
          return
        }
      }

      e.preventDefault()

      if (Math.abs(delta) > 10) {
        let targetSection = currentSection
        if (delta > 0) {
          targetSection = Math.min(currentSection + 1, 3)
        } else {
          targetSection = Math.max(currentSection - 1, 0)
        }

        scrollContainer.scrollTo({
          left: targetSection * containerWidth,
          behavior: "smooth",
        })
      }
    }

    scrollContainer.addEventListener("wheel", handleWheel, { passive: false })
    return () => scrollContainer.removeEventListener("wheel", handleWheel)
  }, [])

  const featuredProducts = products.filter(p => p.featured)

  return (
    <main className="relative h-screen overflow-hidden max-w-screen">
      <LiquidMetalBackground />

      <FloatingNavbar />
      <ShoppingCart />

      <div
        ref={scrollContainerRef}
        className="relative z-10 flex h-screen w-full overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <section id="home" className="flex min-w-full snap-start items-center justify-center px-6 sm:px-6 lg:px-8 pt-36 pb-16 sm:pt-40 lg:pt-48">
          <div className="mx-auto max-w-4xl w-full">
            <div className="text-center px-0 leading-5">

              <ScrollAnimation delay={0.1}>
                <h1 className="mb-6 sm:mb-8 text-balance text-2xl sm:text-5xl md:text-6xl lg:text-8xl tracking-tight text-black font-bold">
                  <span className="font-open-sans-custom not-italic">Sparkle.</span>{" "}
                  <span className="font-serif italic">Shine.</span>{" "}
                  <span className="font-open-sans-custom not-italic">Accessories .</span>
                </h1>
              </ScrollAnimation>

              <ScrollAnimation delay={0.2}>
                <p className="mb-6 sm:mb-8 mx-auto max-w-2xl text-pretty leading-relaxed text-gray-700 font-light tracking-wide text-xs sm:text-lg lg:text-xl px-4 sm:px-0">
                  Discover the perfect accessories to express your unique style. From{" "}
                  <span className="font-serif italic text-gray-900">sparkling jewelry</span> to trendy bags,
                  find everything you need to shine bright!
                </p>
              </ScrollAnimation>

              <ScrollAnimation delay={0.3}>
                <div className="flex justify-center gap-4 mb-8 sm:mb-0">
                  <ShinyButton className="px-4 py-2 sm:px-8 sm:py-3 text-xs sm:text-base bg-black text-white hover:bg-gray-800">
                    Shop Now
                  </ShinyButton>
                </div>
              </ScrollAnimation>

              {/* Featured Products Preview */}
              {/* Auto Swiper Carousel */}
              <ScrollAnimation delay={0.4} className="mt-8 sm:mt-10 lg:mt-12 max-w-4xl mx-auto px-2 sm:px-4 lg:px-0">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  spaceBetween={20}
                  slidesPerView={1}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                  }}
                  className="hero-swiper"
                >
                  <SwiperSlide>
                    <div className="group relative w-full aspect-square rounded-3xl bg-white border-2 border-gray-200 overflow-hidden hover:scale-105 hover:border-gray-900 transition-all shadow-2xl">
                      <img src="/1.png" alt="Hero Image 1" className="w-full h-full object-cover" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="group relative w-full aspect-square rounded-3xl bg-white border-2 border-gray-200 overflow-hidden hover:scale-105 hover:border-gray-900 transition-all shadow-2xl">
                      <img src="/2.png" alt="Hero Image 2" className="w-full h-full object-cover" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="group relative w-full aspect-square rounded-3xl bg-white border-2 border-gray-200 overflow-hidden hover:scale-105 hover:border-gray-900 transition-all shadow-2xl">
                      <img src="/3.png" alt="Hero Image 3" className="w-full h-full object-cover" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        <section
          id="products"
          ref={productsSectionRef}
          className="relative min-w-full snap-start overflow-y-auto px-6 pt-28 sm:pt-32 pb-24 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div
            aria-hidden="true"
            className={cn(
              "absolute inset-0 z-0 size-full pointer-events-none",
              "bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]",
              "bg-[size:12px_12px]",
              "opacity-30",
            )}
          />

          <div className="relative z-10 mx-auto w-full max-w-7xl">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <ScrollAnimation>
                <h1 className="text-2xl font-semibold tracking-tight lg:text-5xl text-black">
                  Shop Our Collection
                </h1>
              </ScrollAnimation>
              <ScrollAnimation delay={0.1}>
                <p className="text-gray-700 mt-4 text-xs md:text-lg leading-relaxed">
                  Browse through our carefully curated selection of beautiful accessories for every style and occasion
                </p>
              </ScrollAnimation>
            </div>
            <ProductGrid />
          </div>
        </section>



        <section
          id="about"
          ref={aboutSectionRef}
          className="relative min-w-full snap-start overflow-y-auto px-6 sm:px-6 pt-24 sm:pt-32 pb-20 sm:pb-20 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div
            aria-hidden="true"
            className={cn(
              "absolute inset-0 z-0 size-full pointer-events-none",
              "bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]",
              "bg-[size:12px_12px]",
              "opacity-30",
            )}
          />

          <div className="relative z-10 mx-auto w-full max-w-7xl">
            {/* Header */}
            <div className="mx-auto mb-8 sm:mb-12 max-w-3xl text-center">
              <ScrollAnimation>
                <h1 className="text-2xl sm:text-4xl font-bold tracking-tight lg:text-5xl text-black mb-3 sm:mb-4">
                  Our Story
                </h1>
              </ScrollAnimation>
              <ScrollAnimation delay={0.1}>
                <p className="text-gray-700 text-xs sm:text-base md:text-lg leading-relaxed px-2">
                  Empowering girls to express their unique style with beautiful, quality accessories
                </p>
              </ScrollAnimation>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {/* Image Section */}
              <div className="relative order-1 lg:order-none">
                <div className="lg:sticky lg:top-8">
                  <ScrollAnimation variant="zoom" duration={0.8}>
                    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white border-2 border-gray-200 shadow-xl sm:shadow-2xl h-[300px] sm:h-[400px] lg:h-[600px]">
                      <img
                        src="/hero-image-Biu-8NYF.png"
                        alt="Our Story"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>

              {/* Content Section */}
              <div className="space-y-4 sm:space-y-6 order-2 lg:order-none">
                {/* Mission Card */}
                <ScrollAnimation delay={0.2} variant="slideLeft">
                  <div className="rounded-xl sm:rounded-2xl bg-white border-2 border-gray-200 p-3 sm:p-8 shadow-lg hover:border-gray-900 transition-all duration-300">
                    <h3 className="text-lg sm:text-2xl font-bold text-black mb-3 sm:mb-4">
                      Our Mission
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-xs sm:text-base">
                      At Sparkle & Shine, we believe every girl deserves to feel confident and beautiful.
                      We curate the finest accessories that combine quality, style, and affordability.
                      From everyday essentials to special occasion pieces, we're here to help you shine bright!
                    </p>
                  </div>
                </ScrollAnimation>

                {/* Values Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <ScrollAnimation delay={0.3} className="h-full">
                    <div className="rounded-lg sm:rounded-xl bg-white border-2 border-gray-200 p-3 sm:p-6 shadow-md hover:shadow-lg hover:border-gray-900 transition-all duration-300 h-full">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-black flex items-center justify-center mb-3 sm:mb-4">
                        <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h4 className="text-sm sm:text-lg font-bold text-black mb-2">
                        Quality First
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        We carefully select each product to ensure it meets our high standards for quality and durability.
                      </p>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation delay={0.4} className="h-full">
                    <div className="rounded-lg sm:rounded-xl bg-white border-2 border-gray-200 p-3 sm:p-6 shadow-md hover:shadow-lg hover:border-gray-900 transition-all duration-300 h-full">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-black flex items-center justify-center mb-3 sm:mb-4">
                        <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h4 className="text-sm sm:text-lg font-bold text-black mb-2">
                        Trendy Styles
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Stay ahead of the trends with our constantly updated collection of the latest accessories.
                      </p>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation delay={0.5} className="h-full">
                    <div className="rounded-lg sm:rounded-xl bg-white border-2 border-gray-200 p-3 sm:p-6 shadow-md hover:shadow-lg hover:border-gray-900 transition-all duration-300 h-full">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-black flex items-center justify-center mb-3 sm:mb-4">
                        <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-sm sm:text-lg font-bold text-black mb-2">
                        Affordable Prices
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Beautiful accessories shouldn't break the bank. We offer competitive prices without compromising quality.
                      </p>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation delay={0.6} className="h-full">
                    <div className="rounded-lg sm:rounded-xl bg-white border-2 border-gray-200 p-3 sm:p-6 shadow-md hover:shadow-lg hover:border-gray-900 transition-all duration-300 h-full">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-black flex items-center justify-center mb-3 sm:mb-4">
                        <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <h4 className="text-sm sm:text-lg font-bold text-black mb-2">
                        Customer Love
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Your satisfaction is our priority. We're here to help you find the perfect accessories for any occasion.
                      </p>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          ref={contactSectionRef}
          className="relative min-w-full snap-start overflow-y-auto px-6 sm:px-6 pt-28 sm:pt-32 pb-20 sm:pb-20 mt-10"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div
            aria-hidden="true"
            className={cn(
              "absolute inset-0 z-0 size-full pointer-events-none",
              "bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]",
              "bg-[size:12px_12px]",
              "opacity-30",
            )}
          />

          <div className="relative z-10 mx-auto w-full max-w-7xl">
            {/* Header */}
            <div className="mx-auto mb-12 sm:mb-16 max-w-3xl text-center">
              <ScrollAnimation>
                <h1 className="text-2xl sm:text-4xl font-bold tracking-tight lg:text-5xl text-black mb-4">
                  Get in Touch
                </h1>
              </ScrollAnimation>
              <ScrollAnimation delay={0.1}>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed px-2">
                  Have questions about our products or need help with your order? We'd love to hear from you!
                </p>
              </ScrollAnimation>
            </div>

            {/* Contact Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Information Section */}
              <div className="space-y-6">
                {/* Contact Info Cards */}
                <div className="space-y-4">
                  {/* Email Card */}
                  <ScrollAnimation delay={0.2} variant="slideRight">
                    <div className="group rounded-xl sm:rounded-2xl bg-white border-2 border-gray-200 p-3 shadow-lg hover:shadow-xl hover:border-gray-900 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <MailIcon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-black mb-1">Email Us</h3>
                          <p className="text-gray-600 text-xs mb-2">Send us an email anytime</p>
                          <a href="mailto:hello@sparkleandshine.com" className="text-black font-medium hover:underline text-sm">
                            hello@sparkleandshine.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>

                  {/* Phone Card */}
                  <ScrollAnimation delay={0.3} variant="slideRight">
                    <div className="group rounded-xl sm:rounded-2xl bg-white border-2 border-gray-200 p-3 shadow-lg hover:shadow-xl hover:border-gray-900 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <PhoneIcon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-black mb-1">Call Us</h3>
                          <p className="text-gray-600 text-xs mb-2">Mon-Fri from 9am to 6pm</p>
                          <a href="tel:+15551234567" className="text-black font-medium hover:underline text-sm">
                            +1 (555) 123-4567
                          </a>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>

                  {/* Address Card */}
                  <ScrollAnimation delay={0.4} variant="slideRight">
                    <div className="group rounded-xl sm:rounded-2xl bg-white border-2 border-gray-200 p-3 shadow-lg hover:shadow-xl hover:border-gray-900 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <MapPinIcon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-black mb-1">Visit Us</h3>
                          <p className="text-gray-600 text-xs mb-2">Come say hello at our store</p>
                          <p className="text-black font-medium text-sm">
                            123 Fashion Street, Style City
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>

                {/* Additional Info */}
                <ScrollAnimation delay={0.5} variant="slideRight">
                  <div className="rounded-xl sm:rounded-2xl bg-gradient-to-br from-black to-gray-800 p-6 sm:p-8 shadow-xl">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                      Customer Support
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      Our dedicated support team is here to help you with any questions or concerns.
                      We typically respond within 24 hours during business days.
                    </p>
                    <div className="flex items-center gap-2 text-white">
                      <Sparkles className="h-5 w-5" />
                      <span className="text-sm font-medium">Fast & Friendly Service</span>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>

              {/* Contact Form Section */}
              <ScrollAnimation delay={0.3} variant="slideLeft" className="h-full">
                <div className="rounded-xl sm:rounded-2xl bg-white border-2 border-gray-200 p-6 sm:p-8 shadow-xl ">
                  <h2 className="text-2xl font-bold text-black mb-2">Send us a Message</h2>
                  <p className="text-gray-600 text-sm mb-6">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>

                  <form className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-black font-medium text-sm">
                        Your Name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        className="bg-gray-50 border-2 border-gray-200 text-black placeholder:text-gray-400 focus:border-black focus:ring-0 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-black font-medium text-sm">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-gray-50 border-2 border-gray-200 text-black placeholder:text-gray-400 focus:border-black focus:ring-0 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-black font-medium text-sm">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="bg-gray-50 border-2 border-gray-200 text-black placeholder:text-gray-400 focus:border-black focus:ring-0 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-black font-medium text-sm">
                        Your Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help you..."
                        rows={5}
                        className="bg-gray-50 border-2 border-gray-200 text-black placeholder:text-gray-400 focus:border-black focus:ring-0 transition-colors resize-none"
                      />
                    </div>

                    <Button
                      type="button"
                      className="w-full bg-black text-white hover:bg-gray-800 font-semibold py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
