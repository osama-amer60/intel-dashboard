"use client"

import CountryProgressList from "@/components/charts/CountryProgressList"
import SectorChart from "@/components/charts/SectorChart"
import InstallPWA from "@/components/common/InstallPWA"
import IntelFilter from "@/components/dashboard/IntelFilter"
import { IntelList } from "@/components/dashboard/IntelList"
import StatsCard from "@/components/dashboard/StatsCard"
import IntelUpdatesLayout from "@/components/layout/IntelUpdatesLayout"
import { Col, Row } from "antd"
import { useState } from "react"

type TimeRange = "year" | "month" | "week"
type IntelFilters = {
  search: string
  tags: string[]
  regions: string[]
  sectors: string[]
}
export default function Home() {
  const [sectorTimeRange, setSectorTimeRange] = useState<TimeRange>("year")
  const [countryTimeRange, setCountryTimeRange] = useState<TimeRange>("year")
  const [intelFilters, setIntelFilters] = useState<IntelFilters>({
    search: "",
    tags: [],
    regions: [],
    sectors: [],
  })

  return (
    <IntelUpdatesLayout>
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
            <StatsCard
              title="Top Targeted Countries"
              onTimeChange={(val) => setCountryTimeRange(val as TimeRange)}
            >
              <CountryProgressList timeRange={countryTimeRange} />
            </StatsCard>
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ marginTop: 50, minHeight: 700 }}>
          <Col span={24} lg={6}>
            <IntelFilter setIntelFilters={setIntelFilters} />
          </Col>
          <Col span={24} lg={18}>
            <IntelList intelFilters={intelFilters} />
          </Col>
        </Row>
      </div>
      <InstallPWA />
    </IntelUpdatesLayout>
  )
}
