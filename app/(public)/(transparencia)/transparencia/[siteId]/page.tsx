import { ShieldCheck } from "lucide-react"
import { SectionWrapper } from "@/components/section"
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
          <header className="relative container mx-auto mb-10 overflow-hidden rounded-lg border-2 border-blue-200 bg-blue-100/20 p-6 sm:p-10">
            <div className="pointer-events-none absolute -top-10 -right-8 h-32 w-32 animate-[float_6s_ease-in-out_infinite] rounded-full border-4 border-blue-300 bg-blue-200/40 sm:-top-16 sm:-right-10 sm:h-56 sm:w-56" />

            <div className="relative z-10 flex flex-col gap-5">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase shadow-sm shadow-blue-600/30">
                <ShieldCheck className="h-3.5 w-3.5" />
                Portal da transparência
              </span>

              <h1 className="max-w-2xl text-3xl font-bold text-balance text-blue-950 sm:text-4xl md:text-5xl lg:text-6xl">
                Transparência é compromisso com quem confia em nós
              </h1>

              <p className="max-w-2xl text-base font-normal text-blue-900/80">
                Acesse estatutos, prestações de contas, relatórios e demais
                documentos institucionais organizados por categoria.
              </p>
            </div>
          </header>
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
