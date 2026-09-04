import "./globals.css"
import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"
import Link from "next/link"
import { Compass, SearchX } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

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
          <div className="relative container mx-auto max-w-2xl overflow-hidden rounded-lg border-2 border-blue-200 bg-blue-100/20 p-8 text-center sm:p-14">
            <div className="pointer-events-none absolute -top-10 -right-8 h-32 w-32 animate-[float_6s_ease-in-out_infinite] rounded-full border-4 border-blue-300 bg-blue-200/40 sm:-top-16 sm:-right-10 sm:h-56 sm:w-56" />

            <div className="relative z-10 flex flex-col items-center gap-5">
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-blue-300 bg-white p-4 text-blue-600">
                <SearchX size={32} />
              </span>

              <span className="text-6xl font-bold text-blue-600 sm:text-7xl">
                404
              </span>

              <h1 className="text-3xl font-bold text-balance text-black sm:text-4xl">
                Página não encontrada
              </h1>

              <p className="max-w-md text-sm font-normal text-zinc-700 sm:text-base">
                O endereço acessado não existe ou pode ter sido movido. Volte
                para o início ou encontre a APAE mais próxima de você.
              </p>

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
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
