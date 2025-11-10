"use client"

import { Card, Col, Image, Row, Space, Typography } from "antd"
import { useRouter } from "next/navigation"
const { Text } = Typography

export const RelatedIntel = () => {
  const router = useRouter()

  const handleRelatedIntelClick = (id: number | string) => {
    router.push(`/intl-details/${id}`)
  }

  const relatedIntel = [
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
      shortDescription:
        "Ransomware campaign targeting healthcare organizations",
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
  ]
  return (
    <Card
      title={
        <span style={{ color: "#fff", fontSize: "16px" }}>Related Intel</span>
      }
      style={{
        backgroundColor: "transparent",
        border: "none",
      }}
      styles={{
        header: {
          borderBottom: "2px solid #0a2540",
        },
      }}
    >
      <Space direction="vertical" size="middle">
        {relatedIntel.map((intel) => (
          <div
            key={intel.id}
            onClick={() => handleRelatedIntelClick(intel?.id)}
            style={{
              cursor: "pointer",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateX(4px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateX(0)")
            }
          >
            <Row gutter={12}>
              <Col span={10}>
                <Image
                  src={
                    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop"
                  }
                  alt="intl image"
                  preview={false}
                  className="object-cover rounded-xl"
                />
              </Col>
              <Col span={14}>
                <Text className="text-[#2C63CD]! text-[13px]!">
                  Company name
                </Text>
                <Text className="text-white! opacity-85! text-[18px]! block my-2">
                  {intel.title}
                </Text>
                <Text className="text-white! opacity-65!  text-[13px]!">
                  {intel.date} . {intel.type}
                </Text>
              </Col>
            </Row>
          </div>
        ))}
      </Space>
    </Card>
  )
}
