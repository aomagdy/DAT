import { Brain, Laptop, Trophy } from "lucide-react"
import { Card } from "@/components/ui/card"

const benefits = [
  {
    icon: Brain,
    title: "Adaptive Learning",
    description: "Our AI-powered system creates personalized study plans that evolve with your progress, focusing on areas where you need the most improvement."
  },
  {
    icon: Laptop,
    title: "Immersive Technology",
    description: "Experience cutting-edge VR simulations and interactive 3D models that make complex concepts easier to understand and remember."
  },
  {
    icon: Trophy,
    title: "Proven Results",
    description: "Join thousands of successful students who improved their DAT scores by an average of 5 points using our comprehensive preparation system."
  }
]

export function BenefitsSection() {
  return (
    <section className="container py-24 bg-muted/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading font-bold sm:text-4xl mb-4">
          Why Choose DATGenius?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Experience the most advanced DAT preparation platform designed to maximize your success
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon
          return (
            <Card key={index} className="relative overflow-hidden p-6 transition-all hover:shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00BFA5]/5 rounded-full -mr-16 -mt-16" />
              <div className="relative">
                <div className="inline-flex items-center justify-center rounded-lg bg-[#00BFA5]/10 p-3">
                  <Icon className="h-8 w-8 text-[#00BFA5]" />
                </div>
                <h3 className="mt-4 text-xl font-heading font-bold">{benefit.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}