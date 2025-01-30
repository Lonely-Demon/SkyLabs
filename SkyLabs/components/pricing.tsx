"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

const plans = {
  monthly: [
    {
      name: "Basic",
      price: "₹999",
      description: "Perfect for small farms",
      features: [
        "Daily satellite imagery",
        "Basic crop monitoring",
        "Weather alerts",
        "Mobile app access",
        "Email support",
      ],
    },
    {
      name: "Pro",
      price: "₹2,499",
      description: "Ideal for medium-sized farms",
      features: [
        "Everything in Basic",
        "Advanced crop analytics",
        "Pest detection alerts",
        "Soil health monitoring",
        "24/7 phone support",
        "Custom notifications",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large agricultural businesses",
      features: [
        "Everything in Pro",
        "Multi-farm management",
        "Advanced AI predictions",
        "Custom API access",
        "Dedicated account manager",
        "On-site training",
        "Custom integrations",
      ],
    },
  ],
  yearly: [
    {
      name: "Basic",
      price: "₹9,990",
      description: "Perfect for small farms",
      features: [
        "Daily satellite imagery",
        "Basic crop monitoring",
        "Weather alerts",
        "Mobile app access",
        "Email support",
      ],
    },
    {
      name: "Pro",
      price: "₹24,990",
      description: "Ideal for medium-sized farms",
      features: [
        "Everything in Basic",
        "Advanced crop analytics",
        "Pest detection alerts",
        "Soil health monitoring",
        "24/7 phone support",
        "Custom notifications",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large agricultural businesses",
      features: [
        "Everything in Pro",
        "Multi-farm management",
        "Advanced AI predictions",
        "Custom API access",
        "Dedicated account manager",
        "On-site training",
        "Custom integrations",
      ],
    },
  ],
}

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-purple-900/20 to-black">
      {/* Glowing orb effects */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl opacity-50" />

      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400 text-lg mb-8">Choose the perfect plan for your farm</p>

          {/* Billing cycle toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${billingCycle === "monthly" ? "text-white" : "text-gray-400"}`}>Monthly</span>
            <Switch
              checked={billingCycle === "yearly"}
              onCheckedChange={(checked) => setBillingCycle(checked ? "yearly" : "monthly")}
            />
            <span className={`text-sm ${billingCycle === "yearly" ? "text-white" : "text-gray-400"}`}>
              Yearly <span className="text-purple-400">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans[billingCycle].map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative bg-black/40 backdrop-blur-xl border border-purple-500/20 overflow-hidden ${
                index === 1 ? "md:scale-105" : ""
              }`}
            >
              {index === 1 && (
                <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-purple-500 to-blue-500" />
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
                <div className="mt-4 flex items-baseline text-white">
                  <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                  {plan.price !== "Custom" && (
                    <span className="ml-1 text-sm font-semibold text-gray-400">/{billingCycle}</span>
                  )}
                </div>
                <p className="text-sm text-gray-400">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="mt-4 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-purple-500 shrink-0" />
                      <span className="ml-3 text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${
                    index === 1
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Demo CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block rounded-full bg-white/5 px-4 py-1.5 text-sm font-medium text-gray-400 backdrop-blur">
            Not sure which plan is right for you?
          </div>
          <h3 className="mt-4 text-2xl font-bold text-white">Try a free demo</h3>
          <p className="mt-2 text-gray-400">Experience the power of SkyLabs with a personalized demo for your farm.</p>
          <Button
            className="mt-6 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
            size="lg"
          >
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  )
}

