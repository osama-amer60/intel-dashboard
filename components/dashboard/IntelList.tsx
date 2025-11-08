/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useIntelUpdates } from "@/hooks/useIntelUpdates"
import defaultImg from "@/public/default-laptop.webp"
import { formatDate } from "@/utils/dateUtils"
import {
  Avatar,
  Card,
  Col,
  Divider,
  Grid,
  Row,
  Space,
  Tag,
  Typography,
} from "antd"
import Image from "next/image"
import { DataStateCard } from "../common/DataStateCard"

const { Text, Title, Paragraph } = Typography
const { useBreakpoint } = Grid

interface Props {
  intelFilters: {
    search: string
    tags: string[]
    regions: string[]
    sectors: string[]
  }
}

const targetBlocksStyle = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%",
  color: "rgb(255, 255, 255,0.9)",
  marginBlockEnd: 0,
}

const borderBlockStyle = {
  borderInlineStart: "1px solid rgba(255, 255, 255, 0.2)",
  paddingInlineStart: 16,
}

export const IntelList = ({ intelFilters }: Props) => {
  const screens = useBreakpoint()
  const isMobile = !screens.md

  const { data, isLoading, isError } = useIntelUpdates(intelFilters)

  if (isLoading || isError) {
    return <DataStateCard isLoading={isLoading} isError={isError} />
  }

  if (!data || data.data.length === 0) {
    return (
      <div className="min-h-72 text-white flex items-center justify-center text-lg">
        No intel updates found.
      </div>
    )
  }

  const renderIntelCard = (item: any) => (
    <Card
      key={item.id}
      style={{
        backgroundColor: "#0a1733",
        border: "none",
      }}
      styles={{
        body: {
          paddingTop: 0,
          paddingInline: 0,
        },
      }}
    >
      <Row gutter={[16, 16]} align="top">
        <Col xs={24} md={6}>
          <Image
            src={item.thumbnail || defaultImg}
            alt={item.title}
            style={{
              width: "100%",
              aspectRatio: "4 / 3.5",
              objectFit: "cover",
              borderRadius: 12,
              overflow: "hidden",
            }}
          />
        </Col>

        <Col xs={24} md={18}>
          <Space direction="vertical" style={{ width: "100%" }}>
            <Text style={{ color: "#a0aec0" }}>
              {formatDate(item.date)} • Type
            </Text>

            <Title
              level={isMobile ? 5 : 4}
              style={{
                color: "rgb(255, 255, 255,0.9)",
                marginBottom: 0,
                lineHeight: "1.3em",
                overflow: "hidden",
              }}
            >
              <span className="text-white/90 mb-0 leading-[1.3] line-clamp-2">
                {item.title}
              </span>
            </Title>

            <Paragraph
              ellipsis={{ rows: 2 }}
              style={{
                color: "#a0aec0",
                marginBottom: 0,
              }}
            >
              {item.description}
            </Paragraph>

            <Divider
              size="small"
              style={{
                backgroundColor: "rgb(255, 255, 255,0.2)",
                marginTop: 1,
              }}
            />

            <Row gutter={[8, 8]}>
              <Col xs={24} sm={12} lg={8}>
                <Text strong style={{ color: "#a0aec0" }}>
                  Target Sectors:
                </Text>
                <Paragraph style={targetBlocksStyle}>
                  {item.targetSectors?.join(", ") || "—"}
                </Paragraph>
              </Col>

              <Col xs={24} sm={12} lg={8} style={borderBlockStyle}>
                <Text strong style={{ color: "#a0aec0" }}>
                  Target Location:
                </Text>
                <Paragraph style={targetBlocksStyle}>
                  {item.targetCountries?.join(", ") || "—"}{" "}
                </Paragraph>
              </Col>

              <Col xs={24} sm={12} lg={8} style={borderBlockStyle}>
                <Space direction="vertical" size={0}>
                  <Text strong style={{ color: "#a0aec0" }}>
                    Threat Actors:
                  </Text>
                  <Space align="center" size={8}>
                    <Avatar
                      size="small"
                      style={{
                        backgroundColor: "#1677ff",
                        color: "white",
                        fontSize: 12,
                      }}
                    >
                      {(item.threatActor?.[0] || "U").toUpperCase()}
                    </Avatar>
                    <Text style={{ color: "#FFF" }}>
                      {item.threatActor || "Unknown"}
                    </Text>
                  </Space>
                </Space>
              </Col>
            </Row>

            <Space wrap style={{ marginTop: 8 }}>
              {item.tags.slice(0, 8).map((tag: string, index: number) => (
                <Tag
                  key={index}
                  color="#3271E7"
                  style={{ opacity: 0.85, marginInlineEnd: 1 }}
                >
                  {tag}
                </Tag>
              ))}
              {item.tags.length > 8 && (
                <Tag color="#3271E7" style={{ opacity: 0.85 }}>
                  + {item.tags.length - 8}
                </Tag>
              )}
            </Space>
          </Space>
        </Col>
      </Row>
    </Card>
  )

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      {data?.data.map((item) => renderIntelCard(item))}
    </Space>
  )
}
