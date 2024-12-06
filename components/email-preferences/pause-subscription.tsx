"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useToast } from "@/components/ui/use-toast"

export function PauseSubscription() {
  const [date, setDate] = useState<Date>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handlePause = async () => {
    if (!date) return

    setIsSubmitting(true)
    try {
      const response = await fetch("/api/email-preferences/pause", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resumeDate: date }),
      })

      if (!response.ok) throw new Error("Failed to pause subscription")

      toast({
        title: "Subscription paused",
        description: `Your emails will resume on ${format(date, "PPP")}.`,
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to pause subscription. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="p-6">
      <h3 className="font-heading font-bold mb-4">Pause Subscription</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Temporarily pause all emails until a specific date
      </p>
      
      <div className="space-y-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : "Select resume date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              disabled={(date) => date < new Date()}
            />
          </PopoverContent>
        </Popover>

        <Button 
          className="w-full" 
          onClick={handlePause}
          disabled={!date || isSubmitting}
        >
          {isSubmitting ? "Pausing..." : "Pause Emails"}
        </Button>
      </div>
    </Card>
  )
}