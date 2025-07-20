import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface QuestCardProps {
  title: string
  description: string
  icon: LucideIcon
}

export function QuestCard({ title, description, icon: Icon }: QuestCardProps) {
  return (
    <Card className="group hover:shadow-lg hover:border-guildAccentGreen transition-all duration-300 ease-in-out">
      <CardHeader className="flex flex-row items-center space-x-4 pb-2">
        <div className="p-3 rounded-full bg-guildAccentGreen/10 text-guildAccentGreen group-hover:bg-guildAccentGreen group-hover:text-guildPrimary-foreground transition-colors duration-300">
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="text-xl font-bold text-guildText group-hover:text-guildAccentGreen transition-colors duration-300">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-guildText-muted">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
