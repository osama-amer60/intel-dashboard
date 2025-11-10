import { StaticImageData } from "next/image"

export interface IntelUpdate {
  id: string
  title: string
  description: string
  date: string
  type: "leak" | "breach" | "vulnerability" | "malware" | "phishing"
  targetSectors: string[]
  targetCountries: string[]
  tags: string[]
  source: string
  companyName?: string
  shortDescription?: string
  domains?: string[]
  thumbnail?: string
  threatActor?: string
}

export interface SectorData {
  name: string
  percentage: number
  count: number
}

export interface CountryData {
  key: string
  name: string
  flag: StaticImageData
  percentage: number
}

// types/filters.ts

export interface FilterState {
  search?: string
  tags?: string[]
  regions?: string[]
  sectors?: string[]
  dateFrom?: string
  dateTo?: string
}
