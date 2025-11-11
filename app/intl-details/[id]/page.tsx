"use client"

import { DataStateCard } from "@/components/common/DataStateCard"
import { IntelImage } from "@/components/IntelDetails/IntelImage"
import IntelInfo from "@/components/IntelDetails/IntelInfoItem"
import { RelatedIntel } from "@/components/IntelDetails/RelatedIntel"
import { useHeader } from "@/components/layout/HeaderContext"
import { useIntelDetails } from "@/hooks/useIntelDetails"
import { Breadcrumb, Button, Col, Row, Space, Typography } from "antd"
import { FileText } from "lucide-react"
import { useParams } from "next/navigation"
import { useEffect } from "react"

const { Title, Text, Paragraph } = Typography

const IntelDetails = () => {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading, isError } = useIntelDetails(id)
  const { setHeader, setHeaderActions } = useHeader()

  useEffect(() => {
    setHeader(
      <div>
        <div className="text-xl font-bold mb-1">{data?.data?.title}</div>
        <Breadcrumb
          items={[
            {
              title: "Home",
              href: "/",
            },
            {
              title: "Intel Updates",
              href: "/",
            },
            {
              title: data?.data?.title,
            },
          ]}
        />
      </div>
    )

    setHeaderActions(
      <Button
        type="primary"
        icon={<FileText size={16} />}
        onClick={() => {
          console.log("exported")
        }}
      >
        Export PDF
      </Button>
    )

    return () => {
      setHeader(null)
      setHeaderActions(null)
    }
  }, [data?.data, setHeader, setHeaderActions])

  if (isLoading || isError) {
    return (
      <DataStateCard isLoading={isLoading} isError={isError} minHeight={800} />
    )
  }

  return (
    <div className="p-5 lg:p-10 mb-20">
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={10}>
          <IntelImage src={data?.data?.thumbnail} />
        </Col>
        <Col xs={24} lg={14}>
          <IntelInfo
            companyName={data?.data?.companyName}
            domains={data?.data?.domains}
            targetSectors={data?.data?.targetSectors}
            targetCountries={data?.data?.targetCountries}
            threatActor={data?.data?.threatActor}
            source={data?.data?.source}
            tags={data?.data?.tags}
          />
        </Col>
        <Col xs={24} lg={16}>
          <Space direction="vertical">
            <Space>
              <Text>
                {data?.data?.date} • {data?.data?.type}
              </Text>
            </Space>

            <Title level={2} className="text-white! mb-1!">
              {data?.data?.title}
            </Title>

            <Paragraph className="text-xl! text-[#a0aec0]! mb-1!">
              {data?.data?.shortDescription}
            </Paragraph>
            <Paragraph className="text-[#a0aec0]!">
              {data?.data?.description}
            </Paragraph>
          </Space>
        </Col>
        <Col xs={24} lg={8}>
          <Space direction="vertical">
            <RelatedIntel />
          </Space>
        </Col>
      </Row>
    </div>
  )
}

export default IntelDetails
