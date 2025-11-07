"use client"

import { useSectorData } from "@/hooks/useSectorData"
import { Card, Col, Grid, Row, Space, Typography } from "antd"
import { ArcElement, Chart as ChartJS, Tooltip } from "chart.js"
import { Doughnut } from "react-chartjs-2"
import { DataStateCard } from "../common/DataStateCard"

const { Title, Text } = Typography
const { useBreakpoint } = Grid

ChartJS.register(ArcElement, Tooltip)

interface SectorChartProps {
  timeRange: "week" | "month" | "year"
}

const COLORS = [
  "#2DD4BF",
  "#38BDF8",
  "#A78BFA",
  "#FBBF24",
  "#FB923C",
  "#8B5CF6",
]

export default function SectorChart({ timeRange }: SectorChartProps) {
  const screens = useBreakpoint()
  const isMobile = !screens.md

  const { data: sectorResponse, isLoading, isError } = useSectorData(timeRange)

  const data = {
    labels: sectorResponse?.data.map((sector) => sector.name) || [],
    datasets: [
      {
        data: sectorResponse?.data.map((sector) => sector.percentage) || [],
        backgroundColor: COLORS,
        borderWidth: 0,
        cutout: "60%",
      },
    ],
  }

  const total =
    sectorResponse?.data.reduce((sum, sector) => sum + sector.count, 0) || 0

  if (isLoading || isError) {
    return <DataStateCard isLoading={isLoading} isError={isError} />
  }

  return (
    <Card
      style={{
        background: "transparent",
        color: "#FFF",
        boxShadow: "none",
        border: "none",
      }}
      styles={{
        body: {
          paddingInline: 0,
        },
      }}
    >
      <Row
        justify={isMobile ? "center" : "start"}
        align="middle"
        gutter={[32, 16]}
      >
        <Col>
          <div style={{ width: 200, height: 200 }}>
            <Doughnut
              data={data}
              options={{
                plugins: {
                  legend: { display: false },
                  tooltip: {
                    callbacks: {
                      label: function (context) {
                        const label = context.label || ""
                        const value = context.parsed || 0
                        const sector = sectorResponse?.data[context.dataIndex]
                        return `${label}: ${value}% (${
                          sector?.count || 0
                        } threats)`
                      },
                    },
                  },
                },
              }}
            />
          </div>
        </Col>

        <Col>
          <Title level={1} style={{ color: "#FFF", marginBottom: 0 }}>
            {total} <span className="text-2xl">sectors</span>
          </Title>
          <Text style={{ color: "#2c4d95" }}>Total sectors</Text>
        </Col>
      </Row>

      <Row gutter={[32, 8]} style={{ marginTop: 20 }}>
        {sectorResponse?.data.map((sector, i) => (
          <Col xs={24} sm={12} key={sector.name}>
            <Space
              align="center"
              style={{ justifyContent: "space-between", width: "100%" }}
            >
              <Space align="center">
                <span
                  style={{
                    display: "inline-block",
                    width: 4,
                    height: 10,
                    borderRadius: 4,
                    backgroundColor: COLORS[i % COLORS.length],
                  }}
                />
                <Text style={{ color: "#ccc" }}>{sector.name}</Text>
              </Space>
              <Text strong style={{ color: "#FFF" }}>
                {sector.percentage}%
              </Text>
            </Space>
          </Col>
        ))}
      </Row>
    </Card>
  )
}
