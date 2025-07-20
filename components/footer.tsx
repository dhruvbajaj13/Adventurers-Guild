import Link from "next/link"

export function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-guildPrimary text-guildPrimary-foreground">
      <p className="text-xs">&copy; {new Date().getFullYear()} The Adventurers Guild. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:text-guildAccentGold transition-colors" href="#">
          Privacy Policy
        </Link>
        <Link className="text-xs hover:text-guildAccentGold transition-colors" href="#">
          Terms of Service
        </Link>
      </nav>
    </footer>
  )
}
