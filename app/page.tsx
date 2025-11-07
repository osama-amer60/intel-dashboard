"use client"

import CountryProgressList from "@/components/charts/CountryProgressList"
import SectorChart from "@/components/charts/SectorChart"
import StatsCard from "@/components/dashboard/StatsCard"
import { Col, Row } from "antd"
import { useState } from "react"

type TimeRange = "year" | "month" | "week"

export default function Home() {
  const [sectorTimeRange, setSectorTimeRange] = useState<TimeRange>("year")

  return (
    <div className="p-5 lg:p-10">
      <Row gutter={[16, 16]}>
        <Col span={24} lg={12}>
          <StatsCard
            title="Top Targeted Sectors"
            onTimeChange={(val) => setSectorTimeRange(val as TimeRange)}
          >
            <SectorChart timeRange={sectorTimeRange} />
          </StatsCard>
        </Col>
        <Col span={24} lg={12}>
          <StatsCard title="Top Targeted Countries">
            <CountryProgressList />
          </StatsCard>
        </Col>
      </Row>
    </div>
  )
}
