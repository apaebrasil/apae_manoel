import Link from "next/link"
import { ChevronRight, Download } from "lucide-react"
import { formatedDate } from "@/lib/formated-date"
import { Button } from "@/components/ui/button"
import { DocumentIcon } from "./document-icon"
import { Documento } from "./type"

interface DocumentRowProps {
  documento: Documento
  siteId: string
  categoriaId: number
}

export function DocumentRow({
  documento,
  siteId,
  categoriaId,
}: DocumentRowProps) {
  return (
    <div className="group flex items-center gap-3 rounded-lg border border-transparent px-3 py-3 transition-colors hover:border-blue-200 hover:bg-blue-50/60">
      <Link
        href={`/transparencia/${siteId}/${categoriaId}/${documento.id}`}
        className="flex min-w-0 flex-1 items-center gap-3"
      >
        <DocumentIcon tipo={documento.tipo} />

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-zinc-900 group-hover:text-blue-700">
            {documento.nome} - {documento.ano}
          </p>
          <p className="text-xs text-zinc-500">
            {documento.tipo.toUpperCase()} · {documento.tamanho} · criado em{" "}
            {formatedDate({
              dayOfMonth: documento.criadoEm.dayOfMonth,
              monthValue: documento.criadoEm.monthValue,
              year: documento.criadoEm.year,
            })}
          </p>
        </div>

        <ChevronRight className="h-4 w-4 shrink-0 text-blue-300 opacity-0 transition-opacity group-hover:opacity-100" />
      </Link>

      <Button
        variant="outline"
        size="sm"
        className="shrink-0"
        nativeButton={false}
        title={documento.nome}
        render={
          <a
            href={documento.link}
            target="_blank"
            rel="noopener noreferrer"
            download={documento.link}
            title={documento.nome}
          />
        }
      >
        <Download className="h-3.5 w-3.5" />
        Baixar
      </Button>
    </div>
  )
}
