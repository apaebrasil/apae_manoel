import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ChevronLeft,
  ChevronRight,
  Download,
  ListChecks,
  Mail,
  Phone,
  User2,
} from "lucide-react"
import { SectionWrapper } from "@/components/section"
import { DocumentIcon } from "@/components/transparency/document-icon"
import { Button } from "@/components/ui/button"
import { coordenadorias } from "@/constants/coordenadorias-data"

interface PageProps {
  params: Promise<{ siteId: string; coordenadoria: string }>
}

export default async function Page({ params }: PageProps) {
  const { siteId, coordenadoria } = await params
  const coordenadoriaId = Number(coordenadoria)

  const coordenadoriaInfo = coordenadorias.find(
    (item) => item.id === coordenadoriaId
  )

  if (!coordenadoriaInfo) {
    notFound()
  }

  return (
    <main className="min-h-dvh overflow-x-hidden bg-blue-50 px-5">
      <div className="container mx-auto">
        <SectionWrapper className="py-10 md:py-16">
          <nav
            aria-label="Navegação de coordenadorias"
            className="mb-6 flex items-center gap-1.5 text-sm"
          >
            <Link
              href={`/institucional/${siteId}/coordenadorias-tecnicas`}
              className="font-semibold text-blue-600 hover:text-blue-800"
            >
              Coordenadorias Técnicas
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-blue-300" />
            <span className="font-semibold text-blue-950">
              {coordenadoriaInfo.area}
            </span>
          </nav>

          <div className="rounded-2xl border-2 border-blue-200 bg-white p-6 shadow-sm shadow-blue-950/5 sm:p-8">
            <div className="flex flex-col items-start gap-5 border-b border-blue-900/10 pb-6 sm:flex-row sm:items-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-800">
                <User2 className="h-8 w-8" />
              </div>

              <div className="flex-1">
                <span className="inline-flex w-fit items-center rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase shadow-sm shadow-blue-600/30">
                  {coordenadoriaInfo.area}
                </span>

                <h1 className="mt-3 text-2xl font-bold text-blue-950">
                  {coordenadoriaInfo.coordenador}
                </h1>
                <p className="text-sm text-blue-900/70">
                  {coordenadoriaInfo.cargo}
                </p>
              </div>

              <div className="flex flex-col gap-2 text-sm text-blue-900/80">
                <a
                  href={`mailto:${coordenadoriaInfo.email}`}
                  className="inline-flex items-center gap-2 hover:text-blue-700"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {coordenadoriaInfo.email}
                </a>
                <a
                  href={`tel:${coordenadoriaInfo.telefone}`}
                  className="inline-flex items-center gap-2 hover:text-blue-700"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {coordenadoriaInfo.telefone}
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 pt-6 md:grid-cols-2">
              <div>
                <h2 className="mb-3 text-sm font-bold text-blue-950 uppercase">
                  Sobre a coordenadoria
                </h2>
                <p className="text-sm leading-relaxed text-zinc-700">
                  {coordenadoriaInfo.descricao}
                </p>
              </div>

              <div>
                <h2 className="mb-3 flex items-center gap-2 text-sm font-bold text-blue-950 uppercase">
                  <ListChecks className="h-4 w-4" />
                  Atividades
                </h2>
                <ul className="space-y-2">
                  {coordenadoriaInfo.atividades.map((atividade) => (
                    <li
                      key={atividade}
                      className="flex items-start gap-2 text-sm text-zinc-700"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                      {atividade}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border-2 border-blue-200 bg-white p-5 shadow-sm shadow-blue-950/5 sm:p-6">
            <h2 className="mb-4 text-sm font-bold text-blue-950 uppercase">
              Documentos relacionados
            </h2>

            <div className="space-y-1">
              {coordenadoriaInfo.documentos.length === 0 ? (
                <p className="py-10 text-center text-sm text-zinc-600">
                  Nenhum documento disponível.
                </p>
              ) : (
                coordenadoriaInfo.documentos.map((documento) => (
                  <div
                    key={documento.id}
                    className="group flex items-center gap-3 rounded-lg border border-transparent px-3 py-3 transition-colors hover:border-blue-200 hover:bg-blue-50/60"
                  >
                    <DocumentIcon tipo={documento.tipo} />

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-zinc-900">
                        {documento.nome}
                      </p>
                      <p className="text-xs text-zinc-500">
                        {documento.tipo.toUpperCase()} · {documento.tamanho}
                      </p>
                    </div>

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
            href={`/institucional/${siteId}/coordenadorias-tecnicas`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800"
          >
            <ChevronLeft className="h-4 w-4" />
            Voltar às coordenadorias
          </Link>
        </SectionWrapper>
      </div>
    </main>
  )
}
