import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Budget Management System-BN',
  description: 'A comprehensive budget management system for efficient financial planning and tracking.',
  keywords: 'budget, management, financial planning, tracking, BN',
  authors: [{ name: 'Mahfuz Islam', }],
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
