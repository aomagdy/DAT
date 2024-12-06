"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const categories = [
  "All Categories",
  "Study Tips",
  "Exam Guide",
  "Biology",
  "Chemistry",
  "Test Strategy",
  "Success Stories"
]

export function ResourcesFilter() {
  return (
    <div className="flex gap-4">
      <Select defaultValue="All Categories">
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}