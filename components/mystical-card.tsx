import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface MysticalCardProps {
  title: string
  description: string
  icon: LucideIcon
  difficulty?: "novice" | "apprentice" | "adept" | "expert" | "master"
  reward?: string
}

const difficultyColors = {
  novice: "border-rank-novice text-rank-novice",
  apprentice: "border-rank-apprentice text-rank-apprentice",
  adept: "border-rank-adept text-rank-adept",
  expert: "border-rank-expert text-rank-expert",
  master: "border-rank-master text-rank-master",
}

export function MysticalCard({ title, description, icon: Icon, difficulty = "novice", reward }: MysticalCardProps) {
  return (
    <Card className="group relative bg-guild-surface border-2 border-guild-border hover:border-mystical-gold/50 transition-all duration-500 overflow-hidden">
      {/* Mystical glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-mystical-purple/5 via-transparent to-mystical-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Animated border */}
      <div className="absolute inset-0 bg-gold-shimmer bg-[length:200%_100%] opacity-0 group-hover:opacity-20 group-hover:animate-shimmer"></div>

      <CardHeader className="relative flex flex-row items-center space-x-4 pb-3">
        <div className="relative p-4 rounded-full bg-mystical-purple/20 text-mystical-gold group-hover:bg-mystical-gold/20 group-hover:text-mystical-gold group-hover:animate-glow transition-all duration-500">
          <Icon className="h-8 w-8" />
          {/* Floating particles effect */}
          <div className="absolute -top-1 -right-1 h-2 w-2 bg-mystical-gold rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float transition-all duration-500"></div>
        </div>
        <div className="flex-1">
          <CardTitle className="text-xl font-bold text-guild-text group-hover:text-mystical-gold transition-colors duration-300 font-fantasy">
            {title}
          </CardTitle>
          {difficulty && (
            <div
              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-mystical border ${difficultyColors[difficulty]} bg-current/10 mt-2`}
            >
              Difficulty: {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="relative">
        <CardDescription className="text-guild-muted mb-4 font-mystical leading-relaxed">{description}</CardDescription>

        {reward && (
          <div className="flex items-center gap-2 text-sm text-mystical-gold font-mystical">
            <span className="font-semibold">Reward:</span>
            <span>{reward}</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
