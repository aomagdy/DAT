import { optimizeImage } from '@/lib/utils/image-optimization'
import { promises as fs } from 'fs'
import path from 'path'

const INPUT_DIR = 'public/images'
const OUTPUT_DIR = 'public/images/optimized'

async function optimizeAllImages() {
  try {
    // Get all images from input directory
    const files = await fs.readdir(INPUT_DIR)
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png)$/i.test(file)
    )

    console.log(`Found ${imageFiles.length} images to optimize...`)

    // Process each image
    for (const file of imageFiles) {
      const inputPath = path.join(INPUT_DIR, file)
      console.log(`Optimizing ${file}...`)

      try {
        await optimizeImage(inputPath, OUTPUT_DIR)
        console.log(`✓ Successfully optimized ${file}`)
      } catch (error) {
        console.error(`× Failed to optimize ${file}:`, error)
      }
    }

    console.log('\nOptimization complete!')
  } catch (error) {
    console.error('Failed to optimize images:', error)
    process.exit(1)
  }
}

optimizeAllImages()