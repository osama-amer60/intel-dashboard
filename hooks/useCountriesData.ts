import { CountryData } from "@/types/intel"
import { useQuery } from "@tanstack/react-query"

type TimeRange = "week" | "month" | "year"

export function useCountriesData(timeRange: TimeRange = "year") {
  return useQuery({
    queryKey: ["countries", timeRange],
    queryFn: async () => {
      const response = await fetch(`/api/countries?timeRange=${timeRange}`)
      if (!response.ok) {
        throw new Error("Failed to fetch countries data")
      }
      const result = await response.json()
      return result as { data: CountryData[]; total: number }
    },
    staleTime: 1000 * 60 * 5,
  })
}
