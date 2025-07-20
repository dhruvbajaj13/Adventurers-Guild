import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"

export function Header() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-guildPrimary text-guildPrimary-foreground">
      <Link className="mr-6 flex items-center" href="/">
        <Image
          src="/placeholder.svg?height=40&width=40"
          width={40}
          height={40}
          alt="The Adventurers Guild Logo"
          className="mr-2"
        />
        <span className="text-xl font-bold tracking-tight">The Adventurers Guild</span>
      </Link>
      <nav className="ml-auto hidden gap-6 text-sm font-medium md:flex">
        <Link className="hover:text-guildAccentGold transition-colors" href="/">
          Home
        </Link>
        <Link className="hover:text-guildAccentGold transition-colors" href="/quests">
          Quests
        </Link>
        <Link className="hover:text-guildAccentGold transition-colors" href="/join-us">
          Join Us
        </Link>
        <Link className="hover:text-guildAccentGold transition-colors" href="/guild-roster">
          Guild Roster
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="ml-auto md:hidden" size="icon" variant="ghost">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="grid gap-2 py-6">
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/">
              Home
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/quests">
              Quests
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/join-us">
              Join Us
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/guild-roster">
              Guild Roster
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
