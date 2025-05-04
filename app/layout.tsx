import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import MobileBottomNav from "@/components/mobile-bottom-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "UPYOG Community Hall Booking System",
  description: "Book community facilities easily with UPYOG",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <MobileBottomNav />
          {/* Add padding to prevent content from being hidden behind the bottom nav on mobile */}
          <div className="h-16 md:h-0"></div>
        </ThemeProvider>
      </body>
    </html>
  )
}
