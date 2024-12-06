const { execSync } = require('child_process')

// Set environment variable and run build
process.env.ANALYZE = 'true'

try {
  execSync('next build', { stdio: 'inherit' })
} catch (error) {
  console.error('Bundle analysis failed:', error)
  process.exit(1)
}