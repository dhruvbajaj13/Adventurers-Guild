import { FantasyHeader } from "@/components/fantasy-header"
import { FantasyFooter } from "@/components/fantasy-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Crown, Scroll, Sword, Shield, Users, Gem, Star, BookOpen } from "lucide-react"

export default function JoinUsPage() {
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
                Join the Noble Order
              </span>
            </h1>

            <p className="mx-auto max-w-[900px] text-lg md:text-xl text-guild-muted font-mystical leading-relaxed">
              The Guild Master extends a formal invitation to join our prestigious order of digital mages. Ascend from a
              humble novice to a legendary archmage through dedication, skill, and honor.
            </p>
          </div>

          {/* Benefits of Joining */}
          <section className="mb-20">
            <div className="flex items-center justify-center gap-3 mb-12">
              <Gem className="h-8 w-8 text-mystical-gold animate-glow" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-guild-text font-fantasy">
                Sacred Privileges of Membership
              </h2>
              <Gem className="h-8 w-8 text-mystical-gold animate-glow" />
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="group relative p-8 bg-guild-surface rounded-2xl border-2 border-guild-border hover:border-mystical-gold/50 transition-all duration-500 text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-mystical-purple/5 via-transparent to-mystical-gold/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-mystical-purple/20 text-mystical-gold group-hover:animate-glow">
                      <BookOpen className="h-10 w-10" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-guild-text font-fantasy mb-4">Epic Quest Mastery</h3>
                  <p className="text-guild-muted font-mystical leading-relaxed">
                    Embark on legendary quests from Bug Bounty Brigades to AI Companion Crafting. Each adventure builds
                    real-world skills while having genuine fun in the process.
                  </p>
                </div>
              </div>

              <div className="group relative p-8 bg-guild-surface rounded-2xl border-2 border-guild-border hover:border-mystical-gold/50 transition-all duration-500 text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-mystical-gold/5 via-transparent to-mystical-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-mystical-gold/20 text-mystical-gold group-hover:animate-glow">
                      <Users className="h-10 w-10" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-guild-text font-fantasy mb-4">Digital Pioneer Community</h3>
                  <p className="text-guild-muted font-mystical leading-relaxed">
                    Join a brotherhood of digital architects and innovators. Form Bounty Brigades, compete in Algorithm
                    Arenas, and collaborate on Grand Campaign narratives.
                  </p>
                </div>
              </div>

              <div className="group relative p-8 bg-guild-surface rounded-2xl border-2 border-guild-border hover:border-mystical-gold/50 transition-all duration-500 text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-mystical-emerald/5 via-transparent to-mystical-gold/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-mystical-emerald/20 text-mystical-emerald group-hover:animate-glow">
                      <Sword className="h-10 w-10" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-guild-text font-fantasy mb-4">Real-World Impact</h3>
                  <p className="text-guild-muted font-mystical leading-relaxed">
                    Contribute to open-source projects, fix real bugs in campus systems, and build AI companions that
                    evolve. Your code makes a difference beyond the classroom.
                  </p>
                </div>
              </div>

              <div className="group relative p-8 bg-guild-surface rounded-2xl border-2 border-guild-border hover:border-mystical-gold/50 transition-all duration-500 text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-mystical-crimson/5 via-transparent to-mystical-gold/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-mystical-crimson/20 text-mystical-crimson group-hover:animate-glow">
                      <Star className="h-10 w-10" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-guild-text font-fantasy mb-4">Career Transformation</h3>
                  <p className="text-guild-muted font-mystical leading-relaxed">
                    Prepare for a career that's less about a desk job and more about a lifelong journey of discovery and
                    mastery. Become a true digital pioneer.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Initiation Process */}
          <section className="mb-20">
            <div className="relative bg-guild-surface/50 p-12 rounded-2xl border-2 border-mystical-purple/30 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-mystical-purple/5 via-transparent to-mystical-gold/5 rounded-2xl"></div>

              <div className="relative">
                <div className="flex items-center justify-center gap-3 mb-12">
                  <Scroll className="h-8 w-8 text-mystical-gold animate-glow" />
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-guild-text font-fantasy">
                    The Sacred Initiation Rites
                  </h2>
                  <Scroll className="h-8 w-8 text-mystical-gold animate-glow" />
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                  <div className="text-center">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-mystical-gold to-mystical-gold/80 text-obsidian text-2xl font-bold font-fantasy border-4 border-mystical-gold animate-glow">
                          I
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-guild-text font-fantasy mb-4">Attend the Gathering</h3>
                    <p className="text-guild-muted font-mystical leading-relaxed">
                      Join our weekly Guild Assembly in the Great Hall, where masters share ancient wisdom and novices
                      are welcomed into the fold.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-mystical-purple to-mystical-purple/80 text-guild-text text-2xl font-bold font-fantasy border-4 border-mystical-purple animate-glow">
                          II
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-guild-text font-fantasy mb-4">Take the Sacred Oath</h3>
                    <p className="text-guild-muted font-mystical leading-relaxed">
                      Pledge your dedication to the Guild's noble cause by completing the mystical enrollment scroll
                      with your true name and intentions.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-mystical-emerald to-mystical-emerald/80 text-obsidian text-2xl font-bold font-fantasy border-4 border-mystical-emerald animate-glow">
                          III
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-guild-text font-fantasy mb-4">Begin Your Journey</h3>
                    <p className="text-guild-muted font-mystical leading-relaxed">
                      Receive your novice rank and embark on your first quest! The path to legendary status begins with
                      a single step.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="max-w-3xl mx-auto">
            <div className="relative bg-guild-surface p-12 rounded-2xl border-2 border-mystical-gold/30 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-mystical-gold/5 via-transparent to-mystical-purple/5 rounded-2xl"></div>

              <div className="relative">
                <div className="text-center mb-10">
                  <div className="flex justify-center mb-6">
                    <Shield className="h-12 w-12 text-mystical-gold animate-glow" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-guild-text font-fantasy mb-4">
                    Seek Audience with the Guild Masters
                  </h2>
                  <p className="text-guild-muted font-mystical">
                    Send your inquiry through this enchanted communication portal
                  </p>
                </div>

                <form className="grid gap-8">
                  <div className="grid gap-3">
                    <label htmlFor="name" className="text-guild-text font-mystical font-semibold">
                      Your Noble Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Enter your true name, brave adventurer"
                      type="text"
                      className="bg-guild-background/50 border-2 border-guild-border focus:border-mystical-gold text-guild-text placeholder:text-guild-muted font-mystical"
                    />
                  </div>

                  <div className="grid gap-3">
                    <label htmlFor="email" className="text-guild-text font-mystical font-semibold">
                      Mystical Communication Rune (Email)
                    </label>
                    <Input
                      id="email"
                      placeholder="your.rune@digital.realm"
                      type="email"
                      className="bg-guild-background/50 border-2 border-guild-border focus:border-mystical-gold text-guild-text placeholder:text-guild-muted font-mystical"
                    />
                  </div>

                  <div className="grid gap-3">
                    <label htmlFor="subject" className="text-guild-text font-mystical font-semibold">
                      Purpose of Audience
                    </label>
                    <Input
                      id="subject"
                      placeholder="State your business with the Guild"
                      type="text"
                      className="bg-guild-background/50 border-2 border-guild-border focus:border-mystical-gold text-guild-text placeholder:text-guild-muted font-mystical"
                    />
                  </div>

                  <div className="grid gap-3">
                    <label htmlFor="message" className="text-guild-text font-mystical font-semibold">
                      Your Message to the Council
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Speak your mind, and let your words carry the weight of your intentions..."
                      rows={6}
                      className="bg-guild-background/50 border-2 border-guild-border focus:border-mystical-gold text-guild-text placeholder:text-guild-muted font-mystical resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-mystical-gold to-mystical-gold/80 hover:from-mystical-gold/90 hover:to-mystical-gold text-obsidian py-4 text-lg font-bold transition-all duration-300 transform hover:scale-105 border-2 border-mystical-gold font-fantasy shadow-xl"
                  >
                    <Scroll className="mr-2 h-5 w-5" />
                    Send Mystical Message
                  </Button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>
      <FantasyFooter />
    </div>
  )
}
