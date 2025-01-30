import { Card, CardContent } from "@/components/ui/card"
import { Leaf, TrendingUp, PiggyBank, TreesIcon as Plant, BarChart } from "lucide-react"

const benefits = [
  {
    title: "Increased crop yields",
    description: "Optimize your farming practices for maximum yield",
    icon: TrendingUp,
  },
  {
    title: "Reduced input costs",
    description: "Lower your operational expenses with smart resource management",
    icon: PiggyBank,
  },
  {
    title: "Sustainable farming practices",
    description: "Implement eco-friendly agricultural solutions",
    icon: Leaf,
  },
  {
    title: "Improved crop health",
    description: "Monitor and maintain optimal crop conditions",
    icon: Plant,
  },
  {
    title: "Increased profit",
    description: "Boost your bottom line with data-driven decisions",
    icon: BarChart,
  },
]

export function Benefits() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Key Benefits</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how our agricultural technology can transform your farming operations
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <Card key={benefit.title}>
              <CardContent className="p-6">
                <benefit.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

