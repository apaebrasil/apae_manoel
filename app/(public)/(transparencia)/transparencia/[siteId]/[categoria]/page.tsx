import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronLeft, ChevronRight, FolderOpen } from "lucide-react"
import { SectionWrapper } from "@/components/section"
import { DocumentList } from "@/components/transparency/document-list"
import { fetch } from "@/services"

interface PageProps {
  params: Promise<{ siteId: string; categoria: string }>
}

export default async function Page({ params }: PageProps) {
  const { siteId, categoria } = await params
  const categoriaId = Number(categoria)

  const categorias = await fetch.getCategorias({ siteId: Number(siteId) })
  const categoriaInfo = categorias.find((item) => item.id === categoriaId)

  if (!categoriaInfo) notFound()

  const documentos = await fetch.getDocumentos({ idCategoria: categoriaId })
  const documentosOrdenados = documentos.toSorted((a, b) => a.ordem - b.ordem)

  return (
    <main className="min-h-dvh overflow-x-hidden bg-blue-50 px-5">
      <div className="container mx-auto">
        <SectionWrapper className="py-10 md:py-16">
          <nav
            aria-label="Navegação de pastas"
            className="mb-6 flex items-center gap-1.5 text-sm"
          >
            <Link
              href={`/transparencia/${siteId}`}
              className="font-semibold text-blue-600 hover:text-blue-800"
            >
              Transparência
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

            <DocumentList
              documentos={documentosOrdenados}
              siteId={siteId}
              categoriaId={categoriaId}
            />
          </div>

          <Link
            href={`/transparencia/${siteId}`}
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
