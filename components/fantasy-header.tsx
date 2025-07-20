import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { MenuIcon, Crown, Shield } from "lucide-react"

export function FantasyHeader() {
  return (
    <header className="relative flex h-24 w-full shrink-0 items-center px-4 md:px-6 bg-gradient-to-r from-obsidian via-obsidian-light to-obsidian border-b-2 border-mystical-gold shadow-lg">
      {/* Mystical background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-mystical-purple/10 via-transparent to-mystical-gold/10"></div>

      <Link className="relative mr-6 flex items-center group" href="/">
        <div className="relative">
          <Shield className="h-10 w-10 mr-3 text-mystical-gold animate-glow" />
          <Crown className="absolute -top-1 -right-1 h-4 w-4 text-mystical-gold" />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-tight text-guild-text font-fantasy">The Adventurers Guild</span>
          <span className="text-xs text-mystical-gold font-mystical">⟨ Mercenary Order of Digital Mages ⟩</span>
        </div>
      </Link>

      <nav className="ml-auto hidden gap-8 text-sm font-medium md:flex items-center">
        <Link
          className="relative group px-3 py-2 text-guild-text hover:text-mystical-gold transition-all duration-300"
          href="/"
        >
          <span className="relative z-10">Guild Hall</span>
          <div className="absolute inset-0 bg-mystical-purple/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>
        <Link
          className="relative group px-3 py-2 text-guild-text hover:text-mystical-gold transition-all duration-300"
          href="/quests"
        >
          <span className="relative z-10">Quest Board</span>
          <div className="absolute inset-0 bg-mystical-purple/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>
        <Link
          className="relative group px-3 py-2 text-guild-text hover:text-mystical-gold transition-all duration-300"
          href="/join-us"
        >
          <span className="relative z-10">Join Order</span>
          <div className="absolute inset-0 bg-mystical-purple/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>
        <Link
          className="relative group px-3 py-2 text-guild-text hover:text-mystical-gold transition-all duration-300"
          href="/guild-roster"
        >
          <span className="relative z-10">Noble Registry</span>
          <div className="absolute inset-0 bg-mystical-purple/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>
      </nav>

      <Sheet>
        <SheetTrigger asChild>
          <Button
            className="ml-auto md:hidden bg-mystical-purple/20 border border-mystical-gold/30"
            size="icon"
            variant="ghost"
          >
            <MenuIcon className="h-6 w-6 text-mystical-gold" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-obsidian border-l border-mystical-gold/30">
          <div className="grid gap-4 py-6">
            <Link
              className="flex w-full items-center py-3 text-lg font-semibold text-guild-text hover:text-mystical-gold transition-colors"
              href="/"
            >
              Guild Hall
            </Link>
            <Link
              className="flex w-full items-center py-3 text-lg font-semibold text-guild-text hover:text-mystical-gold transition-colors"
              href="/quests"
            >
              Quest Board
            </Link>
            <Link
              className="flex w-full items-center py-3 text-lg font-semibold text-guild-text hover:text-mystical-gold transition-colors"
              href="/join-us"
            >
              Join Order
            </Link>
            <Link
              className="flex w-full items-center py-3 text-lg font-semibold text-guild-text hover:text-mystical-gold transition-colors"
              href="/guild-roster"
            >
              Noble Registry
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
