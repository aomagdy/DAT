"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const stats = {
  totalCards: 1250,
  mastered: 450,
  learning: 650,
  new: 150,
  dailyGoal: 75,
  completed: 45
}

export function FlashcardStats() {
  const masteryPercentage = Math.round((stats.mastered / stats.totalCards) * 100)
  const dailyProgress = Math.round((stats.completed / stats.dailyGoal) * 100)

  return (
    <Card className="p-6">
      <h3 className="text-lg font-heading font-bold mb-4">Your Progress</h3>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Overall Mastery</span>
            <span className="text-sm text-muted-foreground">{masteryPercentage}%</span>
          </div>
          <Progress value={masteryPercentage} className="h-2" />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Daily Goal</span>
            <span className="text-sm text-muted-foreground">
              {stats.completed}/{stats.dailyGoal} cards
            </span>
          </div>
          <Progress value={dailyProgress} className="h-2" />
        </div>

        <div className="grid grid-cols-3 gap-4 pt-4 border-t">
          <div>
            <div className="text-2xl font-bold text-green-500">{stats.mastered}</div>
            <div className="text-sm text-muted-foreground">Mastered</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-yellow-500">{stats.learning}</div>
            <div className="text-sm text-muted-foreground">Learning</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-500">{stats.new}</div>
            <div className="text-sm text-muted-foreground">New</div>
          </div>
        </div>
      </div>
    </Card>
  )
}