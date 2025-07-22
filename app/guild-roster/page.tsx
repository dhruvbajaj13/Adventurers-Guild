import { FantasyHeader } from "@/components/fantasy-header"
import { Crown, Star, Gem } from "lucide-react"

export default function GuildRosterPage() {
  const guildMembers = [
    {
      name: "Archmage Elara Nightweaver",
      title: "Grand Master of Full-Stack Sorcery",
      rank: "grandmaster" as const,
      specialization: "Supreme Enchantress of Web Realms",
      avatar: "/placeholder.svg?height=120&width=120",
      achievements: ["Dragon Slayer", "Code Whisperer", "Guild Founder"]
    },
    {
      name: "Lord Kael Algorithmus",
      title: "Master of Data Structures",
      rank: "master" as const,
      specialization: "Keeper of Ancient Algorithms",
      avatar: "/placeholder.svg?height=120&width=120",
      achievements: ["Algorithm Sage", "Performance Oracle"]
    },
    {
      name: "Lady Lyra Cybershield",
      title: "Guardian of Digital Fortresses",
      rank: "expert" as const,
      specialization: "Protector of Sacred Networks",
      avatar: "/placeholder.svg?height=120&width=120",
      achievements: ["Fortress Defender", "Security Sentinel"]
    },
    {
      name: "Sir Roric Mindforge",
      title: "Artificer of Thinking Machines",
      rank: "expert" as const,
      specialization: "Creator of AI Familiars",
      avatar: "/placeholder.svg?height=120&width=120",
      achievements: ["AI Summoner", "Neural Architect"]
    },
    {
      name: "Enchantress Seraphina Pixelweave",
      title: "Mistress of Visual Spells",
      rank: "adept" as const,
      specialization: "Weaver of User Interfaces",
      avatar: "/placeholder.svg?height=120&width=120",
      achievements: ["UI Artisan", "Design Virtuoso"]
    },
    {
      name: "Baron Thorne Datakeeper",
      title: "Warden of Information Vaults",
      rank: "adept" as const,
      specialization: "Guardian of Sacred Databases",
      avatar: "/placeholder.svg?height=120&width=120",
      achievements: ["Data Warden", "Query Master"]
    },
    {
      name: "Duchess Zoe Cloudwalker",
      title: "Navigator of Sky Realms",
      rank: "apprentice" as const,
      specialization: "Mistress of Cloud Domains",
      avatar: "/placeholder.svg?height=120&width=120",
      achievements: ["Cloud Conjurer", "DevOps Druid"]
    },
    {
      name: "Count Finn Bugbane",
      title: "Hunter of Digital Demons",
      rank: "apprentice" as const,
      specialization: "Slayer of Code Corruption",
      avatar: "/placeholder.svg?height=120&width=120",
      achievements: ["Bug Hunter", "Quality Guardian"]
    },
  ]

  const rankOrder = ["grandmaster", "master", "expert", "adept", "apprentice", "novice"]
  const sortedMembers = guildMembers.sort((a, b) => 
    rankOrder.indexOf(a.rank) - rankOrder.indexOf(b.rank)
  )

  return (
    <div className="flex flex-col min-h-[100dvh] bg-guild-background">
      <FantasyHeader />
      <main className="flex-1 py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Crown className="h-16 w-16 text-mystical-gold animate-glow" />
                <div className="absolute inset-0 bg-mystical-gold/30 rounded-full blur-lg animate-pulse"></div>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-guild-text font-fantasy mb-6">
              <span className="bg-gradient-to-r from-mystical-gold via-mystical-purple to-mystical-gold bg-clip-text text-transparent">
                The Noble Registry
              </span>
            </h1>
            
            <p className="mx-auto max-w-[900px] text-lg md:text-xl text-guild-muted font-mystical leading-relaxed">
              Behold the distinguished members of our sacred order, each having proven their worth through trials of code and quests of innovation. 
              From humble novices to legendary archmages, all are united in the pursuit of digital mastery.
            </p>
          </div>

          {/* Guild Statistics */}
          <section className="mb-16">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center p-6 bg-guild-surface rounded-xl border-2 border-mystical-gold/30 shadow-lg">
                <Crown className="h-8 w-8 text-mystical-gold mx-auto mb-3 animate-glow" />
                <div className="text-3xl font-bold text-mystical-gold font-fantasy">1</div>
                <div className="text-sm text-guild-muted font-mystical">Grandmaster</div>
              </div>
              <div className="text-center p-6 bg-guild-surface rounded-xl border-2 border-mystical-purple/30 shadow-lg">
                <Gem className="h-8 w-8 text-mystical-purple mx-auto mb-3" />
                <div className="text-3xl font-bold text-mystical-purple font-fantasy">1</div>
                <div className="text-sm text-guild-muted font-mystical">Master</div>
              </div>
              <div className="text-center p-6 bg-guild-surface rounded-xl border-2 border-mystical-emerald/30 shadow-lg">
                <Star className="h-8 w-8 text-mystical-emerald mx-auto mb-3" />
                <div className="text-3xl font-bold text-mystical-emerald font-fantasy">3
