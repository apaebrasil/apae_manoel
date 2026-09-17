import "./globals.css"
import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"
import Link from "next/link"
import { Compass, SearchX } from "lucide-react"

import { cn } from "@/lib/utils"
import { StatusPanel } from "@/components/common/status-panel"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Página não encontrada",
  description: "A página que você está procurando não existe.",
}

export default function GlobalNotFound() {
  return (
    <html
      lang="pt-BR"
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body>
        <div className="flex min-h-svh items-center justify-center px-4 py-16">
          <StatusPanel
            icon={SearchX}
            titleAs="h1"
            code={
              <span className="text-6xl font-bold text-blue-600 sm:text-7xl">
                404
              </span>
            }
            title="Página não encontrada"
            description="O endereço acessado não existe ou pode ter sido movido. Volte para o início ou encontre a APAE mais próxima de você."
            actions={
              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/"
                  className="rounded-lg border border-blue-300 px-3 py-2"
                >
                  Voltar para o início
                </Link>
                <Link
                  href="/encontre-apae"
                  className="flex items-center gap-3 rounded-lg bg-blue-400 px-3 py-2 text-white"
                >
                  <Compass className="size-4" />
                  Encontrar uma APAE
                </Link>
              </div>
            }
          />
        </div>
      </body>
    </html>
  )
}
