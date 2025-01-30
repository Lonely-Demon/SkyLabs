import { Card, CardContent } from "@/components/ui/card"
import { Cpu, BarChart2, Cloud, Shield } from "lucide-react"

const features = [
  {
    title: "Advanced Analytics",
    description: "Get detailed insights into your agricultural operations",
    icon: BarChart2,
  },
  {
    title: "Smart Monitoring",
    description: "Real-time monitoring of crop and soil conditions",
    icon: Cpu,
  },
  {
    title: "Cloud Integration",
    description: "Access your data anywhere, anytime",
    icon: Cloud,
  },
  {
    title: "Secure Platform",
    description: "Your agricultural data is safe with us",
    icon: Shield,
  },
]

export function Features() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Explore Our Technology</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the features that make our platform the choice for modern farmers
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardContent className="p-6">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

