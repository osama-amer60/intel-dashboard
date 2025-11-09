import canadaIcon from "@/public/flags/canada.webp"
import egyptIcon from "@/public/flags/egypt.webp"
import indiaIcon from "@/public/flags/india.webp"
import russiaIcon from "@/public/flags/russia.webp"
import ukIcon from "@/public/flags/uk.webp"
import { CountryData, IntelUpdate, SectorData } from "@/types/intel"

export const mockIntelUpdates: IntelUpdate[] = [
  {
    id: "1",
    title:
      "The Alleged Database of Kementerian Perhubungan Republik Indonesia is Leaked",
    description:
      "In a hacker forum monitored by SOCRadar, a new alleged database leak is disclosed. A database allegedly belonging to the Ministry of Transportation of the Republic of Indonesia has been leaked online.",
    date: "2025-11-12",
    type: "leak",
    targetSectors: ["Government", "Transportation"],
    targetCountries: ["Indonesia"],
    tags: ["Data Breach", "Government", "Indonesia", "Database Leak"],
    source: "SOCRadar",
  },
  {
    id: "2",
    title: "Critical Zero-Day Vulnerability in Enterprise VPN Solutions",
    description:
      "Security researchers discovered a critical authentication bypass vulnerability affecting multiple enterprise VPN solutions. Immediate patching recommended.",
    date: "2025-11-11",
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
    date: "2025-11-10",
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
    date: "2025-11-09",
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
    date: "2025-11-08",
    type: "breach",
    targetSectors: ["Technology", "Software Development"],
    targetCountries: ["Global"],
    tags: ["Supply Chain", "NPM", "Malicious Code"],
    source: "GitHub Security",
  },
  {
    id: "6",
    title: "New Banking Trojan Spreading via Mobile Applications",
    description:
      "Researchers have identified a new Android banking trojan disguised as a legitimate finance app stealing user credentials.",
    date: "2025-11-07",
    type: "malware",
    targetSectors: ["Finance", "Mobile"],
    targetCountries: ["Brazil", "Mexico", "Spain"],
    tags: ["Trojan", "Android", "Banking Malware"],
    source: "ESET Research",
  },
  {
    id: "7",
    title: "Massive DDoS Attack Disrupts Cloud Service Provider",
    description:
      "A record-breaking DDoS attack has targeted a major cloud infrastructure provider, briefly disrupting services in several regions.",
    date: "2025-11-06",
    type: "breach",
    targetSectors: ["Technology", "Cloud Computing"],
    targetCountries: ["United States", "France", "Singapore"],
    tags: ["DDoS", "Cloud Services", "Network Attack"],
    source: "Cloudflare Radar",
  },
  {
    id: "8",
    title: "Unauthorized Access Detected in Energy Sector SCADA Systems",
    description:
      "An intrusion was detected in multiple supervisory control and data acquisition (SCADA) systems within the energy sector.",
    date: "2025-11-05",
    type: "malware",
    targetSectors: ["Energy", "Utilities"],
    targetCountries: ["Saudi Arabia", "Qatar", "UAE"],
    tags: ["SCADA", "Critical Infrastructure", "Intrusion"],
    source: "ICS-CERT",
  },
  {
    id: "9",
    title: "Exposed Credentials Found on Dark Web Related to Telecom Companies",
    description:
      "Threat analysts uncovered a large set of exposed credentials allegedly linked to employees of major telecom providers.",
    date: "2025-11-04",
    type: "leak",
    targetSectors: ["Telecommunications"],
    targetCountries: ["India", "Philippines", "Malaysia"],
    tags: ["Credentials Leak", "Dark Web", "Telecom"],
    source: "SOCRadar",
  },
  {
    id: "10",
    title: "Fake Browser Extension Harvesting Data from Users",
    description:
      "A malicious browser extension posing as a productivity tool was found collecting browsing data and session cookies.",
    date: "2025-11-03",
    type: "malware",
    targetSectors: ["Technology", "Retail"],
    targetCountries: ["Global"],
    tags: ["Browser Extension", "Spyware", "Data Theft"],
    source: "Malwarebytes Labs",
  },
  {
    id: "11",
    title: "Insider Threat Incident at Financial Institution",
    description:
      "An internal employee at a major bank was caught exfiltrating sensitive client data to external storage devices.",
    date: "2025-11-02",
    type: "phishing",
    targetSectors: ["Finance", "Banking"],
    targetCountries: ["United Kingdom"],
    tags: ["Insider Threat", "Data Exfiltration", "Employee Misconduct"],
    source: "Bank Security Report",
  },
  {
    id: "12",
    title: "IoT Devices Exploited in Global Botnet Expansion",
    description:
      "Cybercriminals are hijacking vulnerable IoT devices to expand a global botnet used for DDoS attacks and crypto mining.",
    date: "2025-11-01",
    type: "malware",
    targetSectors: ["IoT", "Manufacturing"],
    targetCountries: ["Global"],
    tags: ["Botnet", "IoT", "Crypto Mining"],
    source: "Kaspersky Labs",
  },
  {
    id: "13",
    title: "New Phishing Kit Targeting Office 365 Users",
    description:
      "A newly discovered phishing kit mimics Microsoft’s login portal with high accuracy to steal Office 365 credentials.",
    date: "2025-10-31",
    type: "phishing",
    targetSectors: ["Technology", "Corporate"],
    targetCountries: ["United States", "Canada", "Australia"],
    tags: ["Phishing Kit", "Office 365", "Credential Theft"],
    source: "PhishLabs",
  },
  {
    id: "14",
    title: "Hacktivist Group Claims Cyberattack on Government Websites",
    description:
      "A politically motivated hacktivist group has taken responsibility for defacing multiple government websites.",
    date: "2025-10-30",
    type: "leak",
    targetSectors: ["Government"],
    targetCountries: ["Poland", "Ukraine"],
    tags: ["Hacktivism", "Website Defacement", "Political"],
    source: "Anonymous Feed",
  },
  {
    id: "15",
    title: "Cloud Database Left Unprotected Exposing Customer Records",
    description:
      "A misconfigured cloud storage bucket exposed thousands of sensitive customer records without authentication.",
    date: "2025-10-29",
    type: "leak",
    targetSectors: ["Retail", "E-commerce"],
    targetCountries: ["United States"],
    tags: ["Cloud Security", "Data Exposure", "Misconfiguration"],
    source: "UpGuard",
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
  { key: "1", name: "Egypt", flag: egyptIcon, percentage: 50 },
  { key: "2", name: "Egypt", flag: egyptIcon, percentage: 30 },
  { key: "3", name: "Canada", flag: canadaIcon, percentage: 20 },
  { key: "4", name: "Canada", flag: canadaIcon, percentage: 40 },
  { key: "5", name: "India", flag: indiaIcon, percentage: 60 },
  { key: "6", name: "India", flag: indiaIcon, percentage: 50 },
  { key: "7", name: "Russia", flag: russiaIcon, percentage: 30 },
  { key: "8", name: "Russia", flag: russiaIcon, percentage: 20 },
  { key: "9", name: "United Kingdom", flag: ukIcon, percentage: 40 },
  { key: "10", name: "United Kingdom", flag: ukIcon, percentage: 60 },
]

export const regionsData = [
  {
    group: "Global",
    items: ["Global"],
  },
  {
    group: "Middle East",
    items: ["Egypt", "Jordan", "UAE", "Saudi Arabia"],
  },
  {
    group: "Asia",
    items: ["Indonesia", "China", "India"],
  },
  {
    group: "Europe",
    items: ["United Kingdom", "Germany", "France"],
  },
  {
    group: "Americas",
    items: ["United States", "Canada", "Brazil"],
  },
]

export const tagsList = [
  "Supply Chain",
  "NPM",
  "Malicious Code",
  "Phishing",
  "Financial Fraud",
  "Social Engineering",
  "Ransomware",
  "Healthcare",
  "Malware",
  "Zero-Day",
  "VPN",
  "Authentication Bypass",
  "CVE-2024-XXXX",
  "Data Breach",
  "Government",
  "Indonesia",
  "Database Leak",
]
