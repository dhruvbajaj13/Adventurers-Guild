import Link from "next/link"
import { Shield, Scroll, Star } from "lucide-react"

export function FantasyFooter() {
  return (
    <footer className="relative py-16 bg-black">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Guild Emblem */}
          <div className="mb-8">
            <Shield className="w-12 h-12 text-red-600" />
          </div>

          {/* Guild Name */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">The Adventurers Guild</h3>
            <p className="text-gray-400">Forging Digital Pioneers Since 2024</p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-8 mb-12">
            <Link
              className="flex items-center gap-2 text-gray-400 hover:text-red-600 transition-colors duration-300"
              href="#"
            >
              <Scroll className="h-4 w-4" />
              Guild Charter
            </Link>
            <Link
              className="flex items-center gap-2 text-gray-400 hover:text-red-600 transition-colors duration-300"
              href="#"
            >
              <Star className="h-4 w-4" />
              Code of Honor
            </Link>
            <Link
              className="flex items-center gap-2 text-gray-400 hover:text-red-600 transition-colors duration-300"
              href="#"
            >
              <Shield className="h-4 w-4" />
              Privacy Decree
            </Link>
          </nav>

          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} The Adventurers Guild. By Royal Decree of the Digital Realm.
          </div>
        </div>
      </div>
    </footer>
  )
}
