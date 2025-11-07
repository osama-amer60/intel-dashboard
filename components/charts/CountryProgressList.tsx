"use client"

import { useCountriesData } from "@/hooks/useCountriesData"
import { Avatar, Card, Col, Progress, Row, Space, Typography } from "antd"
import Image from "next/image"
import { DataStateCard } from "../common/DataStateCard"

const { Text } = Typography

interface SectorChartProps {
  timeRange: "week" | "month" | "year"
}

export default function CountryProgressList({ timeRange }: SectorChartProps) {
  const {
    data: countriesResponse,
    isLoading,
    isError,
  } = useCountriesData(timeRange)

  if (isLoading || isError) {
    return <DataStateCard isLoading={isLoading} isError={isError} />
  }

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
          {countriesResponse?.data?.map((country) => (
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

                    <Text style={{ color: "#FFF" }}>
                      {country?.percentage} %
                    </Text>
                  </div>
                  <Progress
                    percent={country?.percentage}
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
