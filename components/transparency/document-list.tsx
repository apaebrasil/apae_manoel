"use client"

import { useMemo, useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { DocumentRow } from "./document-row"
import { Documento } from "./type"

interface DocumentListProps {
  documentos: Documento[]
  siteId: string
  categoriaId: number
}

export function DocumentList({
  documentos,
  siteId,
  categoriaId,
}: DocumentListProps) {
  const [search, setSearch] = useState("")

  const documentosFiltrados = useMemo(() => {
    const termo = search.trim().toLowerCase()
    if (!termo) return documentos

    return documentos.filter((documento) =>
      documento.nome.toLowerCase().includes(termo)
    )
  }, [documentos, search])

  return (
    <div>
      <div className="flex w-full justify-end pb-5">
        <div className="relative w-full sm:max-w-xs">
          <Search
            className="absolute top-1/2 left-2 -translate-y-1/2 text-blue-500"
            size={14}
            aria-hidden="true"
          />
          <Input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Buscar documento"
            aria-label="Buscar documento"
            className="w-full pr-3 pl-9 text-sm outline-none focus-visible:border-blue-400 focus-visible:ring-3 focus-visible:ring-blue-400/50"
          />
        </div>
      </div>

      <div className="space-y-1">
        {documentosFiltrados.length === 0 ? (
          <p className="py-10 text-center text-sm text-zinc-600">
            Nenhum documento encontrado.
          </p>
        ) : (
          documentosFiltrados.map((documento) => (
            <DocumentRow
              key={documento.id}
              documento={documento}
              siteId={siteId}
              categoriaId={categoriaId}
            />
          ))
        )}
      </div>
    </div>
  )
}
