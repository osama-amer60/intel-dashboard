import { Home, WifiOff } from "lucide-react"
import Link from "next/link"

export default function OfflinePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="w-full max-w-md text-center">
        <div className="mb-8 flex justify-center">
          <div className="rounded-full bg-blue-100 p-6">
            <WifiOff className="h-16 w-16 text-blue-600" />
          </div>
        </div>

        <h1 className="mb-4 text-3xl font-bold text-gray-900">
          You&apos;re Offline
        </h1>

        <p className="mb-8 text-lg text-gray-600">
          It looks like you&apos;ve lost your internet connection. Some features
          may not be available right now.
        </p>

        <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-3 text-xl font-semibold text-gray-800">
            What you can do:
          </h2>
          <ul className="space-y-2 text-left text-gray-700">
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-blue-600">✓</span>
              <span>Check your internet connection</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-blue-600">✓</span>
              <span>Browse previously loaded pages</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-blue-600">✓</span>
              <span>Try refreshing the page once you&apos;re back online</span>
            </li>
          </ul>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
        >
          <Home className="h-5 w-5" />
          Go to Home
        </Link>

        <p className="mt-8 text-sm text-gray-500">
          Intel Dashboard - PWA Enabled
        </p>
      </div>
    </div>
  )
}
