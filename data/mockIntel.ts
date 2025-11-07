import { CountryData, IntelUpdate, SectorData } from "@/types/intel"

export const mockIntelUpdates: IntelUpdate[] = [
  {
    id: "1",
    title:
      "The Alleged Database of Kementerian Perhubungan Republik Indonesia is Leaked",
    description:
      "In a hacker forum monitored by SOCRadar, a new alleged database leak is disclosed. A database allegedly belonging to the Ministry of Transportation of the Republic of Indonesia has been leaked online.",
    date: "2024-05-20",
    type: "leak",
    targetSectors: ["Government", "Transportation"],
    targetCountries: ["Indonesia"],
    tags: ["Data Breach", "Government", "Indonesia", "Database Leak"],
    source: "SOCRadar",
    thumbnail: "/images/database-leak.jpg",
  },
  {
    id: "2",
    title: "Critical Zero-Day Vulnerability in Enterprise VPN Solutions",
    description:
      "Security researchers discovered a critical authentication bypass vulnerability affecting multiple enterprise VPN solutions. Immediate patching recommended.",
    date: "2024-05-19",
    type: "vulnerability",
    targetSectors: ["Technology", "Finance", "Healthcare"],
    targetCountries: ["Global"],
    tags: ["Zero-Day", "VPN", "Authentication Bypass", "CVE-2024-XXXX"],
    source: "CERT",
  },
  {
    id: "3",
    title: "Ransomware Campaign Targeting Healthcare Sector",
    description:
      "A new ransomware variant has been observed specifically targeting healthcare organizations across Europe and North America.",
    date: "2024-05-18",
    type: "malware",
    targetSectors: ["Healthcare", "Medical Services"],
    targetCountries: ["United States", "United Kingdom", "Germany", "Canada"],
    tags: ["Ransomware", "Healthcare", "Malware"],
    source: "Threat Intelligence",
  },
  {
    id: "4",
    title: "Phishing Campaign Impersonating Major Banks",
    description:
      "Sophisticated phishing campaign detected targeting customers of major financial institutions with fake login pages.",
    date: "2024-05-17",
    type: "phishing",
    targetSectors: ["Finance", "Banking"],
    targetCountries: ["Russia", "China", "India"],
    tags: ["Phishing", "Financial Fraud", "Social Engineering"],
    source: "Anti-Phishing Working Group",
  },
  {
    id: "5",
    title: "Supply Chain Attack on Software Development Tools",
    description:
      "Malicious code discovered in popular npm packages affecting thousands of software development projects worldwide.",
    date: "2024-05-16",
    type: "breach",
    targetSectors: ["Technology", "Software Development"],
    targetCountries: ["Global"],
    tags: ["Supply Chain", "NPM", "Malicious Code"],
    source: "GitHub Security",
  },
]

export const mockSectorData: SectorData[] = [
  { name: "Financial Sector", percentage: 35, count: 42 },
  { name: "Healthcare", percentage: 25, count: 30 },
  { name: "Manufacturing", percentage: 18, count: 22 },
  { name: "Retail", percentage: 12, count: 14 },
  { name: "Government", percentage: 10, count: 12 },
  { name: "Technology", percentage: 22, count: 26 },
]

export const mockCountryData: CountryData[] = [
  { name: "Canada", code: "CA", percentage: 30, count: 36, flag: "🇨🇦" },
  { name: "Russia", code: "RU", percentage: 20, count: 24, flag: "🇷🇺" },
  { name: "United Kingdom", code: "GB", percentage: 40, count: 48, flag: "🇬🇧" },
  { name: "China", code: "CN", percentage: 30, count: 36, flag: "🇨🇳" },
]
