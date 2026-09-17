import Link from "next/link"
import { notFound } from "next/navigation"
import { CalendarDays, Download, User2 } from "lucide-react"
import { SectionWrapper } from "@/components/section"
import { BackLink } from "@/components/common/back-link"
import { DetailHeader } from "@/components/common/detail-header"
import { DocumentIcon } from "@/components/transparency/document-icon"
import { formatedDate } from "@/lib/formated-date"
import { fetch } from "@/services"

interface PageProps {
  params: Promise<{ siteId: string; categoria: string; documentId: string }>
}

export default async function Page({ params }: PageProps) {
  const { siteId, categoria, documentId } = await params
  const categoriaId = Number(categoria)

  const categorias = await fetch.getCategorias({ siteId: Number(siteId) })
  const categoriaInfo = categorias.find((item) => item.id === categoriaId)

  const documentos = await fetch.getDocumentos({ idCategoria: categoriaId })
  const documento = documentos.find((item) => String(item.id) === documentId)

  if (!categoriaInfo) {
    notFound()
  }

  if (!documento) {
    notFound()
  }

  const outrosDocumentos = documentos
    .filter((item) => item.id !== documento.id)
    .toSorted((a, b) => a.ordem - b.ordem)

  return (
    <main className="min-h-dvh overflow-x-hidden bg-blue-50 px-5">
      <SectionWrapper className="py-8 md:py-16">
        <article className="container mx-auto max-w-3xl">
          <BackLink href={`/transparencia/${siteId}/${categoriaId}`}>
            Voltar para {categoriaInfo.titulo}
          </BackLink>

          <DetailHeader
            badge={categoriaInfo.titulo}
            title={`${documento.nome} - ${documento.ano}`}
            meta={[
              {
                label: `${documento.tipo.toUpperCase()} · ${documento.tamanho}`,
                emphasis: true,
              },
              {
                icon: CalendarDays,
                label: `Criado em ${formatedDate({
                  dayOfMonth: documento.criadoEm.dayOfMonth,
                  monthValue: documento.criadoEm.monthValue,
                  year: documento.criadoEm.year,
                })}`,
              },
              ...(documento.criadoPor
                ? [{ icon: User2, label: documento.criadoPor }]
                : []),
            ]}
          />

          <div className="flex flex-col items-center gap-5 rounded-2xl border-2 border-blue-200 bg-white p-10 text-center shadow-sm shadow-blue-950/5 sm:flex-row sm:text-left">
            <DocumentIcon
              tipo={documento.tipo}
              className="h-16 w-16 rounded-2xl"
              iconClassName="h-8 w-8"
            />

            <div className="flex-1">
              <p className="text-sm text-blue-900/70">
                {documento.descricao ||
                  `Documento disponível para download no formato ${documento.tipo.toUpperCase()}.`}
              </p>
            </div>

            <a
              href={documento.link}
              target="_blank"
              rel="noopener noreferrer"

              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-600/30 transition-colors hover:bg-blue-700"
            >
              <Download className="h-4 w-4" />
              Baixar documento
            </a>
          </div>

          {outrosDocumentos.length > 0 && (
            <div className="mt-10 border-t border-blue-900/10 pt-8">
              <h2 className="mb-4 text-sm font-bold text-blue-950 uppercase">
                Outros documentos em {categoriaInfo.titulo}
              </h2>

              <ul className="space-y-1">
                {outrosDocumentos.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/transparencia/${siteId}/${categoriaId}/${item.id}`}
                      className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-white"
                    >
                      <DocumentIcon tipo={item.tipo} className="h-9 w-9" />
                      <span className="min-w-0 flex-1 truncate text-sm font-medium text-blue-950 group-hover:text-blue-700">
                        {item.nome}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-10 border-t border-blue-900/10 pt-6">
            <BackLink
              href={`/transparencia/${siteId}/${categoriaId}`}
              variant="pill"
            >
              Ver outros documentos
            </BackLink>
          </div>
        </article>
      </SectionWrapper>
    </main>
  )
}
