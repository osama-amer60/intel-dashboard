"use client"

import AppClientLayout from "@/components/layout/AppClientLayout"
import { HeaderProvider } from "@/components/layout/HeaderContext"
import { theme } from "@/theme/antdTheme"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { App, ConfigProvider } from "antd"
import { ReactNode, useEffect, useState } from "react"

export default function AppProviders({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={theme}>
        <App>
          <HeaderProvider>
            <AppClientLayout>{children}</AppClientLayout>
          </HeaderProvider>
        </App>
      </ConfigProvider>
    </QueryClientProvider>
  )
}
