import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface DoctorCardProps {
  name: string
  specialty: string
  description: string
  imageSrc: string
}

export default function DoctorCard({ name, specialty, description, imageSrc }: DoctorCardProps) {
  return (
    <Card className="overflow-hidden border-2 border-blue-100 hover:border-blue-300 transition-colors">
      <div className="aspect-[3/4] relative">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-blue-700 font-medium">{specialty}</p>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href={`/doctors/${name.toLowerCase().replace(/\s+/g, "-")}`}>View Profile</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
