import AppLayout from "@/components/AppLayout"
import ReactQueryProvider from "@/providers/ReactQueryProvider"
import { theme } from "@/theme/antdTheme"
import { ConfigProvider } from "antd"
import clsx from "classnames"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Intel Dashboard",
  description: "Modern analytics dashboard built with Next.js and Ant Design",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(geistSans.variable, geistMono.variable)}>
        <ReactQueryProvider>
          <ConfigProvider theme={theme}>
            <AppLayout>{children}</AppLayout>
          </ConfigProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
