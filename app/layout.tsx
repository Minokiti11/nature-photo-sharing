import "./globals.css"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"

export const metadata: Metadata = {
  title: "Nature Photo Sharing App",
  description: "Share your photos and comments easily without login",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/placeholder-blur.png"
          type="image/png"
        />
      </head>
      <body className="min-h-screen bg-background">{children}</body>
    </html>
  )
}