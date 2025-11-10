import { mockIntelUpdates } from "@/data/mockIntel"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params

  const intel = mockIntelUpdates.find((item) => item.id === id)

  if (!intel) {
    return NextResponse.json({ error: "Not found" }, { status: 404 })
  }

  return NextResponse.json({
    data: intel,
    timestamp: new Date().toISOString(),
  })
}
