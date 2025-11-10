"use client"

import { mockIntelUpdates } from "@/data/mockIntel"
import { IntelUpdate } from "@/types/intel"
import { Card, Col, Image, Row, Space, Typography } from "antd"
import { useParams, useRouter } from "next/navigation"
const { Text } = Typography

export const RelatedIntel = () => {
  const router = useRouter()
  const { id: currentId } = useParams<{ id: string }>()

  const handleRelatedIntelClick = (id: number | string) => {
    router.push(`/intl-details/${id}`)
  }

  const getNextThreeItems = (
    arr: IntelUpdate[],
    id: number | string
  ): IntelUpdate[] => {
    const index = arr.findIndex((item) => item.id === id)
    if (index === -1) return []
    const nextItems = arr.slice(index + 1, index + 4)

    if (nextItems.length < 3) {
      const remaining = 3 - nextItems.length
      return [...nextItems, ...arr.slice(0, remaining)]
    }

    return nextItems
  }

  const relatedIntel = getNextThreeItems(mockIntelUpdates, currentId)

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
              <Col span={24} sm={12} lg={24} xl={12}>
                <Image
                  src={
                    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop"
                  }
                  alt="intl image"
                  preview={false}
                  className="object-cover rounded-xl"
                />
              </Col>
              <Col span={24} sm={12} lg={24} xl={12}>
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
