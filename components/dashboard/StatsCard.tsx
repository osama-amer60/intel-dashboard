"use client"

import { Card, Select, Typography } from "antd"
import { ReactNode } from "react"

const { Title } = Typography

interface StatsCardProps {
  title: string
  children?: ReactNode
  timeOptions?: string[]
  defaultTime?: string
  onTimeChange?: (value: string) => void
}

export default function StatsCard({
  title,
  children,
  timeOptions = ["This year", "This month", "This week"],
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
      <div className="flex justify-between items-center mb-4">
        <Title level={3} style={{ color: "#FFF" }}>
          {title}
        </Title>

        <Select
          defaultValue={defaultTime}
          className="custom-select"
          placeholder="Select period"
          options={timeOptions.map((item) => ({ label: item, value: item }))}
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
