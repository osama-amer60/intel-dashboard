/* eslint-disable react-hooks/exhaustive-deps */
import { FilterState, IntelUpdate } from "@/types/intel"
import { useQuery } from "@tanstack/react-query"
import { useEffect } from "react"

interface PaginationParams {
  page?: number
  limit?: number
}

interface IntelUpdatesResponse {
  data: IntelUpdate[]
  total: number
  pagination: {
    currentPage: number
    totalPages: number
    pageSize: number
    totalItems: number
    hasNextPage: boolean
    hasPrevPage: boolean
    nextPage: number | null
    prevPage: number | null
  }
  timestamp: string
}

export function useIntelUpdates(
  filters: FilterState = {},
  pagination: PaginationParams = {},
  onFilterChange?: () => void
) {
  const { page = 1, limit = 10 } = pagination

  useEffect(() => {
    if (onFilterChange) {
      onFilterChange()
    }
  }, [
    filters.search,
    filters.tags,
    filters.regions,
    filters.sectors,
    filters.dateFrom,
    filters.dateTo,
  ])

  return useQuery({
    queryKey: ["intel-updates", filters, pagination],
    queryFn: async () => {
      const params = new URLSearchParams()

      if (filters.search) params.append("search", filters.search)
      filters.tags?.forEach((t) => params.append("tags", t))
      filters.regions?.forEach((r) => params.append("Regions", r))
      filters.sectors?.forEach((s) => params.append("sectors", s))
      if (filters.dateFrom) params.append("dateFrom", filters.dateFrom)
      if (filters.dateTo) params.append("dateTo", filters.dateTo)

      // Add pagination parameters
      params.append("page", page.toString())
      params.append("limit", limit.toString())

      const response = await fetch(`/api/intel?${params.toString()}`)

      if (!response.ok) {
        throw new Error("Failed to fetch intel updates")
      }

      const result = await response.json()
      return result as IntelUpdatesResponse
    },
    staleTime: 1000 * 60 * 5,
  })
}
