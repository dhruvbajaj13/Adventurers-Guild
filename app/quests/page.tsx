import { FantasyHeader } from "@/components/fantasy-header"
import { FantasyFooter } from "@/components/fantasy-footer"
import { MysticalCard } from "@/components/mystical-card"
import { Bug, SearchCode, Lock, Bot, Swords, Code, Scroll, Crown, Gem } from "lucide-react"

export default function QuestsPage() {
  const sacredQuests = [
    {
      title: "The Bug Bounty Brigade 🕵️",
      description:
        "Form elite 'Bounty Brigades' to hunt down and vanquish bugs in open-source projects, campus systems, and specially designed challenges. This isn't just debugging—it's reverse-engineering and strategic problem-solving under pressure with real-world impact.",
      icon: Bug,
      difficulty: "apprentice" as const,
      reward: "Bounty Hunter's Badge + Open Source Contributions",
    },
    {
      title: "Digital Archaeology Expeditions 🏛️",
      description:
        "Journey into computing's golden age by exploring ancient programming languages like Fortran, COBOL, and Assembly. Revive old programs on emulators and understand foundational algorithms that shaped our digital world.",
      icon: SearchCode,
      difficulty: "adept" as const,
      reward: "Archaeologist's Codex + Historical Computing Mastery",
    },
    {
      title: "Cipher & Codebreaker Challenge 🔐",
      description:
        "Master the arts of cryptography, steganography, and reverse engineering. Create complex ciphers for others to break, decrypt puzzles hidden in code, images, and audio files, and explore ethical penetration testing.",
      icon: Lock,
      difficulty: "expert" as const,
      reward: "Codebreaker's Seal + Cybersecurity Expertise",
    },
    {
      title: "AI Familiar & Companion Crafting 🤖",
      description:
        "Embark on a semester-long quest to develop AI companions, chatbots, or game NPCs with unique personalities and learning capabilities. Watch your digital familiars evolve and grow throughout your journey.",
      icon: Bot,
      difficulty: "master" as const,
      reward: "AI Summoner's Staff + Intelligent Companion",
    },
    {
      title: "Narrative Driven Hackathons: The Grand Campaign 📜",
      description:
        "Join continuous storylines where each hackathon contributes to epic narratives like 'Building the Interdimensional Portal' or 'Defending the Network Citadel.' Success in one mission unlocks resources for the next adventure.",
      icon: Swords,
      difficulty: "expert" as const,
      reward: "Campaign Hero's Crown + Legendary Project Portfolio",
    },
    {
      title: "The Algorithm Arena ⚔️",
      description:
        "Enter the grand colosseum where teams face off in live-coding battles. Solve algorithmic challenges with elegance, efficiency, and real-time problem-solving prowess while spectators cheer your strategic brilliance.",
      icon: Code,
      difficulty: "adept" as const,
      reward: "Arena Champion's Laurel + Algorithmic Mastery",
    },
    {
      title: "Open-Source Cartography 🗺️",
      description:
        "Navigate the vast landscape of open-source projects as digital cartographers. Become ambassadors for lesser-known tools, contribute code, improve documentation, and create tutorials for the global tech community.",
      icon: Scroll,
      difficulty: "apprentice" as const,
      reward: "Cartographer's Compass + Open Source Recognition",
    },
  ]

  const futureQuests = [
    "The Quantum Mysteries Expedition",
    "Blockchain Fortress Construction",
    "The Cybersecurity Citadel Defense",
    "Neural Network Necromancy",
    "The Cloud Kingdom Conquest",
    "Virtual Reality Realm Building",
    "IoT Device Taming Expeditions",
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
