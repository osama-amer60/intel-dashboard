import { mockCountryData } from "@/data/mockIntel"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const timeRange = searchParams.get("timeRange") || "year"

  // Simulate different data for different time ranges
  let filteredData = [...mockCountryData]

  if (timeRange === "week") {
    filteredData = filteredData.map((country) => ({
      ...country,
      percentage: Math.round(country.percentage * 0.2), // 20% of yearly
      count: Math.round(country.percentage * 0.2),
    }))
  } else if (timeRange === "month") {
    filteredData = filteredData.map((country) => ({
      ...country,
      percentage: Math.round(country.percentage * 0.5), // 50% of yearly
      count: Math.round(country.percentage * 0.5),
    }))
  }

  return NextResponse.json({
    data: filteredData,
    total: filteredData.length,
    timeRange,
  })
}
