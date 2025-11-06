"use client"

import { Card, Col, Grid, Row, Space, Typography } from "antd"
import { ArcElement, Chart as ChartJS, Tooltip } from "chart.js"
import { Doughnut } from "react-chartjs-2"

const { Title, Text } = Typography
const { useBreakpoint } = Grid

ChartJS.register(ArcElement, Tooltip)

export default function SectorChart() {
  const screens = useBreakpoint()
  const isMobile = !screens.md // md = 768px breakpoint

  const data = {
    labels: [
      "Sector name",
      "Sector name",
      "Sector name",
      "Sector name",
      "Sector name",
      "Sector name",
    ],
    datasets: [
      {
        data: [35, 24, 20, 10, 8, 4],
        backgroundColor: [
          "#2DD4BF", // teal
          "#38BDF8", // blue
          "#A78BFA", // purple
          "#FBBF24", // yellow
          "#FB923C", // orange
          "#8B5CF6", // violet
        ],
        borderWidth: 0,
        cutout: "60%",
      },
    ],
  }

  const total = data.datasets[0].data.reduce((a, b) => a + b, 0)

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
      {/* Chart + Title */}
      <Row
        justify={isMobile ? "center" : "start"}
        align="middle"
        gutter={[32, 16]}
      >
        <Col>
          <div style={{ width: 200, height: 200 }}>
            <Doughnut
              data={data}
              options={{ plugins: { legend: { display: false } } }}
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

      {/* Sector List */}
      <Row gutter={[32, 8]} style={{ marginTop: 20 }}>
        {data.labels.map((label, i) => (
          <Col xs={12} key={i}>
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
                    backgroundColor: data.datasets[0].backgroundColor[i],
                  }}
                />
                <Text style={{ color: "#ccc" }}>{label}</Text>
              </Space>
              <Text strong style={{ color: "#FFF" }}>
                {data.datasets[0].data[i]}%
              </Text>
            </Space>
          </Col>
        ))}
      </Row>
    </Card>
  )
}
