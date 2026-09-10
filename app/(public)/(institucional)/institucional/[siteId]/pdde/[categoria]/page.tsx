import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronLeft, ChevronRight, Download, FolderOpen } from "lucide-react"
import { SectionWrapper } from "@/components/section"
import { DocumentIcon } from "@/components/transparency/document-icon"
import { Button } from "@/components/ui/button"
import { categoriasPdde } from "@/constants/pdde-data"

interface PageProps {
  params: Promise<{ siteId: string; categoria: string }>
}

export default async function Page({ params }: PageProps) {
  const { siteId, categoria } = await params
  const categoriaId = Number(categoria)

  const categoriaInfo = categoriasPdde.find((item) => item.id === categoriaId)

  if (!categoriaInfo) {
    notFound()
  }

  return (
    <main className="min-h-dvh overflow-x-hidden bg-blue-50 px-5">
      <div className="container mx-auto">
        <SectionWrapper className="py-10 md:py-16">
          <nav
            aria-label="Navegação de pastas"
            className="mb-6 flex items-center gap-1.5 text-sm"
          >
            <Link
              href={`/institucional/${siteId}/pdde`}
              className="font-semibold text-blue-600 hover:text-blue-800"
            >
              PDDE
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-blue-300" />
            <span className="font-semibold text-blue-950">
              {categoriaInfo.titulo}
            </span>
          </nav>

          <div className="rounded-2xl border-2 border-blue-200 bg-white p-5 shadow-sm shadow-blue-950/5 sm:p-6">
            <div className="flex items-center gap-3 pb-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-800">
                <FolderOpen className="h-5 w-5" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-blue-950">
                  {categoriaInfo.titulo}
                </h1>
                <p className="text-sm text-blue-900/70">
                  {categoriaInfo.descricao}
                </p>
              </div>
            </div>

            <div className="space-y-1">
              {categoriaInfo.documentos.length === 0 ? (
                <p className="py-10 text-center text-sm text-zinc-600">
                  Nenhum documento encontrado.
                </p>
              ) : (
                categoriaInfo.documentos.map((documento) => (
                  <div
                    key={documento.id}
                    className="group flex items-center gap-3 rounded-lg border border-transparent px-3 py-3 transition-colors hover:border-blue-200 hover:bg-blue-50/60"
                  >
                    <Link
                      href={`/institucional/${siteId}/pdde/${categoriaId}/${documento.id}`}
                      className="flex min-w-0 flex-1 items-center gap-3"
                    >
                      <DocumentIcon tipo={documento.tipo} />

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-zinc-900 group-hover:text-blue-700">
                          {documento.nome}
                        </p>
                        <p className="text-xs text-zinc-500">
                          {documento.tipo.toUpperCase()} · {documento.tamanho}
                        </p>
                      </div>

                      <ChevronRight className="h-4 w-4 shrink-0 text-blue-300 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>

                    <Button
                      variant="outline"
                      size="sm"
                      className="shrink-0"
                      nativeButton={false}
                      render={
                        <a
                          href={documento.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                    >
                      <Download className="h-3.5 w-3.5" />
                      Baixar
                    </Button>
                  </div>
                ))
              )}
            </div>
          </div>

          <Link
            href={`/institucional/${siteId}/pdde`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800"
          >
            <ChevronLeft className="h-4 w-4" />
            Voltar às pastas
          </Link>
        </SectionWrapper>
      </div>
    </main>
  )
}
