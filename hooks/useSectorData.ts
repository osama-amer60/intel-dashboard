import { SectorData } from "@/types/intel"
import { useQuery } from "@tanstack/react-query"

type TimeRange = "week" | "month" | "year"

export function useSectorData(timeRange: TimeRange = "year") {
  return useQuery({
    queryKey: ["sectors", timeRange],
    queryFn: async () => {
      const response = await fetch(`/api/sectors?timeRange=${timeRange}`)
      if (!response.ok) {
        throw new Error("Failed to fetch sector data")
      }
      const result = await response.json()
      return result as { data: SectorData[]; total: number }
    },
    staleTime: 1000 * 60 * 5,
  })
}
