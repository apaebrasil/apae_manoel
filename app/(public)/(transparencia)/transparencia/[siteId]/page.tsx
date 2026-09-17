import { ShieldCheck } from "lucide-react"
import { SectionWrapper } from "@/components/section"
import { SectionHeader } from "@/components/common/section-header"
import { CategoryCard } from "@/components/transparency/category-card"
import { fetch } from "@/services"

interface PageProps {
  params: Promise<{ siteId: string }>
}

export default async function Page({ params }: PageProps) {
  const { siteId } = await params
  const [categorias, documentos] = await Promise.all([
    fetch.getCategorias({ siteId: Number(siteId) }),
    fetch.getDocumentos(),
  ])
  const categoriasOrdenadas = categorias.toSorted((a, b) => a.ordem - b.ordem)

  const contagemPorCategoria = new Map<number, number>()
  for (const documento of documentos) {
    contagemPorCategoria.set(
      documento.idCategoria,
      (contagemPorCategoria.get(documento.idCategoria) ?? 0) + 1
    )
  }

  return (
    <main className="min-h-dvh overflow-x-hidden bg-blue-50 px-5">
      <div className="container mx-auto">
        <SectionWrapper className="py-10 md:py-24">
          <SectionHeader
            variant="badge"
            as="h1"
            icon={ShieldCheck}
            subtitle="Portal da transparência"
            title="Transparência é compromisso com quem confia em nós"
            description="Acesse estatutos, relatórios e demais documentos institucionais organizados por categoria."
          />
        </SectionWrapper>

        <SectionWrapper className="pb-16 md:pb-24">
          {categoriasOrdenadas.length === 0 ? (
            <p className="text-center text-sm text-blue-900/60">
              Nenhuma categoria de documentos disponível.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {categoriasOrdenadas.map((categoria, index) => (
                <CategoryCard
                  key={categoria.id}
                  categoria={categoria}
                  siteId={siteId}
                  documentCount={contagemPorCategoria.get(categoria.id) ?? 0}
                  index={index}
                />
              ))}
            </div>
          )}
        </SectionWrapper>
      </div>
    </main>
  )
}
