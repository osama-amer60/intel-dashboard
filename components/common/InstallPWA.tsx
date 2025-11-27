"use client"

import { Download, X } from "lucide-react"
import { useEffect, useState } from "react"

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>
}

export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null)
  const [isInstallable, setIsInstallable] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const [isAndroid, setIsAndroid] = useState(false)
  const [showIOSInstructions, setShowIOSInstructions] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      return // Already installed, don't show button
    }

    // Check if dismissed in this session
    const dismissed = sessionStorage.getItem("pwa-install-dismissed")
    if (dismissed) {
      setIsDismissed(true)
      return
    }

    // Detect iOS
    const isIOSDevice =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
    setIsIOS(isIOSDevice)

    // Detect Android
    const isAndroidDevice = /Android/.test(navigator.userAgent)
    setIsAndroid(isAndroidDevice)

    // For iOS, always show the button
    if (isIOSDevice) {
      setIsInstallable(true)
      return
    }

    // For Android/Desktop Chrome, listen for beforeinstallprompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      setIsInstallable(true)
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      )
    }
  }, [])

  const handleInstallClick = async () => {
    if (isIOS) {
      // Show iOS instructions
      setShowIOSInstructions(true)
      return
    }

    if (!deferredPrompt) return

    // Show the install prompt
    deferredPrompt.prompt()

    // Wait for the user's response
    const { outcome } = await deferredPrompt.userChoice
    console.log(`User response to the install prompt: ${outcome}`)

    // Clear the deferredPrompt
    setDeferredPrompt(null)
    setIsInstallable(false)
  }

  const handleDismiss = () => {
    setIsDismissed(true)
    sessionStorage.setItem("pwa-install-dismissed", "true")
  }

  const handleCloseInstructions = () => {
    setShowIOSInstructions(false)
  }

  // Don't render if not installable or dismissed
  if (!isInstallable || isDismissed) return null

  return (
    <>
      {/* Install Button */}
      <button
        onClick={handleInstallClick}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-3 font-medium text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95"
        aria-label="Install App"
      >
        <Download className="h-5 w-5" />
        <span className="hidden sm:inline">Install App</span>
      </button>

      {/* iOS Instructions Modal */}
      {showIOSInstructions && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <button
              onClick={handleCloseInstructions}
              className="absolute right-4 top-4 rounded-full p-1 transition-colors hover:bg-gray-100"
              aria-label="Close"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>

            <h3 className="mb-4 text-xl font-bold text-gray-900">
              Install Intel Dashboard
            </h3>

            <div className="space-y-4 text-gray-700">
              <p className="text-sm">
                To install this app on your iPhone or iPad:
              </p>

              <ol className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
                    1
                  </span>
                  <span>
                    Tap the <strong>Share</strong> button{" "}
                    <span className="inline-block rounded bg-gray-100 px-2 py-0.5 text-xs">
                      <svg
                        className="inline h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
                      </svg>
                    </span>{" "}
                    at the bottom of your screen
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
                    2
                  </span>
                  <span>
                    Scroll down and tap{" "}
                    <strong>&quot;Add to Home Screen&quot;</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
                    3
                  </span>
                  <span>
                    Tap <strong>&quot;Add&quot;</strong> in the top right corner
                  </span>
                </li>
              </ol>

              <div className="mt-6 rounded-lg bg-blue-50 p-3 text-sm text-blue-800">
                <p className="font-medium">✨ After installing:</p>
                <p className="mt-1 text-xs">
                  The app will appear on your home screen and work offline!
                </p>
              </div>
            </div>

            <button
              onClick={handleCloseInstructions}
              className="mt-6 w-full rounded-lg bg-blue-600 py-2.5 font-medium text-white transition-colors hover:bg-blue-700"
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      {/* Dismiss Button (small X on the install button) */}
      {!showIOSInstructions && (
        <button
          onClick={handleDismiss}
          className="fixed bottom-[5.5rem] right-6 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 text-white shadow-lg transition-all hover:bg-gray-900"
          aria-label="Dismiss install prompt"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </>
  )
}
