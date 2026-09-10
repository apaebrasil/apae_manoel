import Link from "next/link"
import { ArrowRight, User2 } from "lucide-react"
import { SectionHeader } from "@/components/common/section-header"
import { SectionWrapper } from "@/components/section"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { coordenadorias } from "@/constants/coordenadorias-data"

interface PageProps {
  params: Promise<{ siteId: string }>
}

export default async function Page({ params }: PageProps) {
  const { siteId } = await params

  return (
    <div>
      <main className="container mx-auto px-5 lg:px-0">
        <SectionWrapper className="pt-10 md:pt-24">
          <SectionHeader
            subtitle="Coordenadorias Técnicas"
            title="Coordenadorias Técnicas"
            description="Conheça os coordenadores responsáveis por cada área técnica, seus contatos, atividades e os documentos relacionados às suas ações."
          />
        </SectionWrapper>

        <SectionWrapper className="py-10">
          <header className="mb-8">
            <span className="mb-2 block text-xs font-semibold text-blue-400">
              Áreas técnicas
            </span>
            <h2 className="mb-5 text-2xl font-semibold text-blue-950">
              Coordenadorias
            </h2>

            <Separator orientation="horizontal" />
          </header>

          {coordenadorias.length === 0 ? (
            <p className="text-center text-sm text-blue-900/60">
              Nenhuma coordenadoria disponível.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-5 pb-24 sm:grid-cols-2 xl:grid-cols-3">
              {coordenadorias.map((coordenadoria) => (
                <Link
                  key={coordenadoria.id}
                  href={`/institucional/${siteId}/coordenadorias-tecnicas/${coordenadoria.id}`}
                  className="group flex w-full flex-col items-start gap-4 rounded-2xl border-2 border-blue-200 bg-white p-6 text-left shadow-sm shadow-blue-950/5 transition-colors hover:border-blue-300 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-800 group-hover:bg-blue-900 group-hover:text-white">
                    <User2 className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-blue-950">
                      {coordenadoria.area}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-blue-900/70">
                      {coordenadoria.coordenador}
                    </p>
                  </div>

                  <div className="mt-auto flex w-full items-center justify-between pt-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      {coordenadoria.documentos.length}{" "}
                      {coordenadoria.documentos.length === 1
                        ? "documento"
                        : "documentos"}
                    </Badge>

                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 opacity-0 transition-opacity group-hover:opacity-100">
                      Ver coordenadoria
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </SectionWrapper>
      </main>
    </div>
  )
}
