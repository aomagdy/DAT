"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function PreferencesStats() {
  return (
    <Card className="p-6">
      <h3 className="font-heading font-bold mb-6">Email Analytics</h3>
      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Open Rate</span>
            <span className="text-sm text-muted-foreground">85%</span>
          </div>
          <Progress value={85} className="h-2" />
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Click Rate</span>
            <span className="text-sm text-muted-foreground">42%</span>
          </div>
          <Progress value={42} className="h-2" />
        </div>
        <div className="pt-4 border-t">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-2xl font-bold">24</div>
              <div className="text-sm text-muted-foreground">Emails Received</div>
            </div>
            <div>
              <div className="text-2xl font-bold">6</div>
              <div className="text-sm text-muted-foreground">Links Clicked</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}