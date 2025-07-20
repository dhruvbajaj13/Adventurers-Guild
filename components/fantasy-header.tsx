import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { MenuIcon, Shield } from "lucide-react"

export function FantasyHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

      <div className="relative z-10 flex items-center w-full">
        <Link className="relative mr-6 flex items-center group" href="/">
          <Shield className="h-8 w-8 text-red-600 mr-3" />
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white">The Adventurers Guild</span>
            <span className="text-xs text-red-600 font-medium">Digital Pioneers</span>
          </div>
        </Link>

        <nav className="ml-auto hidden gap-8 text-sm font-medium md:flex items-center">
          <Link className="text-white hover:text-red-600 transition-colors duration-300 font-bold" href="/">
            Guild Hall
          </Link>
          <Link className="text-white hover:text-red-600 transition-colors duration-300 font-bold" href="/quests">
            Quest Board
          </Link>
          <Link className="text-white hover:text-red-600 transition-colors duration-300 font-bold" href="/join-us">
            Join Order
          </Link>
          <Link className="text-white hover:text-red-600 transition-colors duration-300 font-bold" href="/guild-roster">
            Noble Registry
          </Link>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="ml-auto md:hidden bg-black/30 border border-red-600/30 hover:bg-red-600/20"
              size="icon"
              variant="ghost"
            >
              <MenuIcon className="h-6 w-6 text-white" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-gray-900/95 backdrop-blur-xl border-l border-red-600/30">
            <div className="grid gap-6 py-6">
              <Link
                className="flex w-full items-center py-4 text-lg font-bold text-white hover:text-red-600 transition-colors duration-300"
                href="/"
              >
                Guild Hall
              </Link>
              <Link
                className="flex w-full items-center py-4 text-lg font-bold text-white hover:text-red-600 transition-colors duration-300"
                href="/quests"
              >
                Quest Board
              </Link>
              <Link
                className="flex w-full items-center py-4 text-lg font-bold text-white hover:text-red-600 transition-colors duration-300"
                href="/join-us"
              >
                Join Order
              </Link>
              <Link
                className="flex w-full items-center py-4 text-lg font-bold text-white hover:text-red-600 transition-colors duration-300"
                href="/guild-roster"
              >
                Noble Registry
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
