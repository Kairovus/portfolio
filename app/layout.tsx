import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes" // <- use directly

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MemoryLeaked | Portfolio",
  description: "Professional portfolio of MemoryLeaked - Software Developer",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
