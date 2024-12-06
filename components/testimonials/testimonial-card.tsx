interface TestimonialCardProps {
  content: string
  author: string
  university: string
  image: string
}

export function TestimonialCard({ content, author, university, image }: TestimonialCardProps) {
  return (
    <div className="h-full flex flex-col justify-between p-8 bg-card rounded-xl shadow-sm">
      <blockquote className="relative mb-8">
        <div className="format dark:format-invert">
          <p className="text-lg italic text-muted-foreground leading-relaxed">
            "{content}"
          </p>
        </div>
      </blockquote>
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={author}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div className="font-semibold">{author}</div>
          <div className="text-sm text-muted-foreground">{university}</div>
        </div>
      </div>
    </div>
  )
}