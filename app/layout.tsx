import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SolTrack',
  description: 'SolTrack is a blockchain-based platform for tracking and verifying carbon offsets and climate impact claims.',
  generator: 'SolTrack',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
