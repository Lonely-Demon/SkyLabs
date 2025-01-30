import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "John Smith",
    role: "Farm Owner",
    content: "This technology has revolutionized how we manage our crops. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Agricultural Consultant",
    content: "The insights provided have helped numerous clients optimize their farming operations.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    role: "Large Scale Farmer",
    content: "A game-changer for modern farming. The ROI has been exceptional.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from farmers who have transformed their operations with our technology
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name}>
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

