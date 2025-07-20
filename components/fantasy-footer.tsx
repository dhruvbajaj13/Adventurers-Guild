import Link from "next/link"
import { Crown, Scroll } from "lucide-react"

export function FantasyFooter() {
  return (
    <footer className="relative flex flex-col gap-2 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6 border-t-2 border-mystical-gold/30 bg-gradient-to-r from-obsidian via-obsidian-light to-obsidian">
      <div className="absolute inset-0 bg-gradient-to-r from-mystical-purple/5 via-transparent to-mystical-gold/5"></div>

      <div className="relative flex items-center gap-2">
        <Crown className="h-4 w-4 text-mystical-gold" />
        <p className="text-sm text-guild-muted font-mystical">
          &copy; {new Date().getFullYear()} The Adventurers Guild. By Royal Decree of the Digital Realm.
        </p>
      </div>

      <nav className="relative sm:ml-auto flex gap-6">
        <Link
          className="flex items-center gap-1 text-sm text-guild-muted hover:text-mystical-gold transition-colors"
          href="#"
        >
          <Scroll className="h-3 w-3" />
          Guild Charter
        </Link>
        <Link
          className="flex items-center gap-1 text-sm text-guild-muted hover:text-mystical-gold transition-colors"
          href="#"
        >
          <Scroll className="h-3 w-3" />
          Code of Honor
        </Link>
      </nav>
    </footer>
  )
}
