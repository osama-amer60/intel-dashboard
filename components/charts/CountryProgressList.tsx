"use client"

import egyptIcon from "@/public/egypt.webp"
import { Avatar, Card, Col, Progress, Row, Space, Typography } from "antd"
import Image from "next/image"
const { Text } = Typography

const countries = [
  { key: "1", name: "India", flag: egyptIcon, percent: 50 },
  { key: "2", name: "Canada", flag: egyptIcon, percent: 30 },
  { key: "3", name: "Russia", flag: egyptIcon, percent: 20 },
  { key: "4", name: "United Kingdom", flag: egyptIcon, percent: 40 },
  { key: "5", name: "Australia", flag: egyptIcon, percent: 60 },
  { key: "6", name: "India", flag: egyptIcon, percent: 50 },
  { key: "7", name: "Canada", flag: egyptIcon, percent: 30 },
  { key: "8", name: "Russia", flag: egyptIcon, percent: 20 },
  { key: "9", name: "United Kingdom", flag: egyptIcon, percent: 40 },
  { key: "10", name: "Australia", flag: egyptIcon, percent: 60 },
]

export default function CountryProgressList() {
  return (
    <Card
      style={{
        background: "transparent",
        border: "none",
        color: "white",
        padding: 0,
      }}
      styles={{
        body: {
          paddingInline: 0,
        },
      }}
    >
      <Space direction="vertical" style={{ width: "100%" }} size="large">
        <Row gutter={[40, 20]}>
          {countries.map((country) => (
            <Col span={24} md={12} key={country.key}>
              <div className="flex items-center gap-2">
                <Avatar
                  size={32}
                  src={
                    <Image
                      src={country.flag}
                      alt={country.name}
                      width={32}
                      height={32}
                    />
                  }
                />

                <div className="flex-1">
                  <div className="flex justify-between">
                    <Text style={{ color: "#FFF" }}>{country.name}</Text>

                    <Text style={{ color: "#FFF" }}>{country?.percent} %</Text>
                  </div>
                  <Progress
                    percent={country?.percent}
                    showInfo={false}
                    strokeColor="#3969CE"
                    trailColor="#343F5A"
                    size="small"
                  />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Space>
    </Card>
  )
}
