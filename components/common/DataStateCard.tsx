"use client"

import { noDataFoundCardStyle } from "@/utils/common"
import { Card, Spin, Typography } from "antd"

const { Text } = Typography

interface DataStateCardProps {
  isLoading?: boolean
  isError?: boolean
  errorMessage?: string
}

export const DataStateCard = ({
  isLoading,
  isError,
  errorMessage = "Failed to load data. Please try again.",
}: DataStateCardProps) => {
  if (isLoading) {
    return (
      <Card style={noDataFoundCardStyle}>
        <Spin size="large" />
      </Card>
    )
  }

  if (isError) {
    return (
      <Card style={noDataFoundCardStyle}>
        <Text style={{ color: "#FFF" }}>{errorMessage}</Text>
      </Card>
    )
  }

  return null
}
