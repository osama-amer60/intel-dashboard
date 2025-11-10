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
    shortDescription:
      "Database leak from Indonesian Ministry of Transportation",
    companyName: "Kementerian Perhubungan Republik Indonesia",
    domains: ["https://dephub.go.id", "https://transportasi.indonesia.go.id"],
    date: "2025-11-12",
    type: "leak",
    targetSectors: ["Government", "Transportation"],
    targetCountries: ["Indonesia"],
    tags: ["Data Breach", "Government", "Indonesia", "Database Leak"],
    source: "https://intel-dashboard-zeta.vercel.app/",
    thumbnail:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
    threatActor: "SOCRadar",
  },
  {
    id: "2",
    title: "Critical Zero-Day Vulnerability in Enterprise VPN Solutions",
    description:
      "Security researchers discovered a critical authentication bypass vulnerability affecting multiple enterprise VPN solutions. Immediate patching recommended.",
    shortDescription:
      "Critical zero-day vulnerability in enterprise VPN solutions",
    companyName: "Multiple VPN Vendors",
    domains: [
      "https://vpncorp.com",
      "https://securevpn.net",
      "https://enterprisevpn.io",
    ],
    date: "2025-11-11",
    type: "vulnerability",
    targetSectors: ["Technology", "Finance", "Healthcare"],
    targetCountries: ["Global"],
    tags: ["Zero-Day", "VPN", "Authentication Bypass", "CVE-2024-XXXX"],
    source: "https://intel-dashboard-zeta.vercel.app/",
    thumbnail:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
    threatActor: "CERT",
  },
  {
    id: "3",
    title: "Ransomware Campaign Targeting Healthcare Sector",
    description:
      "A new ransomware variant has been observed specifically targeting healthcare organizations across Europe and North America.",
    shortDescription: "Ransomware campaign targeting healthcare organizations",
    companyName: "Multiple Healthcare Providers",
    domains: [
      "https://medcare.org",
      "https://healthsystem.eu",
      "https://hospitalgroup.com",
    ],
    date: "2025-11-10",
    type: "malware",
    targetSectors: ["Healthcare", "Medical Services"],
    targetCountries: ["United States", "United Kingdom", "Germany", "Canada"],
    tags: ["Ransomware", "Healthcare", "Malware"],
    source: "https://intel-dashboard-zeta.vercel.app/",
    thumbnail:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
    threatActor: "Threat Intelligence",
  },
  {
    id: "4",
    title: "Phishing Campaign Impersonating Major Banks",
    description:
      "Sophisticated phishing campaign detected targeting customers of major financial institutions with fake login pages.",
    shortDescription: "Phishing campaign targeting bank customers",
    companyName: "Multiple Financial Institutions",
    domains: [
      "https://globalbank.com",
      "https://securefinance.ru",
      "https://bankofasia.cn",
    ],
    date: "2025-11-09",
    type: "phishing",
    targetSectors: ["Finance", "Banking"],
    targetCountries: ["Russia", "China", "India"],
    tags: ["Phishing", "Financial Fraud", "Social Engineering"],
    source: "https://intel-dashboard-zeta.vercel.app/",
    thumbnail:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
    threatActor: "Anti-Phishing Working Group",
  },
  {
    id: "5",
    title: "Supply Chain Attack on Software Development Tools",
    description:
      "Malicious code discovered in popular npm packages affecting thousands of software development projects worldwide.",
    shortDescription: "Supply chain attack on npm packages",
    companyName: "npm Registry",
    domains: [
      "https://npmjs.com",
      "https://nodejs.org",
      "https://developer-tools.io",
    ],
    date: "2025-11-08",
    type: "breach",
    targetSectors: ["Technology", "Software Development"],
    targetCountries: ["Global"],
    tags: ["Supply Chain", "NPM", "Malicious Code"],
    source: "https://intel-dashboard-zeta.vercel.app/",
    thumbnail:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
    threatActor: "GitHub Security",
  },
  {
    id: "6",
    title: "New Banking Trojan Spreading via Mobile Applications",
    description:
      "Researchers have identified a new Android banking trojan disguised as a legitimate finance app stealing user credentials.",
    shortDescription: "Android banking trojan spreading via mobile apps",
    companyName: "Multiple Mobile Banking Apps",
    domains: [
      "https://mobilebank.br",
      "https://finapp.mx",
      "https://bancodigital.es",
    ],
    date: "2025-11-07",
    type: "malware",
    targetSectors: ["Finance", "Mobile"],
    targetCountries: ["Brazil", "Mexico", "Spain"],
    tags: ["Trojan", "Android", "Banking Malware"],
    source: "https://intel-dashboard-zeta.vercel.app/",
    thumbnail:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
    threatActor: "ESET Research",
  },
  {
    id: "7",
    title: "Massive DDoS Attack Disrupts Cloud Service Provider",
    description:
      "A record-breaking DDoS attack has targeted a major cloud infrastructure provider, briefly disrupting services in several regions.",
    shortDescription: "Massive DDoS attack on cloud provider",
    companyName: "Cloud Infrastructure Provider",
    domains: [
      "https://cloudprovider.com",
      "https://infrastructure.io",
      "https://hosting-services.net",
    ],
    date: "2025-11-06",
    type: "breach",
    targetSectors: ["Technology", "Cloud Computing"],
    targetCountries: ["United States", "France", "Singapore"],
    tags: ["DDoS", "Cloud Services", "Network Attack"],
    source: "https://intel-dashboard-zeta.vercel.app/",
    thumbnail:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
    threatActor: "Cloudflare Radar",
  },
  {
    id: "8",
    title: "Unauthorized Access Detected in Energy Sector SCADA Systems",
    description:
      "An intrusion was detected in multiple supervisory control and data acquisition (SCADA) systems within the energy sector.",
    shortDescription: "Unauthorized access to energy SCADA systems",
    companyName: "Energy Sector Operators",
    domains: [
      "https://powergrid.sa",
      "https://energy.qa",
      "https://utilities.ae",
    ],
    date: "2025-11-05",
    type: "malware",
    targetSectors: ["Energy", "Utilities"],
    targetCountries: ["Saudi Arabia", "Qatar", "UAE"],
    tags: ["SCADA", "Critical Infrastructure", "Intrusion"],
    source: "https://intel-dashboard-zeta.vercel.app/",
    thumbnail:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
    threatActor: "ICS-CERT",
  },
  {
    id: "9",
    title: "Exposed Credentials Found on Dark Web Related to Telecom Companies",
    description:
      "Threat analysts uncovered a large set of exposed credentials allegedly linked to employees of major telecom providers.",
    shortDescription: "Telecom employee credentials found on dark web",
    companyName: "Major Telecom Providers",
    domains: [
      "https://telecom.in",
      "https://mobile.ph",
      "https://communications.my",
    ],
    date: "2025-11-04",
    type: "leak",
    targetSectors: ["Telecommunications"],
    targetCountries: ["India", "Philippines", "Malaysia"],
    tags: ["Credentials Leak", "Dark Web", "Telecom"],
    source: "https://intel-dashboard-zeta.vercel.app/",
    thumbnail:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
    threatActor: "SOCRadar",
  },
  {
    id: "10",
    title: "Fake Browser Extension Harvesting Data from Users",
    description:
      "A malicious browser extension posing as a productivity tool was found collecting browsing data and session cookies.",
    shortDescription: "Malicious browser extension harvesting user data",
    companyName: "Browser Extension Developer",
    domains: [
      "https://productivity-tools.com",
      "https://browser-addons.io",
      "https://extension-store.net",
    ],
    date: "2025-11-03",
    type: "malware",
    targetSectors: ["Technology", "Retail"],
    targetCountries: ["Global"],
    tags: ["Browser Extension", "Spyware", "Data Theft"],
    source: "https://intel-dashboard-zeta.vercel.app/",
    thumbnail:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
    threatActor: "Malwarebytes Labs",
  },
  {
    id: "11",
    title: "Insider Threat Incident at Financial Institution",
    description:
      "An internal employee at a major bank was caught exfiltrating sensitive client data to external storage devices.",
    shortDescription: "Insider threat at financial institution",
    companyName: "Major UK Bank",
    domains: [
      "https://ukbank.co.uk",
      "https://financialgroup.com",
      "https://banking-services.uk",
    ],
    date: "2025-11-02",
    type: "phishing",
    targetSectors: ["Finance", "Banking"],
    targetCountries: ["United Kingdom"],
    tags: ["Insider Threat", "Data Exfiltration", "Employee Misconduct"],
    source: "https://intel-dashboard-zeta.vercel.app/",
    thumbnail:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
    threatActor: "Bank Security Report",
  },
  {
    id: "12",
    title: "IoT Devices Exploited in Global Botnet Expansion",
    description:
      "Cybercriminals are hijacking vulnerable IoT devices to expand a global botnet used for DDoS attacks and crypto mining.",
    shortDescription: "IoT devices exploited for botnet expansion",
    companyName: "Multiple IoT Device Manufacturers",
    domains: [
      "https://iotdevices.com",
      "https://smart-home.io",
      "https://connected-devices.net",
    ],
    date: "2025-11-01",
    type: "malware",
    targetSectors: ["IoT", "Manufacturing"],
    targetCountries: ["Global"],
    tags: ["Botnet", "IoT", "Crypto Mining"],
    source: "https://intel-dashboard-zeta.vercel.app/",
    thumbnail:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
    threatActor: "Kaspersky Labs",
  },
  {
    id: "13",
    title: "New Phishing Kit Targeting Office 365 Users",
    description:
      "A newly discovered phishing kit mimics Microsoft's login portal with high accuracy to steal Office 365 credentials.",
    shortDescription: "Phishing kit targeting Office 365 users",
    companyName: "Microsoft Office 365",
    domains: [
      "https://office365.com",
      "https://microsoft-online.net",
      "https://cloud-office.io",
    ],
    date: "2025-10-31",
    type: "phishing",
    targetSectors: ["Technology", "Corporate"],
    targetCountries: ["United States", "Canada", "Australia"],
    tags: ["Phishing Kit", "Office 365", "Credential Theft"],
    source: "https://intel-dashboard-zeta.vercel.app/",
    thumbnail:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
    threatActor: "PhishLabs",
  },
  {
    id: "14",
    title: "Hacktivist Group Claims Cyberattack on Government Websites",
    description:
      "A politically motivated hacktivist group has taken responsibility for defacing multiple government websites.",
    shortDescription: "Hacktivist cyberattack on government websites",
    companyName: "Government Websites",
    domains: [
      "https://gov.pl",
      "https://government.ua",
      "https://official-portal.net",
    ],
    date: "2025-10-30",
    type: "leak",
    targetSectors: ["Government"],
    targetCountries: ["Poland", "Ukraine"],
    tags: ["Hacktivism", "Website Defacement", "Political"],
    source: "https://intel-dashboard-zeta.vercel.app/",
    thumbnail:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
    threatActor: "OS",
  },
  {
    id: "15",
    title: "Cloud Database Left Unprotected Exposing Customer Records",
    description:
      "A misconfigured cloud storage bucket exposed thousands of sensitive customer records without authentication.",
    shortDescription: "Unprotected cloud database exposes customer records",
    companyName: "Retail E-commerce Company",
    domains: [
      "https://retail-store.com",
      "https://ecommerce-us.com",
      "https://shopping-online.net",
    ],
    date: "2025-10-29",
    type: "leak",
    targetSectors: ["Retail", "E-commerce"],
    targetCountries: ["United States"],
    tags: ["Cloud Security", "Data Exposure", "Misconfiguration"],
    source: "https://intel-dashboard-zeta.vercel.app/",
    thumbnail:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
    threatActor: "UpGuard",
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
