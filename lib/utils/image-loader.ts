export default function imageLoader({ src, width, quality }: {
  src: string
  width: number
  quality?: number
}) {
  // Handle Unsplash images
  if (src.includes('images.unsplash.com')) {
    const url = new URL(src)
    url.searchParams.set('w', width.toString())
    url.searchParams.set('q', (quality || 75).toString())
    url.searchParams.set('auto', 'format')
    return url.toString()
  }

  // Handle local images
  if (src.startsWith('/')) {
    return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`
  }

  return src
}