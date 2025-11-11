"use client"

import { Breadcrumb, Grid, Layout } from "antd"
import { ReactNode } from "react"
import { useHeaderValues } from "./HeaderContext"
const { useBreakpoint } = Grid

const { Header, Content } = Layout

export default function AppClientLayout({ children }: { children: ReactNode }) {
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

  const { header, headerActions } = useHeaderValues()

  return (
    <Layout className="min-h-screen">
      <Header style={headerStyle}>
        <div className="flex justify-between flex-wrap">
          <div>
            {header ? (
              header
            ) : (
              <>
                <div className="text-xl font-bold">Intel Updates</div>
                <div>
                  <Breadcrumb
                    items={[
                      {
                        title: "Home",
                        href: "/",
                      },
                      {
                        title: "Intel Updates",
                        href: "/",
                      },
                    ]}
                  />
                </div>
              </>
            )}
          </div>

          {headerActions && <div>{headerActions}</div>}
        </div>
      </Header>

      <Content style={{ backgroundColor: "#0A1733" }}>{children}</Content>
    </Layout>
  )
}
