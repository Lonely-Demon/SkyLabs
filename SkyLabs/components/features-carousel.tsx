"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { ChevronRight } from "lucide-react"

// Data structure for carousel content
const carouselData = [
  {
    container: 1,
    slides: [
      {
        headline: "Historical Data Analysis & Trends",
        supportingText:
          "Make informed decisions for future seasons with SkyLabs' historical agricultural data. Analyze past trends to optimize planting schedules, predict potential yields, and adapt to changing climate conditions",
        bulletPoints: [
          "Access years of data on weather, crops, and soil",
          "Identify trends and patterns in farm performance",
          "Predict yields with greater accuracy",
          "Benchmark against regional averages",
        ],
      },
      {
        headline: "Field Mapping & Crop Identification",
        supportingText:
          "Gain a precise understanding of your fields and crops with SkyLabs' high-resolution satellite imagery. Easily map your farm, identify different crop types, and monitor their growth throughout the season.",
        bulletPoints: [
          "Create accurate maps of your fields with detailed boundaries",
          "Identify and classify different crop types using spectral analysis",
          "Monitor crop growth and development over time",
          "Assess crop acreage and distribution within your farm",
        ],
      },
    ],
  },
  {
    container: 2,
    slides: [
      {
        headline: "Weather Forecasting & Risk Management",
        supportingText:
          "Stay ahead of weather-related risks with SkyLabs' accurate forecasts and real-time alerts. Protect your crops from extreme events, optimize irrigation, and minimize potential losses",
        bulletPoints: [
          "Receive location-specific weather forecasts tailored to your farm",
          "Get real-time alerts for extreme weather events (e.g., heavy rain, frost)",
          "Optimize irrigation schedules based on weather predictions and soil moisture data",
          "Mitigate weather-related risks and protect your investment",
        ],
      },
      {
        headline: "Round the Clock Monitoring",
        supportingText:
          "Rest easy knowing your fields are always protected. SkyLabs provides continuous satellite monitoring, giving you a constant view of your crops, day and night.",
        bulletPoints: [
          "Continuous satellite surveillance of your fields",
          "Real-time alerts for potential problems (pests, diseases, stress)",
          "Early detection of crop health changes and other anomalies",
          "Timely interventions to minimize losses and maximize yields",
        ],
      },
    ],
  },
]

export function FeaturesCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeContainer, setActiveContainer] = useState(0)
  const [activeSlide, setActiveSlide] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Transform scroll progress into container and slide indices
  const progress = useTransform(scrollYProgress, [0, 1], [0, 4])

  progress.onChange((latest) => {
    const containerIndex = Math.floor(latest / 2)
    const slideIndex = Math.floor(latest % 2)
    if (containerIndex !== activeContainer) setActiveContainer(containerIndex)
    if (slideIndex !== activeSlide) setActiveSlide(slideIndex)
  })

  return (
    <section
      ref={containerRef}
      className="relative min-h-[200vh] bg-gradient-to-b from-black via-purple-900/20 to-black"
    >
      <div className="sticky top-0 h-screen overflow-hidden py-12">
        <div className="container mx-auto px-4 h-full relative">
          {/* Add backdrop and elevation container */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-3xl blur-3xl" />
          <div className="relative bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 h-full shadow-2xl shadow-purple-500/10">
            <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
              {/* Content Container */}
              <motion.div
                className="space-y-8"
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5 },
                }}
                initial={{ opacity: 0, x: -50 }}
              >
                <motion.h2
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  key={`${activeContainer}-${activeSlide}-headline`}
                >
                  {carouselData[activeContainer]?.slides[activeSlide]?.headline}
                </motion.h2>

                <motion.p
                  className="text-gray-300 text-lg"
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  key={`${activeContainer}-${activeSlide}-text`}
                >
                  {carouselData[activeContainer]?.slides[activeSlide]?.supportingText}
                </motion.p>
              </motion.div>

              {/* Card Container */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur-sm" />
                <motion.div
                  className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20"
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5 },
                  }}
                  initial={{ opacity: 0, x: 50 }}
                >
                  <ul className="space-y-4">
                    {carouselData[activeContainer]?.slides[activeSlide]?.bulletPoints.map((point, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3 text-gray-200"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <ChevronRight className="h-6 w-6 text-purple-400 flex-shrink-0" />
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
              {[0, 1].map((containerIndex) => (
                <div key={containerIndex} className="flex gap-2">
                  {[0, 1].map((slideIndex) => (
                    <div
                      key={`${containerIndex}-${slideIndex}`}
                      className={`h-2 w-2 rounded-full transition-all duration-300 ${
                        containerIndex === activeContainer && slideIndex === activeSlide
                          ? "bg-purple-500 w-8"
                          : "bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

