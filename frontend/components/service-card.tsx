import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import * as LucideIcons from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  // Dynamically get the icon from Lucide
  const Icon = LucideIcons[icon as keyof typeof LucideIcons] as LucideIcon

  return (
    <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
      <CardHeader className="pb-2">
        {Icon && <Icon className="h-12 w-12 text-blue-700" />}
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
