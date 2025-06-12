import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Atya Patya Tiruvalur | Traditional Sports Excellence",
  description:
    "Official website of Atya Patya in Tiruvalur district. Discover the rich heritage, tournaments, and community of Tamil Nadu's traditional sport.",
  keywords: "Atya Patya, Tiruvalur, Tamil Nadu, traditional sports, kabaddi, tournaments, cultural heritage",
  authors: [{ name: "Tiruvalur District Sports Authority" }],
  openGraph: {
    title: "Atya Patya Tiruvalur | Traditional Sports Excellence",
    description: "Official website of Atya Patya in Tiruvalur district",
    type: "website",
    locale: "en_IN",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
