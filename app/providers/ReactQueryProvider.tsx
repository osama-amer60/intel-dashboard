"use client"

import AppLayout from "@/components/layout/AppLayout"
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
          <AppLayout>{children}</AppLayout>
        </App>
      </ConfigProvider>
    </QueryClientProvider>
  )
}
