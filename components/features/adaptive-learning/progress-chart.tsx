"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card } from "@/components/ui/card"

const data = [
  { week: "Week 1", score: 65 },
  { week: "Week 2", score: 68 },
  { week: "Week 3", score: 73 },
  { week: "Week 4", score: 75 },
  { week: "Week 5", score: 79 },
  { week: "Week 6", score: 82 },
  { week: "Week 7", score: 85 },
  { week: "Week 8", score: 88 },
]

export function ProgressChart() {
  return (
    <Card className="p-6">
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis domain={[60, 90]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="score"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--primary))" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}