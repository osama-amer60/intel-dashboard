"use client"

import { mockIntelUpdates } from "@/data/mockIntel"
import { Card, Col, Image, Row, Space, Typography } from "antd"
import { useRouter } from "next/navigation"
const { Text } = Typography

export const RelatedIntel = () => {
  const router = useRouter()

  const handleRelatedIntelClick = (id: number | string) => {
    router.push(`/intl-details/${id}`)
  }

  const relatedIntel = mockIntelUpdates.slice(0, 3)

  return (
    <Card
      title={
        <span style={{ color: "#fff", fontSize: "16px" }}>Related Intel</span>
      }
      style={{
        backgroundColor: "transparent",
        border: "none",
      }}
      styles={{
        header: {
          borderBottom: "2px solid #0a2540",
        },
      }}
    >
      <Space direction="vertical" size="middle">
        {relatedIntel.map((intel) => (
          <div
            key={intel.id}
            onClick={() => handleRelatedIntelClick(intel?.id)}
            style={{
              cursor: "pointer",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateX(4px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateX(0)")
            }
          >
            <Row gutter={12}>
              <Col span={10}>
                <Image
                  src={
                    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop"
                  }
                  alt="intl image"
                  preview={false}
                  className="object-cover rounded-xl"
                />
              </Col>
              <Col span={14}>
                <Text className="text-[#2C63CD]! text-[13px]!">
                  Company name
                </Text>
                <Text className="text-white! opacity-85! text-[18px]! block my-2">
                  {intel.title}
                </Text>
                <Text className="text-white! opacity-65!  text-[13px]!">
                  {intel.date} . {intel.type}
                </Text>
              </Col>
            </Row>
          </div>
        ))}
      </Space>
    </Card>
  )
}
