"use client"

import { Col, Row, Space, Tag, Typography } from "antd"
import { SquareArrowOutUpRight } from "lucide-react"

const { Text } = Typography

export interface IntelInfoProps {
  companyName?: string
  domains?: string[]
  targetSectors?: string[]
  targetCountries?: string[]
  threatActor?: string
  source?: string
  tags?: string[]
}

const IntelInfo = ({
  companyName,
  domains,
  targetSectors,
  targetCountries,
  threatActor,
  source,
  tags,
}: IntelInfoProps) => {
  return (
    <Col xs={24} lg={14}>
      <Row gutter={[18, 30]}>
        <Col xs={24} lg={12}>
          <Text
            style={{ color: "#8b92a8", display: "block", marginBottom: "4px" }}
          >
            Company name
          </Text>
          <Text>{companyName || "—"}</Text>
        </Col>

        <Col xs={24} lg={12}>
          <Text
            style={{ color: "#8b92a8", display: "block", marginBottom: "4px" }}
          >
            Website
          </Text>
          <Space direction="horizontal" wrap size="small">
            {domains?.map((site, index) => (
              <a
                key={index}
                href={`https://${site}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white! flex items-center gap-1 me-4"
              >
                {site} <SquareArrowOutUpRight size={14} />
              </a>
            ))}
          </Space>
        </Col>

        <Col xs={24} lg={12}>
          <Text
            style={{ color: "#8b92a8", display: "block", marginBottom: "4px" }}
          >
            Target Sectors
          </Text>
          <Text>{targetSectors?.join(", ") || "—"}</Text>
        </Col>

        <Col xs={24} lg={12}>
          <Text
            style={{ color: "#8b92a8", display: "block", marginBottom: "4px" }}
          >
            Target Location
          </Text>
          <Text>{targetCountries?.join(", ") || "—"}</Text>
        </Col>

        <Col xs={24} lg={12}>
          <Text
            style={{ color: "#8b92a8", display: "block", marginBottom: "4px" }}
          >
            Threat Actors
          </Text>
          <Text>{threatActor || "—"}</Text>
        </Col>

        <Col xs={24}>
          <Text
            style={{ color: "#8b92a8", display: "block", marginBottom: "4px" }}
          >
            Source
          </Text>
          {source && (
            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 me-4"
            >
              {source} <SquareArrowOutUpRight size={14} />
            </a>
          )}
        </Col>

        <Col xs={24}>
          <Text
            style={{ color: "#8b92a8", display: "block", marginBottom: "4px" }}
          >
            Tags
          </Text>
          <Space size={[8, 8]} wrap>
            {tags?.map((tag, index) => (
              <Tag
                key={index}
                color="#3271E7"
                style={{ opacity: 0.85, marginInlineEnd: 1 }}
              >
                {tag}
              </Tag>
            ))}
          </Space>
        </Col>
      </Row>
    </Col>
  )
}

export default IntelInfo
