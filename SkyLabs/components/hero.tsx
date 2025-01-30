import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"

// Add this CSS for the starry background animation
const starryBackground = `
@keyframes twinkle {
  0% { opacity: 0.2; }
  50% { opacity: 0.8; }
  100% { opacity: 0.2; }
}

.star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
}

.star:nth-child(3n) {
  animation: twinkle 4s infinite;
}

.star:nth-child(3n + 1) {
  animation: twinkle 3s infinite;
}

.star:nth-child(3n + 2) {
  animation: twinkle 5s infinite;
}
`

export function Hero() {
  // Generate random star positions
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  }))

  return (
    <>
      <style jsx global>
        {starryBackground}
      </style>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 via-gray-900 to-black py-20 px-4">
        {/* Animated stars */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              top: star.top,
              left: star.left,
            }}
          />
        ))}

        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center relative z-10 bg-gray-900/30 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Satellites for Smart and Sustainable Farm
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              SkyLabs empowers Indian farmers with daily satellite insights for optimized yields and a healthier planet.
              Explore the power of space to transform your farm.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white rounded-full px-8 py-6 text-lg"
            >
              Get Started
              <Rocket className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-gray-400 mt-8">Cultivating a Sustainable Agriculture from Above</p>
          </div>
        </div>
      </section>
    </>
  )
}

