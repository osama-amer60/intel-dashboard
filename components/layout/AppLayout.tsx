"use client"

import { Breadcrumb, Layout } from "antd"
import { ReactNode } from "react"

const { Header, Content } = Layout

export default function AppLayout({ children }: { children: ReactNode }) {
  const headerStyle: React.CSSProperties = {
    paddingBlock: 30,
    paddingInline: 48,
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
