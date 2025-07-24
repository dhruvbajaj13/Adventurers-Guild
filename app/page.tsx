import Link from "next/link"
import { FantasyHeader } from "@/components/fantasy-header"
import { FantasyFooter } from "@/components/fantasy-footer"

export default function WaitlistPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-900 text-white">
      <FantasyHeader />

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="max-w-2xl text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Join the Adventurers Guild Waitlist
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            The Adventurers Guild is a platform for aspiring digital pioneers to embark on epic coding quests, collaborate with a legendary community, and make a real impact through open-source contributions and innovative projects. Sign up to be notified when we launch!
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600 text-white placeholder-gray-400"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-md bg-red-600 hover:bg-red-700 transition-colors font-semibold"
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </main>

      <FantasyFooter />
    </div>
  )
}