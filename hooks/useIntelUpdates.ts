import { FilterState, IntelUpdate } from "@/types/intel"
import { useQuery } from "@tanstack/react-query"

export function useIntelUpdates(filters: FilterState = {}) {
  return useQuery({
    queryKey: ["intel-updates", filters],
    queryFn: async () => {
      const params = new URLSearchParams()

      if (filters.search) params.append("search", filters.search)
      filters.tags?.forEach((t) => params.append("tags", t))
      filters.regions?.forEach((r) => params.append("Regions", r))
      filters.sectors?.forEach((s) => params.append("sectors", s))
      if (filters.dateFrom) params.append("dateFrom", filters.dateFrom)
      if (filters.dateTo) params.append("dateTo", filters.dateTo)

      const response = await fetch(`/api/intel?${params.toString()}`)

      if (!response.ok) {
        throw new Error("Failed to fetch intel updates")
      }

      const result = await response.json()
      return result as { data: IntelUpdate[]; total: number; timestamp: string }
    },
    staleTime: 1000 * 60 * 5,
  })
}
