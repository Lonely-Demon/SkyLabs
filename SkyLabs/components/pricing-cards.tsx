import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Basic",
    price: "$29",
    description: "Perfect for small farms",
    features: ["Basic crop monitoring", "Weather alerts", "Simple reporting", "Email support"],
  },
  {
    name: "Pro",
    price: "$99",
    description: "Ideal for medium-sized operations",
    features: [
      "Advanced crop analytics",
      "Soil health monitoring",
      "Custom alerts",
      "24/7 phone support",
      "Integration options",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large agricultural businesses",
    features: [
      "Full-suite analytics",
      "Custom solutions",
      "API access",
      "Dedicated support team",
      "Advanced integrations",
      "Custom reporting",
    ],
  },
]

export function PricingCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {plans.map((plan) => (
        <Card key={plan.name} className={plan.name === "Pro" ? "border-primary" : ""}>
          <CardHeader>
            <CardTitle className="text-2xl">{plan.name}</CardTitle>
            <div className="mt-4">
              <span className="text-4xl font-bold">{plan.price}</span>
              {plan.price !== "Custom" && <span className="text-gray-600">/month</span>}
            </div>
            <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant={plan.name === "Pro" ? "default" : "outline"}>
              Get Started
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

