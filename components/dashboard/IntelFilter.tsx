/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, Input, Space } from "antd"
import { Search } from "lucide-react"

type IntelFilters = {
  search: string
  tags: string[]
  regions: string[]
  sectors: string[]
}

interface Props {
  setIntelFilters: React.Dispatch<React.SetStateAction<IntelFilters>>
}

export default function IntelFilter({ setIntelFilters }: Props) {
  const handleSearch = (e: any) => {
    setIntelFilters((prev: any) => ({ ...prev, search: e.target.value }))
  }
  return (
    <>
      <Card
        style={{
          backgroundColor: "#0F213F",
          border: "none",
        }}
      >
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <Input
            size="large"
            placeholder="Search"
            style={{
              backgroundColor: "#1E2D47",
              border: "none",
              color: "#a0aec0",
            }}
            className="custom-search-input"
            allowClear
            prefix={<Search size={18} />}
            onChange={(e) => {
              handleSearch(e)
            }}
          />
        </Space>
      </Card>
    </>
  )
}
