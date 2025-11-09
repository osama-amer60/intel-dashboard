/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { mockSectorData, regionsData, tagsList } from "@/data/mockIntel"
import { Card, DatePicker, Input, Select, Space } from "antd"
import { format } from "date-fns"
import { Search } from "lucide-react"
import { useEffect, useState } from "react"

const { Option, OptGroup } = Select
const { RangePicker } = DatePicker

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
  const [selectedTags, setSelectedTags] = useState([])
  const [selectedRegions, setSelectedRegions] = useState([])
  const [selectedSectors, setSelectedSectors] = useState([])

  const commonSelectProps = {
    size: "large" as const,
    mode: "multiple" as const,
    maxTagCount: "responsive" as const,
    allowClear: true,
    style: { width: "100%" },
    className: "custom-filter-select",
    classNames: {
      popup: {
        root: "custom-filter-select-dropdown",
      },
    },
  }

  const updateFilter = (key: keyof IntelFilters, value: string | string[]) => {
    setIntelFilters((prev) => ({ ...prev, [key]: value }))
  }

  useEffect(() => updateFilter("tags", selectedTags), [selectedTags])
  useEffect(() => updateFilter("regions", selectedRegions), [selectedRegions])
  useEffect(() => updateFilter("sectors", selectedSectors), [selectedSectors])

  const handleSearch = (e: any) => {
    setIntelFilters((prev: any) => ({ ...prev, search: e.target.value }))
  }

  const handleDateChange = (e: any) => {
    if (!e) {
      setIntelFilters((prev: any) => ({
        ...prev,
        dateFrom: "",
        dateTo: "",
      }))
      return
    }

    const startDate = e[0].toDate()
    const endDate = e[1].toDate()
    const formattedStartDate = format(startDate, "yyyy-MM-dd")
    const formattedEndDate = format(endDate, "yyyy-MM-dd")

    setIntelFilters((prev: any) => ({
      ...prev,
      dateFrom: formattedStartDate,
      dateTo: formattedEndDate,
    }))
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

          <Select
            {...commonSelectProps}
            placeholder="Tags"
            value={selectedTags}
            onChange={setSelectedTags}
          >
            {tagsList.map((item) => (
              <Option key={item} value={item}>
                {item}
              </Option>
            ))}
          </Select>

          <Select
            {...commonSelectProps}
            placeholder="Regions"
            value={selectedRegions}
            onChange={setSelectedRegions}
          >
            {regionsData.map((group) => (
              <OptGroup key={group.group} label={group.group}>
                {group.items.map((item) => (
                  <Option key={item} value={item}>
                    {item}
                  </Option>
                ))}
              </OptGroup>
            ))}
          </Select>

          <Select
            {...commonSelectProps}
            placeholder="Sectors"
            value={selectedSectors}
            onChange={setSelectedSectors}
          >
            {mockSectorData.map((item) => (
              <Option key={item.name} value={item.name}>
                {item.name}
              </Option>
            ))}
          </Select>

          <RangePicker
            size="large"
            onChange={(e) => {
              handleDateChange(e)
            }}
          />
        </Space>
      </Card>
    </>
  )
}
