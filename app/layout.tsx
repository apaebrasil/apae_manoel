import { Geist_Mono, Inter } from "next/font/google"

import { cn } from "@/lib/utils"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AccessibilityMenu } from "@/components/accessibility-menu"
import { Toaster } from "@/components/ui/toast"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body>
        <Header />
        {children}

        <Footer  />

        <AccessibilityMenu />
        {/* <DonationFloat /> */}
        <Toaster />
      </body>
    </html>
  )
}
