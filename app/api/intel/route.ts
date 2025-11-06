import { mockIntelUpdates } from "@/data/mockIntel"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams

  const search = searchParams.get("search")?.toLowerCase() || ""
  const tags = searchParams.getAll("tags")
  const regions = searchParams.getAll("Regions")
  const sectors = searchParams.getAll("sectors")
  const dateFrom = searchParams.get("dateFrom")
  const dateTo = searchParams.get("dateTo")

  let filteredData = [...mockIntelUpdates]

  if (search) {
    filteredData = filteredData.filter(
      (item) =>
        item.title.toLowerCase().includes(search) ||
        item.description.toLowerCase().includes(search)
    )
  }

  if (tags.length > 0) {
    filteredData = filteredData.filter((item) =>
      item.tags.some((tag) =>
        tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
      )
    )
  }

  if (regions.length > 0) {
    filteredData = filteredData.filter((item) =>
      item.targetCountries?.some((r) =>
        regions.map((i) => i.toLowerCase()).includes(r.toLowerCase())
      )
    )
  }

  if (sectors.length > 0) {
    filteredData = filteredData.filter((item) =>
      item.targetSectors?.some((s) =>
        sectors.map((i) => i.toLowerCase()).includes(s.toLowerCase())
      )
    )
  }

  if (dateFrom) {
    filteredData = filteredData.filter(
      (item) => new Date(item.date) >= new Date(dateFrom)
    )
  }

  if (dateTo) {
    filteredData = filteredData.filter(
      (item) => new Date(item.date) <= new Date(dateTo)
    )
  }

  // Sort by date (newest first)
  filteredData.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  return NextResponse.json({
    data: filteredData,
    total: filteredData.length,
    timestamp: new Date().toISOString(),
  })
}
