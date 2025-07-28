// To use this component, install dependencies:
// npm install next-themes lucide-react
"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "./button"
import { Sun, Moon, Laptop } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const currentTheme = theme === "system" ? systemTheme : theme

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={currentTheme === "light" ? "default" : "ghost"}
        aria-label="Switch to light mode"
        onClick={() => setTheme("light")}
      >
        <Sun className="transition-transform duration-300 scale-100" />
      </Button>
      <Button
        variant={currentTheme === "dark" ? "default" : "ghost"}
        aria-label="Switch to dark mode"
        onClick={() => setTheme("dark")}
      >
        <Moon className="transition-transform duration-300 scale-100" />
      </Button>
      <Button
        variant={theme === "system" ? "default" : "ghost"}
        aria-label="Use system theme"
        onClick={() => setTheme("system")}
      >
        <Laptop className="transition-transform duration-300 scale-100" />
      </Button>
    </div>
  )
} 