import { Header } from "./components/header"
import { Hero } from "./components/hero"
import { BigBenefit } from "./components/big-benefit"
import { TwoColumnBenefits } from "./components/two-column-benefits"
import { BentoBenefits } from "./components/bento-benefits"
import { FeaturesCarousel } from "./components/features-carousel"
import { Mission } from "./components/mission"
import { TestimonialsCarousel } from "./components/testimonials-carousel"
import { Pricing } from "./components/pricing"
import { Footer } from "./components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <BigBenefit />
      <TwoColumnBenefits />
      <BentoBenefits />
      <FeaturesCarousel />
      <Mission />
      <TestimonialsCarousel />
      <Pricing />
      <Footer />
    </div>
  )
}

