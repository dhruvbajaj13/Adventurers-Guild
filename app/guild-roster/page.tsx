import { FantasyHeader } from "@/components/fantasy-header"
import { Crown, Star, Gem } from "lucide-react"

type Rank = "grandmaster" | "master" | "expert" | "adept" | "apprentice" | "novice"

export default function GuildRosterPage() {
  const guildMembers: {
    name: string
    title: string
    rank: Rank
    specialization: string
    avatar: string
    achievements: string[]
  }[] = [
    {
      name: "Archmage Elara Nightweaver",
      title: "Grand Master of Full-Stack Sorcery",
      rank: "grandmaster",
      specialization: "Supreme Enchantress of Web Realms",
      avatar: "/placeholder.svg?height=120&width=120",
      achievements: ["Dragon Slayer", "Code Whisperer", "Guild Founder"],
    },
    {
      name: "Lord Kael Algorithmus",
      title: "Master of Data Structures",
      rank: "master",
      specialization: "Keeper of Ancient Algorithms",
      avatar: "/placeholder.svg?height=120&width=120",
      achievements: ["Algorithm Sage", "Performance Oracle"],
    },
    {
      name: "Lady Lyra Cybershield",
      title: "Guardian of Digital Fortresses",
      rank: "expert",
      specialization: "Protector of Sacred Networks",
      avatar: "/placeholder.svg?height=120&width=120",
      achievements: ["Fortress Defender", "Security Sentinel"],
    },
    {
      name: "Sir Roric Mindforge",
      title: "Artificer of Thinking Machines",
      rank: "expert",
      specialization: "Creator of AI Familiars",
      avatar: "/placeholder.svg?height=120&width=120",
      achievements: ["AI Summoner", "Neural Architect"],
    },
    {
      name: "Enchantress Seraphina Pixelweave",
      title: "Mistress of Visual Spells",
      rank: "adept",
      specialization: "Weaver of User Interfaces",
      avatar: "/placeholder.svg?height=120&width=120",
      achievements: ["UI Artisan", "Design Virtuoso"],
    },
    {
      name: "Baron Thorne Datakeeper",
      title: "Warden of Information Vaults",
      rank: "adept",
      specialization: "Guardian of Sacred Databases",
      avatar: "/placeholder.svg?height=120&width=120",
      achievements: ["Data Warden", "Query Master"],
    },
    {
      name: "Duchess Zoe Cloudwalker",
      title: "Navigator of Sky Realms",
      rank: "apprentice",
      specialization: "Mistress of Cloud Domains",
      avatar: "/placeholder.svg?height=120&width=120",
      achievements: ["Cloud Conjurer", "DevOps Druid"],
    },
    {
      name: "Count Finn Bugbane",
      title: "Hunter of Digital Demons",
      rank: "apprentice",
      specialization: "Slayer of Code Corruption",
      avatar: "/placeholder.svg?height=120&width=120",
      achievements: ["Bug Hunter", "Quality Guardian"],
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
                <div className="text-3xl font-bold text-mystical-emerald font-fantasy">3</div>
                <div className="text-sm text-guild-muted font-mystical">Expert</div>
              </div>
              <div className="text-center p-6 bg-guild-surface rounded-xl border-2 border-mystical-blue/30 shadow-lg">
                <Crown className="h-8 w-8 text-mystical-blue mx-auto mb-3" />
                <div className="text-3xl font-bold text-mystical-blue font-fantasy">2</div>
                <div className="text-sm text-guild-muted font-mystical">Adept</div>
              </div>
            </div>
          </section>

          {/* Guild Members Grid */}
          <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {sortedMembers.map((member, index) => (
                <div key={index} className="bg-guild-surface rounded-xl border-2 border-mystical-gold/30 shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                  <div className="relative h-48 w-full">
                    <img
                      alt={`${member.name}'s avatar`}
                      className="object-cover w-full h-full"
                      src={member.avatar}
                      style={{
                        aspectRatio: "400/300",
                        objectFit: "cover",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-guild-surface/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-bold text-guild-text font-fantasy">{member.name}</h3>
                      <p className="text-mystical-gold text-sm font-mystical">{member.title}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        {member.rank === "grandmaster" && <Crown className="h-5 w-5 text-mystical-gold mr-2" />}
                        {member.rank === "master" && <Gem className="h-5 w-5 text-mystical-purple mr-2" />}
                        {member.rank === "expert" && <Star className="h-5 w-5 text-mystical-emerald mr-2" />}
                        {member.rank === "adept" && <Crown className="h-5 w-5 text-mystical-blue mr-2" />}
                        {member.rank === "apprentice" && <Star className="h-5 w-5 text-mystical-silver mr-2" />}
                        {member.rank === "novice" && <Gem className="h-5 w-5 text-mystical-bronze mr-2" />}
                        <span className={`text-sm font-bold font-mystical capitalize ${
                          member.rank === "grandmaster" ? "text-mystical-gold" :
                          member.rank === "master" ? "text-mystical-purple" :
                          member.rank === "expert" ? "text-mystical-emerald" :
                          member.rank === "adept" ? "text-mystical-blue" :
                          member.rank === "apprentice" ? "text-mystical-silver" :
                          "text-mystical-bronze"
                        }`}>{member.rank}</span>
                      </div>
                      <div className="text-sm text-guild-muted font-mystical">{member.specialization}</div>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-guild-text font-bold mb-2 font-fantasy">Achievements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.achievements.map((achievement, achIndex) => (
                          <span key={achIndex} className="bg-guild-button-secondary text-guild-button-secondary-foreground text-xs px-3 py-1 rounded-full font-mystical">
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <footer className="py-8 text-center text-guild-muted text-sm font-mystical">
        © 2024 Advanturers Guild. All rights reserved.
      </footer>
    </div>
  )
}