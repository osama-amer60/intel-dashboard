"use client"

import SectorChart from "@/components/charts/SectorChart"
import StatsCard from "@/components/dashboard/StatsCard"
import { Col, Row } from "antd"

export default function Home() {
  return (
    <div className="p-10">
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <StatsCard title="Top Targeted Sectors">
            <SectorChart />
          </StatsCard>
        </Col>
        <Col span={12}>
          <StatsCard title="Top Targeted Countries" />
        </Col>
      </Row>
    </div>
  )
}
