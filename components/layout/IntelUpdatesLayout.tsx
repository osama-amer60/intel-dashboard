"use client"

import { Breadcrumb, Grid, Layout } from "antd"
import { ReactNode } from "react"

const { Header, Content } = Layout
const { useBreakpoint } = Grid

type Props = {
  children: ReactNode
}

export default function IntelUpdatesLayout({ children }: Props) {
  const screens = useBreakpoint()
  const isMobile = !screens.lg

  const headerStyle: React.CSSProperties = {
    paddingTop: 30,
    paddingBottom: 15,
    paddingInline: isMobile ? 28 : 48,
    backgroundColor: "#051B45",
    color: "#FFFFFF",
    height: "auto",
  }

  return (
    <Layout>
      <Header style={headerStyle}>
        <div className="flex justify-between flex-wrap">
          <div>
            <div className="text-xl font-bold">Intel Updates</div>
            <div>
              <Breadcrumb
                items={[
                  { title: "Home", href: "/" },
                  { title: "Intel Updates", href: "/" },
                ]}
              />
            </div>
          </div>
        </div>
      </Header>

      <Content style={{ backgroundColor: "#0A1733" }}>{children}</Content>
    </Layout>
  )
}
