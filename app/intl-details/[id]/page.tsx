"use client"

import { DataStateCard } from "@/components/common/DataStateCard"
import { IntelImage } from "@/components/IntelDetails/IntelImage"
import IntelInfo from "@/components/IntelDetails/IntelInfoItem"
import { RelatedIntel } from "@/components/IntelDetails/RelatedIntel"
import { useIntelDetails } from "@/hooks/useIntelDetails"
import { Col, Row, Space, Typography } from "antd"
import { useParams } from "next/navigation"

const { Title, Text, Paragraph } = Typography

const IntelDetails = () => {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading, isError } = useIntelDetails(id)

  if (isLoading || isError) {
    return (
      <DataStateCard isLoading={isLoading} isError={isError} minHeight={800} />
    )
  }

  return (
    <div className="p-5 lg:p-10 mb-72">
      <Row gutter={[24, 24]}>
        <IntelImage src={data?.data?.thumbnail} />
        <IntelInfo
          companyName={data?.data?.companyName}
          domains={data?.data?.domains}
          targetSectors={data?.data?.targetSectors}
          targetCountries={data?.data?.targetCountries}
          threatActor={data?.data?.threatActor}
          source={data?.data?.source}
          tags={data?.data?.tags}
        />

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
