import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FantasyHeader } from "@/components/fantasy-header"
import { FantasyFooter } from "@/components/fantasy-footer"
import { Crown, Scroll, Users, Code, Shield, ArrowDown } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <FantasyHeader />

      {/* Hero Section - Hanwag Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Full-screen Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/hero-coding-bg.png')`,
            }}
          />
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-4 md:px-6 max-w-7xl mx-auto">
          {/* Guild Logo - Top Left */}
          <div className="absolute top-8 left-8 hidden md:block">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-red-600" />
              <div className="text-left">
                <div className="text-sm font-bold text-white">THE</div>
                <div className="text-xs text-red-600 font-medium">ADVENTURERS</div>
              </div>
            </div>
          </div>

          {/* Anniversary Badge - Top Right */}
          <div className="absolute top-8 right-8 hidden md:block">
            <div className="relative">
              <div className="w-20 h-20 rounded-full border-4 border-red-600 bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xs font-bold text-red-600">EST</div>
                  <div className="text-lg font-black text-white">2025</div>
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="bg-red-600 text-white text-xs px-2 py-1 rounded font-bold">GUILD</div>
              </div>
            </div>
          </div>

          {/* Main Title with Texture Effect */}
          <div className="mb-8">
            <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-black tracking-tight leading-none mb-4">
              <span
                className="block text-transparent bg-clip-text relative"
                style={{
                  backgroundImage: `linear-gradient(45deg, #dc2626, #b91c1c, #991b1b)`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                }}
              >
                ADVENTURERS
              </span>
              <span
                className="block text-transparent bg-clip-text relative -mt-4"
                style={{
                  backgroundImage: `linear-gradient(45deg, #dc2626, #b91c1c, #991b1b)`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                }}
              >
                GUILD
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="mb-16">
            <p className="text-2xl md:text-4xl font-bold text-white tracking-wider mb-4">FORGING DIGITAL PIONEERS</p>
            <div className="w-32 h-1 bg-red-600 mx-auto"></div>
          </div>

          {/* Circular Timeline Element */}
          <div className="mb-16 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-4 border-red-600 bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="text-sm font-bold text-red-600">EST</div>
                  <div className="text-3xl font-black text-white">2025</div>
                  <ArrowDown className="w-4 h-4 text-red-600 mx-auto mt-1" />
                  <div className="text-3xl font-black text-white">∞</div>
                </div>
              </div>
            </div>
          </div>

          {/* Code Sword Illustration */}
          <div className="mb-16 flex justify-center">
            <div className="relative">
              <div className="text-6xl md:text-8xl text-red-600/30 font-mono transform rotate-45">{"{ }"}</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 h-24 bg-red-600"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Code Snippets */}
        <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 text-white/20 font-mono text-sm">
            <div className="bg-black/30 backdrop-blur-sm border border-red-600/20 rounded px-3 py-2">
              const guild = "legendary";
            </div>
          </div>
          <div className="absolute top-1/3 right-16 text-white/20 font-mono text-sm">
            <div className="bg-black/30 backdrop-blur-sm border border-red-600/20 rounded px-3 py-2">
              function adventure() {"{"}
            </div>
          </div>
          <div className="absolute bottom-1/3 left-1/4 text-white/20 font-mono text-sm">
            <div className="bg-black/30 backdrop-blur-sm border border-red-600/20 rounded px-3 py-2">
              return mastery;
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tight">
                WHERE CODE BECOMES
                <span className="block text-red-600">LEGEND</span>
              </h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We don't just teach programming. We forge digital pioneers who shape the future through epic quests,
                legendary challenges, and real-world impact.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Epic Quests</h3>
                <p className="text-gray-600 leading-relaxed">
                  From Bug Bounty Brigades to AI Companion Crafting - each adventure builds real-world skills.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Legendary Community</h3>
                <p className="text-gray-600 leading-relaxed">
                  Join a brotherhood of digital architects. Form teams, compete, and collaborate on grand campaigns.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Real Impact</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your code makes a difference. Contribute to open-source, fix real bugs, build AI that evolves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
              YOUR DIGITAL
              <span className="block text-red-600">ADVENTURE AWAITS</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Transform from novice to legendary digital archmage. Join our noble order today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="px-12 py-6 text-xl font-bold bg-red-600 hover:bg-red-700 text-white border-0 shadow-xl"
              >
                <Link href="/join-us">
                  <Crown className="mr-3 h-6 w-6" />
                  Join the Guild
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-12 py-6 text-xl border-2 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              >
                <Link href="/quests">
                  <Scroll className="mr-3 h-6 w-6" />
                  Explore Quests
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FantasyFooter />
    </div>
  )
}
