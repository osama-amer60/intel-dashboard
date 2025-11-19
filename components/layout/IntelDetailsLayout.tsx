"use client"

import type { BreadcrumbProps } from "antd"
import { Breadcrumb, Grid, Layout } from "antd"
import { ReactNode } from "react"

const { Header, Content } = Layout
const { useBreakpoint } = Grid

type Props = {
  title: string
  breadcrumbs: BreadcrumbProps["items"]
  action?: ReactNode
  children: ReactNode
}

export default function IntelDetailsLayout({
  title,
  breadcrumbs,
  action,
  children,
}: Props) {
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
        <div className="flex justify-between flex-wrap gap-4">
          <div>
            <div className="text-xl font-bold mb-1">{title}</div>
            <div>
              <Breadcrumb items={breadcrumbs} />
            </div>
          </div>

          {action && <div>{action}</div>}
        </div>
      </Header>

      <Content style={{ backgroundColor: "#0A1733" }}>{children}</Content>
    </Layout>
  )
}
