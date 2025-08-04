"use client"
import React from "react"

interface AdventureFilterProps {
  filter: { difficulty: string; category: string }
  setFilter: (value: { difficulty: string; category: string }) => void
  categories: string[]
  difficulties: string[]
}

const AdventureFilter: React.FC<AdventureFilterProps> = ({
  filter,
  setFilter,
  categories,
  difficulties,
}) => {
  return (
    <div className="flex gap-4 mt-4">
      <select
        value={filter.difficulty}
        onChange={(e) => setFilter({ ...filter, difficulty: e.target.value })}
        className="flex-1 p-3 rounded-lg border border-border bg-card text-card-foreground
          focus:outline-none focus:ring-2 focus:ring-primary transition-shadow duration-500 shadow-sm
          hover:shadow-md"
        aria-label="Filter by difficulty"
      >
        <option value="">All Difficulties</option>
        {difficulties.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>
      <select
        value={filter.category}
        onChange={(e) => setFilter({ ...filter, category: e.target.value })}
        className="flex-1 p-3 rounded-lg border border-border bg-card text-card-foreground
          focus:outline-none focus:ring-2 focus:ring-primary transition-shadow duration-500 shadow-sm
          hover:shadow-md"
        aria-label="Filter by category"
      >
        <option value="">All Categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  )
}

export default AdventureFilter
