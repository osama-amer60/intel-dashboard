"use client"

import { DataStateCard } from "@/components/common/DataStateCard"
import { IntelImage } from "@/components/IntelDetails/IntelImage"
import IntelInfo from "@/components/IntelDetails/IntelInfoItem"
import { useIntelDetails } from "@/hooks/useIntelDetails"
import { Row } from "antd"
import { useParams } from "next/navigation"

const IntelDetails = () => {
  const { id } = useParams<{ id: string }>()

  const { data, isLoading, isError } = useIntelDetails(id)
  console.log(data)

  if (isLoading || isError) {
    return <DataStateCard isLoading={isLoading} isError={isError} />
  }

  return (
    <div className="p-5 lg:p-10">
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
      </Row>
    </div>
  )
}

export default IntelDetails
