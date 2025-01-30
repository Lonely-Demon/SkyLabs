"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    name: "Rajesh Kumar",
    image: "/placeholder.svg?height=80&width=80",
    rating: 4,
    statement:
      "SkyLabs has transformed how I manage my farm. The satellite insights have helped me increase my crop yield by 20% in just one season. Their technology is truly revolutionary.",
  },
  {
    name: "Priya Patel",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    statement:
      "The early warning system for crop diseases has saved my harvest multiple times. The support team is always there when you need them. Couldn't farm without it now!",
  },
  {
    name: "Amit Singh",
    image: "/placeholder.svg?height=80&width=80",
    rating: 4,
    statement:
      "Being able to monitor my fields from my phone has made farming so much more efficient. The AI recommendations are spot-on and have helped reduce water usage significantly.",
  },
  {
    name: "Meera Reddy",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    statement:
      "As a modern farmer, having access to satellite data has been game-changing. SkyLabs provides insights that were impossible to get before. Highly recommended!",
  },
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  // Auto-advance the carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-purple-900/20 to-black">
      {/* Glowing orb effects */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl opacity-50" />

      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
            What Farmers Say
          </h2>
          <p className="text-gray-400 text-lg">Real experiences from farmers using SkyLabs</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative h-[300px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={{
                  enter: (direction) => ({
                    x: direction > 0 ? 1000 : -1000,
                    opacity: 0,
                  }),
                  center: {
                    zIndex: 1,
                    x: 0,
                    opacity: 1,
                  },
                  exit: (direction) => ({
                    zIndex: 0,
                    x: direction < 0 ? 1000 : -1000,
                    opacity: 0,
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full"
              >
                <div className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 shadow-2xl shadow-purple-500/10">
                  <div className="flex flex-col items-center">
                    <div className="relative w-20 h-20 mb-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur" />
                      <div className="relative rounded-full overflow-hidden border-2 border-purple-500">
                        <Image
                          src={testimonials[currentIndex].image || "/placeholder.svg"}
                          alt={testimonials[currentIndex].name}
                          width={80}
                          height={80}
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-4">{testimonials[currentIndex].name}</h3>
                    <p className="text-gray-300 text-center max-w-2xl text-lg">
                      "{testimonials[currentIndex].statement}"
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 bg-purple-500" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

