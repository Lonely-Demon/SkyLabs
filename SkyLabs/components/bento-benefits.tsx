import {
  Wheat,
  IndianRupee,
  Leaf,
  TreesIcon as Plant,
  BarChart2,
  Droplets,
  Bug,
  FlaskRoundIcon as Flask,
  Cloud,
  ChevronRight,
} from "lucide-react"

const benefits = [
  {
    title: "Maximize Your Harvest",
    points: ["Boost yields by up to 15%", "Data-driven decisions", "Healthier crops"],
    icon: Wheat,
    className: "lg:col-span-2 bg-gradient-to-br from-[#FF0066]/10 to-[#FF0066]/30",
  },
  {
    title: "Save on Resources",
    points: ["Minimize input costs", "Reduce waste", "Optimize resource use"],
    icon: IndianRupee,
    className: "bg-gradient-to-br from-[#66FFFF]/10 to-[#66FFFF]/30",
  },
  {
    title: "Farm Sustainably",
    points: ["Reduce environmental impact", "Minimize chemical inputs", "Protect biodiversity"],
    icon: Leaf,
    className: "lg:row-span-2 bg-gradient-to-br from-[#FF0066]/10 to-[#66FFFF]/30",
  },
  {
    title: "Healthier Crops",
    points: ["Early stress detection", "Disease prevention", "Nutrient optimization"],
    icon: Plant,
    className: "bg-gradient-to-br from-[#66FFFF]/10 to-[#FF0066]/30",
  },
  {
    title: "Boost Your Bottom Line",
    points: ["Increased profitability", "Higher yields", "Reduced costs"],
    icon: BarChart2,
    className: "lg:col-span-2 bg-gradient-to-br from-[#FF0066]/10 to-[#66FFFF]/30",
  },
  {
    title: "Solve Water Challenges",
    points: ["Optimize irrigation", "Real-time moisture data", "Reduce water waste"],
    icon: Droplets,
    className: "bg-gradient-to-br from-[#66FFFF]/10 to-[#FF0066]/30",
  },
  {
    title: "Protect Your Crops",
    points: ["Early pest detection", "Disease alerts", "Timely intervention"],
    icon: Bug,
    className: "bg-gradient-to-br from-[#FF0066]/10 to-[#66FFFF]/30",
  },
  {
    title: "Optimize Nutrients",
    points: ["Soil nutrient maps", "Fertilizer guidance", "Targeted application"],
    icon: Flask,
    className: "bg-gradient-to-br from-[#66FFFF]/10 to-[#FF0066]/30",
  },
  {
    title: "Weather-Proof Your Farm",
    points: ["Accurate forecasts", "Extreme weather alerts", "Risk mitigation"],
    icon: Cloud,
    className: "bg-gradient-to-br from-[#FF0066]/10 to-[#66FFFF]/30",
  },
]

export function BentoBenefits() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-purple-900/20 to-black">
      {/* Glowing orb effects */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#FF0066]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-[#66FFFF]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 pt-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#FF0066] to-[#66FFFF] bg-clip-text text-transparent">
          Key Benefits
        </h2>
        <div className="grid lg:grid-cols-4 lg:grid-rows-3 gap-4 max-w-6xl mx-auto">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className={`group relative p-6 rounded-2xl border border-[#FF0066]/20 backdrop-blur-sm 
                transition-all duration-300 hover:scale-[1.02] ${benefit.className}`}
            >
              <div
                className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 
                group-hover:opacity-100 transition-opacity rounded-2xl"
              />
              <benefit.icon className="h-6 w-6 text-white/80 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
              <ul className="space-y-1">
                {benefit.points.map((point, index) => (
                  <li key={index} className="flex items-center gap-1.5 text-gray-300">
                    <ChevronRight className="h-3 w-3 text-[#FF0066] flex-shrink-0" />
                    <span className="text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

