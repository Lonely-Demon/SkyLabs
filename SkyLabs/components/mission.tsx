"use client"

import { motion } from "framer-motion"

export function Mission() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-purple-900/20 to-black">
      {/* Glowing orb effects */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl opacity-50" />

      <div className="container px-4">
        <div className="relative w-full">
          {/* Background blur and glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-3xl blur-3xl" />

          {/* Content container */}
          <motion.div
            className="relative w-full bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-12 shadow-2xl shadow-purple-500/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-left mb-12 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our Mission
            </motion.h2>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                SkyLabs is driven by a profound mission to empower Indian farmers through the transformative power of
                real-time, actionable insights derived from space. We believe that access to timely and accurate
                information is not just an advantage—it's a necessity for optimizing crop management practices in
                today's rapidly changing world.
              </p>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                We recognize the immense challenges faced by Indian agriculture, from crop losses and water scarcity to
                the increasing impacts of climate change. By harnessing cutting-edge satellite technology, combined with
                advanced data analytics and AI, SkyLabs delivers personalized recommendations, early warning alerts, and
                valuable decision-support tools directly to farmers' fingertips.
              </p>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                Our goal is simple, yet ambitious: to help farmers significantly increase their yields, reduce input
                costs, minimize their environmental impact, and contribute to a more food-secure and prosperous India.
              </p>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                We are deeply committed to bridging the information gap in Indian agriculture, empowering farmers with
                the knowledge and tools they need not just to survive, but to thrive. We envision a future where
                technology and sustainable practices go hand-in-hand, ensuring a brighter future for Indian agriculture
                and the communities it supports.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

