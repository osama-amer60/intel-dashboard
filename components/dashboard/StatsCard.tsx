"use client"

import { Card, Select, Typography } from "antd"
import { ReactNode } from "react"

const { Title } = Typography

interface StatsCardProps {
  title: string
  children?: ReactNode
  timeOptions?: { label: string; value: string }[]
  defaultTime?: string
  onTimeChange?: (value: string) => void
}

export default function StatsCard({
  title,
  children,
  timeOptions = [
    { label: "This Year", value: "year" },
    { label: "This Month", value: "month" },
    { label: "This Week", value: "week" },
  ],
  defaultTime = "This year",
  onTimeChange,
}: StatsCardProps) {
  const cardStyle = {
    backgroundColor: "#1D2D4A",
    borderColor: "#1D2D4A",
    color: "#fff",
    borderRadius: "10px",
  }
  return (
    <Card style={cardStyle}>
      <div className="flex justify-between items-center flex-wrap mb-4">
        <Title level={3} style={{ color: "#FFF" }}>
          {title}
        </Title>

        <Select
          defaultValue={defaultTime}
          className="custom-card-select"
          placeholder="Select period"
          options={timeOptions}
          onChange={(time) => {
            onTimeChange?.(time)
          }}
          style={{ minWidth: "120px" }}
        />
      </div>

      <div className="min-h-84">{children}</div>
    </Card>
  )
}
