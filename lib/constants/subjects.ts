export const subjects = [
  {
    name: "Biology",
    topics: ["Cell Biology", "Genetics", "Anatomy", "Physiology"],
    available: true
  },
  {
    name: "General Chemistry",
    topics: ["Atomic Structure", "Chemical Bonding", "Thermodynamics"],
    available: true
  },
  {
    name: "Organic Chemistry",
    topics: ["Functional Groups", "Reactions", "Mechanisms"],
    available: true
  },
  {
    name: "Perceptual Ability",
    topics: ["Spatial Visualization", "Angle Ranking", "Pattern Folding"],
    available: true
  },
  {
    name: "Reading Comprehension",
    topics: ["Scientific Passages", "Academic Articles"],
    available: true
  },
  {
    name: "Quantitative Reasoning",
    topics: ["Problem Solving", "Data Analysis", "Mathematics"],
    available: true
  }
] as const

export type Subject = typeof subjects[number]