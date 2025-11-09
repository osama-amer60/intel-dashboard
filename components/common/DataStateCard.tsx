"use client"

import { Card, Grid, Spin, Typography } from "antd"

const { Text } = Typography
const { useBreakpoint } = Grid

interface DataStateCardProps {
  isLoading?: boolean
  isError?: boolean
  errorMessage?: string
  minHeight?: number
}

export const DataStateCard = ({
  isLoading,
  isError,
  errorMessage = "Failed to load data. Please try again.",
  minHeight,
}: DataStateCardProps) => {
  const screens = useBreakpoint()
  const isMobile = !screens.md

  const noDataFoundCardStyle: React.CSSProperties = {
    background: "transparent",
    color: "#FFF",
    border: "none",
    minHeight: minHeight ?? (isMobile ? 650 : 350),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

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
