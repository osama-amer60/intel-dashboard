"use client"

import { DataStateCard } from "@/components/common/DataStateCard"
import { IntelImage } from "@/components/IntelDetails/IntelImage"
import IntelInfo from "@/components/IntelDetails/IntelInfoItem"
import { RelatedIntel } from "@/components/IntelDetails/RelatedIntel"
import IntelDetailsLayout from "@/components/layout/IntelDetailsLayout"
import { useIntelDetails } from "@/hooks/useIntelDetails"
import { Button, Col, Row, Space, Typography } from "antd"
import { FileText } from "lucide-react"
import { useParams } from "next/navigation"

const { Title, Text, Paragraph } = Typography

const IntelDetails = () => {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading, isError } = useIntelDetails(id)
  const intel = data?.data

  if (isLoading || isError) {
    return (
      <DataStateCard isLoading={isLoading} isError={isError} minHeight={800} />
    )
  }

  return (
    <IntelDetailsLayout
      title={intel?.title ?? "Intel Details"}
      breadcrumbs={[
        { title: "Home", href: "/" },
        { title: "Intel Updates", href: "/" },
        { title: intel?.title ?? "Intel Details" },
      ]}
      action={
        <Button
          type="primary"
          icon={<FileText size={16} />}
          onClick={() => {
            console.log("exported")
          }}
        >
          Export PDF
        </Button>
      }
    >
      <div className="p-5 lg:p-10 mb-20">
        <Row gutter={[24, 24]}>
          <Col xs={24} lg={10}>
            <IntelImage src={intel?.thumbnail} />
          </Col>
          <Col xs={24} lg={14}>
            <IntelInfo
              companyName={intel?.companyName}
              domains={intel?.domains}
              targetSectors={intel?.targetSectors}
              targetCountries={intel?.targetCountries}
              threatActor={intel?.threatActor}
              source={intel?.source}
              tags={intel?.tags}
            />
          </Col>
          <Col xs={24} lg={16}>
            <Space direction="vertical">
              <Space>
                <Text>
                  {intel?.date} • {intel?.type}
                </Text>
              </Space>

              <Title level={2} className="text-white! mb-1!">
                {intel?.title}
              </Title>

              <Paragraph className="text-xl! text-[#a0aec0]! mb-1!">
                {intel?.shortDescription}
              </Paragraph>
              <Paragraph className="text-[#a0aec0]!">{intel?.description}</Paragraph>
            </Space>
          </Col>
          <Col xs={24} lg={8}>
            <Space direction="vertical">
              <RelatedIntel />
            </Space>
          </Col>
        </Row>
      </div>
    </IntelDetailsLayout>
  )
}

export default IntelDetails
