import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  rating: number
}

export default function TestimonialCard({ quote, author, rating }: TestimonialCardProps) {
  return (
    <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
      <CardContent className="pt-6">
        <div className="mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`inline-block h-5 w-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
            />
          ))}
        </div>
        <blockquote className="text-gray-600 italic">"{quote}"</blockquote>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <p className="font-medium">{author}</p>
      </CardFooter>
    </Card>
  )
}
