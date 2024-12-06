"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const stats = {
  questionsAnswered: 1250,
  averageResponseTime: "< 1 second",
  satisfactionRate: 98,
  activeUsers: 15000
}

export function TutorStats() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-heading font-bold mb-4">AI Tutor Stats</h3>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">User Satisfaction</span>
            <span className="text-sm text-muted-foreground">{stats.satisfactionRate}%</span>
          </div>
          <Progress value={stats.satisfactionRate} className="h-2" />
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
          <div>
            <div className="text-2xl font-bold">{stats.questionsAnswered.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Questions Answered</div>
          </div>
          <div>
            <div className="text-2xl font-bold">{stats.averageResponseTime}</div>
            <div className="text-sm text-muted-foreground">Avg. Response Time</div>
          </div>
          <div className="col-span-2">
            <div className="text-2xl font-bold">{stats.activeUsers.toLocaleString()}+</div>
            <div className="text-sm text-muted-foreground">Active Users</div>
          </div>
        </div>
      </div>
    </Card>
  )
}