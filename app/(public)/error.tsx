"use client"

import { useEffect } from "react"
import Link from "next/link"
import { RefreshCcw, TriangleAlert } from "lucide-react"

import { Button } from "@/components/ui/button"
import { StatusPanel } from "@/components/common/status-panel"

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
      <StatusPanel
        icon={TriangleAlert}
        title="Algo deu errado"
        description="Encontramos um problema inesperado ao carregar esta página. Tente novamente ou volte para o início."
        extra={
          process.env.NODE_ENV === "development" && (
            <pre className="max-w-full overflow-auto rounded-md bg-white/70 p-3 text-left text-xs text-zinc-600">
              {error.message}
              {error.digest ? `\n\nDigest: ${error.digest}` : ""}
            </pre>
          )
        }
        actions={
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button onClick={() => reset()}>
              <RefreshCcw className="size-4" />
              Tentar novamente
            </Button>
            <Button variant="outline" render={<Link href="/" />}>
              Voltar para o início
            </Button>
          </div>
        }
      />
    </div>
  )
}
