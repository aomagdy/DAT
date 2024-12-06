"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"

const faqItems = [
  {
    question: "How does billing work?",
    answer: "Your subscription will be billed at the beginning of each billing cycle (monthly or annually). For annual subscriptions, you'll receive a 20% discount compared to monthly billing."
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, your new rate will take effect at the next billing cycle."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual subscriptions. All payments are processed securely through our payment provider."
  },
  {
    question: "Is there a refund policy?",
    answer: "Yes, we offer a 30-day money-back guarantee for all new subscriptions. If you're not satisfied with our service, contact our support team within 30 days of your purchase for a full refund."
  },
  {
    question: "Do you offer student discounts?",
    answer: "Yes, we offer a 15% discount for verified students. Contact our support team with your valid student ID to receive your discount code."
  },
  {
    question: "What happens when my free trial ends?",
    answer: "After your 14-day free trial ends, your account will automatically switch to your selected plan. We'll send you a reminder email 3 days before the trial ends, and you can cancel anytime before being charged."
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes, you can cancel your subscription at any time from your account settings. If you cancel, you'll maintain access to your plan until the end of your current billing period."
  },
  {
    question: "Do you offer group or institutional pricing?",
    answer: "Yes, we offer special rates for dental schools and study groups of 5 or more students. Contact our sales team for custom pricing and features tailored to your needs."
  }
]

export function PricingFAQ() {
  return (
    <div className="mt-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-heading font-bold">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground mt-2">
          Have questions about billing? Find answers to common questions below.
        </p>
      </div>

      <Card className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="p-6">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>
    </div>
  )
}