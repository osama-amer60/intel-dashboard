"use client"

import { ReactNode, createContext, useContext, useState } from "react"

type HeaderContextType = {
  header: ReactNode | null
  setHeader: (node: ReactNode | null) => void
  headerActions: ReactNode | null
  setHeaderActions: (node: ReactNode | null) => void
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined)

export function HeaderProvider({ children }: { children: ReactNode }) {
  const [header, setHeader] = useState<ReactNode | null>(null)
  const [headerActions, setHeaderActions] = useState<ReactNode | null>(null)

  return (
    <HeaderContext.Provider
      value={{ header, setHeader, headerActions, setHeaderActions }}
    >
      {children}
    </HeaderContext.Provider>
  )
}

export function useHeaderContext() {
  const ctx = useContext(HeaderContext)
  if (!ctx)
    throw new Error("useHeaderContext must be used within HeaderProvider")
  return ctx
}

export function useHeader() {
  const { setHeader, setHeaderActions } = useHeaderContext()
  return { setHeader, setHeaderActions }
}

export function useHeaderValues() {
  const { header, headerActions } = useHeaderContext()
  return { header, headerActions }
}
