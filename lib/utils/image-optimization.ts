import sharp from 'sharp'
import { promises as fs } from 'fs'
import path from 'path'

interface OptimizeImageOptions {
  width?: number
  quality?: number
  format?: 'webp' | 'jpeg' | 'png'
}

export async function optimizeImage(
  inputPath: string,
  outputPath: string,
  options: OptimizeImageOptions = {}
) {
  const {
    width,
    quality = 80,
    format = 'webp'
  } = options

  try {
    const image = sharp(inputPath)
    
    if (width) {
      image.resize(width)
    }

    switch (format) {
      case 'webp':
        image.webp({ quality })
        break
      case 'jpeg':
        image.jpeg({ quality })
        break
      case 'png':
        image.png({ quality })
        break
    }

    await image.toFile(outputPath)
    return { success: true, path: outputPath }
  } catch (error) {
    console.error('Image optimization failed:', error)
    throw error
  }
}

export async function generateResponsiveImages(
  inputPath: string,
  outputDir: string,
  sizes = [640, 750, 828, 1080, 1200]
) {
  const filename = path.basename(inputPath, path.extname(inputPath))
  
  const outputs = await Promise.all(
    sizes.map(async (width) => {
      const outputPath = path.join(outputDir, `${filename}-${width}.webp`)
      await optimizeImage(inputPath, outputPath, { width, format: 'webp' })
      return { width, path: outputPath }
    })
  )

  return outputs
}