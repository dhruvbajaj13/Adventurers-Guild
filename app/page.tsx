import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FantasyHeader } from "@/components/fantasy-header"
import { FantasyFooter } from "@/components/fantasy-footer"
import { Crown, Sword, Shield, Star, Gem, Scroll } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-guild-background">
      <FantasyHeader />
      <main className="flex-1">
        {/* Hero Section - Magic Tower Inspired */}
        <section className="relative w-full py-16 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-obsidian via-mystical-purple/20 to-obsidian overflow-hidden">
          {/* Mystical background effects */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-2 h-2 bg-mystical-gold rounded-full animate-float"></div>
            <div
              className="absolute top-40 right-20 w-1 h-1 bg-mystical-purple rounded-full animate-float"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-mystical-emerald rounded-full animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute top-60 right-1/3 w-1 h-1 bg-mystical-silver rounded-full animate-float"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>

          {/* Radial gradient overlay */}
          <div className="absolute inset-0 bg-gradient-radial from-mystical-purple/10 via-transparent to-transparent"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-8 text-center">
              {/* Guild Emblem */}
              <div className="relative mb-8">
                <div className="relative p-8 rounded-full bg-gradient-to-br from-mystical-purple/30 to-mystical-gold/30 border-4 border-mystical-gold animate-glow">
                  <Shield className="h-20 w-20 text-mystical-gold" />
                  <Crown className="absolute -top-2 -right-2 h-8 w-8 text-mystical-gold animate-float" />
                  <Sword className="absolute -bottom-1 -left-1 h-6 w-6 text-mystical-silver" />
                </div>
                <div className="absolute inset-0 bg-mystical-gold/20 rounded-full blur-xl animate-pulse"></div>
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-guild-text font-fantasy">
                  <span className="bg-gradient-to-r from-mystical-gold via-mystical-purple to-mystical-gold bg-clip-text text-transparent">
                    The Adventurers Guild
                  </span>
                </h1>

                <div className="space-y-2">
                  <p className="text-xl md:text-2xl text-mystical-gold font-mystical">
                    ⟨ Mercenary Order of Digital Mages ⟩
                  </p>
                  <p className="mx-auto max-w-[900px] text-lg md:text-xl text-guild-muted font-mystical leading-relaxed">
                    "Where Code Becomes Magic, and Programmers Ascend to Archmages"
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
                <Button
                  asChild
                  className="relative px-8 py-4 text-lg bg-gradient-to-r from-mystical-gold to-mystical-gold/80 hover:from-mystical-gold/90 hover:to-mystical-gold text-obsidian font-bold shadow-lg transition-all duration-300 transform hover:scale-105 border-2 border-mystical-gold font-fantasy"
                >
                  <Link href="/join-us">
                    <Crown className="mr-2 h-5 w-5" />
                    Join the Order
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="relative px-8 py-4 text-lg border-2 border-mystical-purple text-mystical-purple bg-mystical-purple/10 hover:bg-mystical-purple/20 shadow-lg transition-all duration-300 transform hover:scale-105 font-fantasy"
                >
                  <Link href="/quests">
                    <Scroll className="mr-2 h-5 w-5" />
                    View Quest Board
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Guild Manifesto Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-guild-background via-guild-surface to-guild-background">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-mystical-purple/20 to-mystical-gold/20 rounded-2xl blur-xl"></div>
                <Image
                  src="/placeholder.svg?height=500&width=700"
                  width={700}
                  height={500}
                  alt="The Digital Magic Tower"
                  className="relative mx-auto aspect-video overflow-hidden rounded-2xl object-cover shadow-2xl border-2 border-mystical-gold/30"
                />
              </div>

              <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Gem className="h-8 w-8 text-mystical-gold animate-glow" />
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-guild-text font-fantasy">
                      The Guild's Sacred Mission
                    </h2>
                  </div>

                  <div className="space-y-4 text-guild-muted font-mystical leading-relaxed">
                    <p className="text-lg md:text-xl">
                      In the mystical realm of digital sorcery, we are the{" "}
                      <span className="text-mystical-gold font-semibold">Adventurers Guild</span> - an ancient order of
                      code mages, algorithm alchemists, and data druids.
                    </p>

                    <p className="text-lg">
                      Our sacred halls echo with the incantations of programming languages, where novice adventurers
                      ascend through the ranks to become legendary archmages of the digital arts.
                    </p>

                    <p className="text-lg">
                      Join our noble order and embark on epic quests that will forge your skills in the fires of
                      innovation, transforming mere mortals into{" "}
                      <span className="text-mystical-purple font-semibold">Digital Legends</span>.
                    </p>
                  </div>
                </div>

                {/* Guild Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-mystical-purple/10 rounded-lg border border-mystical-purple/30">
                    <div className="text-2xl font-bold text-mystical-gold font-fantasy">50+</div>
                    <div className="text-sm text-guild-muted font-mystical">Active Mages</div>
                  </div>
                  <div className="text-center p-4 bg-mystical-gold/10 rounded-lg border border-mystical-gold/30">
                    <div className="text-2xl font-bold text-mystical-gold font-fantasy">100+</div>
                    <div className="text-sm text-guild-muted font-mystical">Quests Completed</div>
                  </div>
                  <div className="text-center p-4 bg-mystical-emerald/10 rounded-lg border border-mystical-emerald/30">
                    <div className="text-2xl font-bold text-mystical-gold font-fantasy">5</div>
                    <div className="text-sm text-guild-muted font-mystical">Legendary Archmages</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action - Royal Decree */}
        <section className="relative w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-mystical-purple via-mystical-purple/80 to-mystical-purple overflow-hidden">
          {/* Royal decree background */}
          <div className="absolute inset-0 bg-gradient-to-br from-mystical-gold/5 via-transparent to-mystical-gold/5"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center space-y-8">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Star className="h-16 w-16 text-mystical-gold animate-glow" />
                  <div className="absolute inset-0 bg-mystical-gold/30 rounded-full blur-lg animate-pulse"></div>
                </div>
              </div>

              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-guild-text font-fantasy mb-6">
                By Royal Decree of the Digital Realm
              </h2>

              <p className="mx-auto max-w-[800px] text-lg md:text-xl text-guild-muted font-mystical leading-relaxed mb-8">
                The Guild Master hereby summons all aspiring digital mages to join our noble order. Whether you seek to
                master the arcane arts of code or forge legendary artifacts of innovation, your destiny awaits within
                our hallowed halls.
              </p>

              <div className="flex flex-col gap-6 sm:flex-row justify-center sm:gap-8">
                <Button
                  asChild
                  className="relative px-10 py-4 text-lg bg-gradient-to-r from-mystical-gold to-mystical-gold/80 hover:from-mystical-gold/90 hover:to-mystical-gold text-obsidian font-bold shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-mystical-gold font-fantasy"
                >
                  <Link href="/join-us">
                    <Crown className="mr-2 h-5 w-5" />
                    Accept the Call
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="relative px-10 py-4 text-lg border-2 border-mystical-gold text-mystical-gold bg-mystical-gold/10 hover:bg-mystical-gold/20 shadow-xl transition-all duration-300 transform hover:scale-105 font-fantasy"
                >
                  <Link href="/quests">
                    <Sword className="mr-2 h-5 w-5" />
                    Explore Sacred Quests
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FantasyFooter />
    </div>
  )
}
