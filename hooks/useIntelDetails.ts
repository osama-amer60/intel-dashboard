import { IntelUpdate } from "@/types/intel"
import { useQuery } from "@tanstack/react-query"

interface IntelDetailsResponse {
  data: IntelUpdate | null
  timestamp: string
}

export function useIntelDetails(id?: string) {
  return useQuery({
    queryKey: ["intel-details", id],
    queryFn: async () => {
      if (!id) throw new Error("Intel ID is required")

      const response = await fetch(`/api/intel/${id}`)

      if (!response.ok) {
        throw new Error("Failed to fetch intel details")
      }

      const result = await response.json()
      return result as IntelDetailsResponse
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  })
}
