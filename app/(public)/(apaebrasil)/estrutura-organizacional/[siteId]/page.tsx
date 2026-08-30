import { SectionWrapper } from "@/components/section"
import { OrganizationalStructure } from "@/components/organizational-structure/organizational-structure"
import { fetch } from "@/services"
import { Zap } from "lucide-react"

interface PageProps {
  params: Promise<{ siteId: string }>
}

export default async function Page({ params }: PageProps) {
  const { siteId } = await params
  const setores = await fetch.getSetores({ idSite: Number(siteId) })

  return (
    <main className="min-h-dvh overflow-x-hidden bg-blue-50 px-5">
      <div className="container mx-auto">
        <SectionWrapper className="py-10 md:py-24">
          <header className="relative container mx-auto mb-10 overflow-hidden rounded-lg border-2 border-blue-200 bg-blue-100/20 p-6 sm:p-10">
            <div className="pointer-events-none absolute -top-10 -right-8 h-32 w-32 animate-[float_6s_ease-in-out_infinite] rounded-full border-4 border-blue-300 bg-blue-200/40 sm:-top-16 sm:-right-10 sm:h-56 sm:w-56" />

            <div className="relative z-10 flex flex-col gap-5">
              <span className="inline-flex items-center gap-2 text-xs font-bold text-zinc-800 uppercase">
                <Zap size={16} /> Estrutura organizaciona
              </span>

              <h2 className="max-w-2xl text-3xl font-bold text-balance text-black sm:text-4xl md:text-5xl lg:text-6xl">
                A inteligência por trás de cada avanço
              </h2>

              <p className="max-w-2xl text-sm font-normal text-zinc-800">
                Não é apenas quem está no time. É o que acontece quando
                especialidades diferentes se conectam para tornar o impossível
                executável.
              </p>
            </div>
          </header>
        </SectionWrapper>

        <SectionWrapper>
          <OrganizationalStructure setores={setores} />
        </SectionWrapper>
      </div>
    </main>
  )
}
