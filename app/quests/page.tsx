import { FantasyHeader } from "@/components/fantasy-header"
import { FantasyFooter } from "@/components/fantasy-footer"
import { MysticalCard } from "@/components/mystical-card"
import { Bug, SearchCode, Lock, Bot, Swords, Code, Scroll, Crown, Gem } from "lucide-react"

export default function QuestsPage() {
  const sacredQuests = [
    {
      title: "The Bug Hunters' Covenant",
      description:
        "Form elite hunting parties to track down and vanquish the most elusive software demons plaguing the digital realm. Master the ancient arts of debugging and earn the title of Bug Slayer.",
      icon: Bug,
      difficulty: "apprentice" as const,
      reward: "Bug Slayer's Medallion + 500 Guild Points",
    },
    {
      title: "Digital Archaeology Expedition",
      description:
        "Venture into the forgotten ruins of legacy codebases, decipher ancient programming languages, and uncover lost algorithms. Restore these digital artifacts to their former glory.",
      icon: SearchCode,
      difficulty: "adept" as const,
      reward: "Archaeologist's Tome + Ancient Knowledge",
    },
    {
      title: "The Cipher Sanctum Trials",
      description:
        "Enter the mystical Cipher Sanctum where cryptographic puzzles guard ancient secrets. Only those who master the art of code-breaking may claim the treasures within.",
      icon: Lock,
      difficulty: "expert" as const,
      reward: "Codebreaker's Ring + Cryptographic Mastery",
    },
    {
      title: "Familiar Summoning Rituals",
      description:
        "Learn the forbidden arts of AI summoning to create your own digital familiars. These intelligent companions will aid you in future quests and serve as loyal allies.",
      icon: Bot,
      difficulty: "master" as const,
      reward: "AI Familiar + Summoner's Staff",
    },
    {
      title: "The Grand Campaign Saga",
      description:
        "Participate in epic narrative-driven hackathons where guilds compete in legendary campaigns. Forge alliances, battle rival orders, and create solutions that will be sung by bards for generations.",
      icon: Swords,
      difficulty: "expert" as const,
      reward: "Campaign Hero's Crown + Legendary Status",
    },
    {
      title: "The Algorithm Colosseum",
      description:
        "Enter the grand arena where the greatest minds clash in algorithmic combat. Optimize your code, master data structures, and prove your worth against fellow gladiators of logic.",
      icon: Code,
      difficulty: "adept" as const,
      reward: "Gladiator's Laurel + Performance Mastery",
    },
  ]

  const futureQuests = [
    "The Quantum Mysteries Expedition",
    "Blockchain Fortress Siege",
    "The Cybersecurity Citadel Defense",
    "Neural Network Necromancy",
    "The Cloud Kingdom Conquest",
  ]

  return (
    <div className="flex flex-col min-h-[100dvh] bg-guild-background">
      <FantasyHeader />
      <main className="flex-1 py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          {/* Quest Board Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Scroll className="h-16 w-16 text-mystical-gold animate-glow" />
                <Crown className="absolute -top-2 -right-2 h-6 w-6 text-mystical-gold animate-float" />
              </div>
            </div>

            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-guild-text font-fantasy mb-6">
              <span className="bg-gradient-to-r from-mystical-gold via-mystical-purple to-mystical-gold bg-clip-text text-transparent">
                The Sacred Quest Board
              </span>
            </h1>

            <p className="mx-auto max-w-[900px] text-lg md:text-xl text-guild-muted font-mystical leading-relaxed">
              Behold the legendary quests that await brave adventurers! Each challenge has been blessed by the Guild
              Masters and offers great rewards to those who prove their worth. Choose your path wisely, young mage.
            </p>
          </div>

          {/* Sacred Quests */}
          <section className="mb-20">
            <div className="flex items-center justify-center gap-3 mb-12">
              <Gem className="h-8 w-8 text-mystical-gold animate-glow" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-guild-text font-fantasy">
                Sacred Quests of Power
              </h2>
              <Gem className="h-8 w-8 text-mystical-gold animate-glow" />
            </div>

            <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {sacredQuests.map((quest, index) => (
                <MysticalCard
                  key={index}
                  title={quest.title}
                  description={quest.description}
                  icon={quest.icon}
                  difficulty={quest.difficulty}
                  reward={quest.reward}
                />
              ))}
            </div>
          </section>

          {/* Future Quests */}
          <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-mystical-purple/5 via-transparent to-mystical-gold/5 rounded-2xl"></div>

            <div className="relative text-center bg-guild-surface/50 p-12 rounded-2xl border-2 border-mystical-gold/30 shadow-2xl">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Crown className="h-12 w-12 text-mystical-gold animate-glow" />
                  <div className="absolute inset-0 bg-mystical-gold/30 rounded-full blur-lg animate-pulse"></div>
                </div>
              </div>

              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-guild-text font-fantasy mb-6">
                Prophecies of Future Quests
              </h2>

              <p className="mx-auto max-w-[800px] text-lg md:text-xl text-guild-muted font-mystical mb-8 leading-relaxed">
                The Guild's seers have foretold of legendary quests yet to come. These epic adventures will test the
                limits of even our most accomplished archmages. Prepare yourself, for greatness awaits...
              </p>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
                {futureQuests.map((quest, index) => (
                  <div
                    key={index}
                    className="p-4 bg-mystical-purple/10 rounded-lg border border-mystical-purple/30 text-mystical-gold font-mystical hover:bg-mystical-purple/20 transition-colors duration-300"
                  >
                    ⟨ {quest} ⟩
                  </div>
                ))}
              </div>

              <p className="text-guild-muted font-mystical mt-8 italic">
                "Have a vision for a new quest? Seek audience with the Guild Masters and share your prophecy!"
              </p>
            </div>
          </section>
        </div>
      </main>
      <FantasyFooter />
    </div>
  )
}
