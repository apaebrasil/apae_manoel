import Link from "next/link"
import { SearchX } from "lucide-react"

import { StatusPanel } from "@/components/common/status-panel"

export default function NotFound() {
  return (
    <main className="flex min-h-[80svh] items-center justify-center px-4 py-16">
      <StatusPanel
        icon={SearchX}
        titleAs="h1"
        title="Página não encontrada"
        description="O endereço acessado não existe ou pode ter sido movido. Volte para o início ou encontre a APAE mais próxima de você."
        actions={
          <Link
            href="/"
            className="rounded-lg border border-blue-300 px-3 py-2 text-sm font-medium text-blue-900 hover:bg-blue-50"
          >
            Voltar para o início
          </Link>
        }
      />
    </main>
  )
}
