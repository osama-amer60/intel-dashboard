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
  websites?: string[]
  thumbnail?: string
}

export interface SectorData {
  name: string
  percentage: number
  count: number
}

export interface CountryData {
  name: string
  code: string
  percentage: number
  count: number
  flag: string
}

// types/filters.ts

export interface FilterState {
  search: string
  tags: string[]
  industries: string[]
  Regions: string[]
  categories: string[]
  sectors: string[]
  group: string[]
  dateRange: {
    from: Date | null
    to: Date | null
  }
}
