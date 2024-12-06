import { 
  HeroSection,
  FeatureCarousel,
  HowItWorks,
  TestimonialsSection,
  PricingPreview,
  CTASection 
} from "@/components/home"

export const metadata = {
  title: "AI-Powered DAT Prep Platform",
  description: "Transform your DAT preparation with personalized AI learning, adaptive study plans, and comprehensive practice materials."
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureCarousel />
      <HowItWorks />
      <TestimonialsSection />
      <PricingPreview />
      <CTASection />
    </>
  )
}