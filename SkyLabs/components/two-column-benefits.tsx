import Image from "next/image"

export function TwoColumnBenefits() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-purple-900/20 to-black">
      {/* Glowing orb effects */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        {/* First Benefit */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FF0066] to-[#66FFFF] rounded-2xl blur-sm rotate-2" />
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-[#FF0066]/20 rotate-2 transform transition-transform hover:rotate-0 duration-500">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20clean%20modern%20mockup%20of%20the%20SkyLabs%20mobile%20app%20showing%20personalized%20recommendations%20such%20as%20irrigation%20schedules,%20fertilizer%20recommendations,%20and%20yield%20projections,%20in%20a%20futuristic%20sci-fi%20style%20with%20advance.jpg-jIqQnevifkKrCYoTgjKT4TwR3df8FJ.jpeg"
                alt="AI-powered farming advice"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FF0066]/40 to-transparent" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#FF0066] to-[#66FFFF] bg-clip-text text-transparent">
              Maximize Your Harvest with Personalized AI Advice
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Farming smarter is easier than ever with SkyLabs. Get personalized, AI-powered advice delivered right to
              your phone. From irrigation schedules to fertilizer recommendations, we make data-driven decisions simple
              and accessible.
            </p>
          </div>
        </div>

        {/* Second Benefit */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#FF0066] to-[#66FFFF] bg-clip-text text-transparent">
              Stay Ahead of Threats with Instant Alerts
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Never lose sleep worrying about your crops. SkyLabs' smart alert system monitors your fields 24/7 and
              sends you real-time notifications if any potential issues arise. From pest and disease alerts to soil
              moisture and nutrient deficiency warnings, we help you stay ahead of threats and ensure a healthy,
              thriving harvest.
            </p>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#66FFFF] to-[#FF0066] rounded-2xl blur-sm -rotate-2" />
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-[#FF0066]/20 -rotate-2 transform transition-transform hover:rotate-0 duration-500">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dreamlike%20surreal%20scene%20in%20rich%20burgundy%20and%20deep%20blue%20shows%20a%20mobile%20phone%20displaying%20an%20Indian%20agriculture%20alert,%20suggesting%20recommended%20action%20for%20a%20specific%20weather%20event,%20with%20elegant%20fantastical%20elemen.jpg-Dm4HcBDDvsNioGfFIm9pN7s72w1uvD.jpeg"
                alt="Real-time threat monitoring"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#66FFFF]/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

