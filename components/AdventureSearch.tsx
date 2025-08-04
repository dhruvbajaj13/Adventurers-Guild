import React from "react"

interface AdventureSearchProps {
  query: string
  setQuery: (value: string) => void
}

const AdventureSearch: React.FC<AdventureSearchProps> = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search adventures"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full p-3 rounded-lg border border-border bg-card text-card-foreground placeholder:text-muted-foreground
        focus:outline-none focus:ring-2 focus:ring-primary transition-shadow duration-500 shadow-sm
        hover:shadow-md"
      aria-label="Search adventures by title or description"
    />
  )
}

export default AdventureSearch
