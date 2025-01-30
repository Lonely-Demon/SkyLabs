import Image from "next/image"

export function BigBenefit() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-purple-900/20 to-black">
      {/* Glowing orb effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Maximize Yields with Real-Time Insights
          </h2>

          <div className="w-full relative mb-12">
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur-sm" />
            <div className="relative bg-gray-900 rounded-xl overflow-hidden border border-purple-500/20">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/faed1785-f32a-4157-a864-0fbca7ef22fd.jpg-efVEJWZFGQXv6lK7lFU4BdrFFdnnio.jpeg"
                alt="SkyLabs Agricultural Dashboard"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
              {/* Reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
            </div>
          </div>

          <p className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed">
            Increase your harvest and boost your profits with SkyLabs' real-time satellite monitoring. Get daily
            updates, personalized recommendations, and the tools you need to achieve maximum yields and a more
            profitable farm.
          </p>
        </div>
      </div>
    </section>
  )
}

