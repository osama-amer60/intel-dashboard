import AppProviders from "@/app/providers/AppProviders"
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
      <body
        suppressHydrationWarning
        className={clsx(geistSans.variable, geistMono.variable)}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}
