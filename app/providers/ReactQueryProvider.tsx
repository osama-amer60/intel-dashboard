"use client"

import AppLayout from "@/components/layout/AppLayout"
import { theme } from "@/theme/antdTheme"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ConfigProvider } from "antd"
import { ReactNode, useState } from "react"

export default function AppProviders({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={theme}>
        <AppLayout>{children}</AppLayout>
      </ConfigProvider>
    </QueryClientProvider>
  )
}
