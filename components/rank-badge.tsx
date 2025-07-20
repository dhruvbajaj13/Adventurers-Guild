import { Crown, Star, Sword, Shield, Gem } from "lucide-react"

interface RankBadgeProps {
  rank: "novice" | "apprentice" | "adept" | "expert" | "master" | "grandmaster" | "legend"
  size?: "sm" | "md" | "lg"
}

const rankConfig = {
  novice: {
    icon: Shield,
    title: "Novice Adventurer",
    color: "text-rank-novice",
    bgColor: "bg-rank-novice/20",
    borderColor: "border-rank-novice",
  },
  apprentice: {
    icon: Sword,
    title: "Apprentice Mage",
    color: "text-rank-apprentice",
    bgColor: "bg-rank-apprentice/20",
    borderColor: "border-rank-apprentice",
  },
  adept: {
    icon: Star,
    title: "Adept Scholar",
    color: "text-rank-adept",
    bgColor: "bg-rank-adept/20",
    borderColor: "border-rank-adept",
  },
  expert: {
    icon: Crown,
    title: "Expert Artificer",
    color: "text-rank-expert",
    bgColor: "bg-rank-expert/20",
    borderColor: "border-rank-expert",
  },
  master: {
    icon: Gem,
    title: "Master Enchanter",
    color: "text-rank-master",
    bgColor: "bg-rank-master/20",
    borderColor: "border-rank-master",
  },
  grandmaster: {
    icon: Crown,
    title: "Grandmaster Sage",
    color: "text-rank-grandmaster",
    bgColor: "bg-rank-grandmaster/20",
    borderColor: "border-rank-grandmaster",
  },
  legend: {
    icon: Star,
    title: "Legendary Archmage",
    color: "text-rank-legend",
    bgColor: "bg-rank-legend/20",
    borderColor: "border-rank-legend",
  },
}

export function RankBadge({ rank, size = "md" }: RankBadgeProps) {
  const config = rankConfig[rank]
  const Icon = config.icon

  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  }

  const iconSizes = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  }

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border ${config.bgColor} ${config.borderColor} ${config.color} ${sizeClasses[size]} font-mystical`}
    >
      <Icon className={iconSizes[size]} />
      <span>{config.title}</span>
    </div>
  )
}
