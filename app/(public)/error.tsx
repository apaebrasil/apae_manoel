"use client"

import { useEffect } from "react"
import Link from "next/link"
import { RefreshCcw, TriangleAlert } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-[80svh] items-center justify-center px-4 py-16">
      <div className="relative container mx-auto max-w-2xl overflow-hidden rounded-lg border-2 border-blue-200 bg-blue-100/20 p-8 text-center sm:p-14">
        <div className="pointer-events-none absolute -top-10 -right-8 h-32 w-32 animate-[float_6s_ease-in-out_infinite] rounded-full border-4 border-blue-300 bg-blue-200/40 sm:-top-16 sm:-right-10 sm:h-56 sm:w-56" />

        <div className="relative z-10 flex flex-col items-center gap-5">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-blue-300 bg-white p-4 text-blue-600">
            <TriangleAlert size={32} />
          </span>

          <h2 className="text-3xl font-bold text-balance text-black sm:text-4xl">
            Algo deu errado
          </h2>

          <p className="max-w-md text-sm font-normal text-zinc-700 sm:text-base">
            Encontramos um problema inesperado ao carregar esta página. Tente
            novamente ou volte para o início.
          </p>

          {process.env.NODE_ENV === "development" && (
            <pre className="max-w-full overflow-auto rounded-md bg-white/70 p-3 text-left text-xs text-zinc-600">
              {error.message}
              {error.digest ? `\n\nDigest: ${error.digest}` : ""}
            </pre>
          )}

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button onClick={() => reset()}>
              <RefreshCcw className="size-4" />
              Tentar novamente
            </Button>
            <Button variant="outline" render={<Link href="/" />}>
              Voltar para o início
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
