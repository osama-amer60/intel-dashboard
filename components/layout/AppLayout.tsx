"use client"

import { Breadcrumb, Grid, Layout } from "antd"
import { ReactNode } from "react"
const { useBreakpoint } = Grid

const { Header, Content } = Layout

export default function AppLayout({ children }: { children: ReactNode }) {
  const screens = useBreakpoint()
  const isMobile = !screens.lg

  const headerStyle: React.CSSProperties = {
    paddingBlock: 30,
    paddingInline: isMobile ? 28 : 48,
    backgroundColor: "#051B45",
    color: "#FFFFFF",
    height: 90,
  }

  return (
    <Layout className="min-h-screen">
      <Header style={headerStyle}>
        <div className="text-xl font-bold">Intel Updates</div>
        <div>
          <Breadcrumb
            items={[
              {
                title: "Home",
              },
              {
                title: "Intel Updates",
              },
            ]}
          />
        </div>
      </Header>

      <Content style={{ backgroundColor: "#0A1733" }}>{children}</Content>
    </Layout>
  )
}
