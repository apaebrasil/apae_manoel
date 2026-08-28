import { SectionWrapper } from "@/components/section"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  ArrowRight,
  Briefcase,
  Code2,
  DollarSign,
  Search,
  Star,
  Users2,
  Zap,
} from "lucide-react"

export default function Page() {
  return (
    <main className="h-dvh bg-blue-50">
      <div className="container mx-auto">
        <SectionWrapper className="py-16 md:py-24">
          <header className="relative container mx-auto mb-10 overflow-hidden rounded-lg border-2 border-blue-200 p-10 bg-blue-100/20">
            <div className="pointer-events-none absolute -top-16 -right-10 h-56 w-56 animate-[float_6s_ease-in-out_infinite] rounded-full border-4 border-blue-300 bg-blue-200/40" />

            <div className="relative z-10 flex flex-col gap-5">
              <span className="inline-flex items-center gap-2 text-xs font-bold text-zinc-800 uppercase">
                <Zap size={16} /> Estrutura organizaciona
              </span>

              <h2 className="max-w-2xl text-6xl font-bold text-black">
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

        <SectionWrapper className="flex gap-8">
          <div className="shrink-0">
            <div className="w-72 rounded-md border-2 border-blue-200 bg-blue-100 p-3">
              <h3 className="mb-3.5 text-xs font-bold text-zinc-800">
                Navegar por disciplina
              </h3>

              <ul className="space-y-1 pt-3">
                <li className="group flex cursor-pointer items-center justify-between gap-2 rounded-md p-3 text-sm transition-colors hover:bg-white hover:shadow-sm">
                  <div className="flex items-center gap-2">
                    <Users2 size={14} />
                    <span>Todos os departamentos</span>
                  </div>

                  <ArrowRight size={14} className="hidden group-hover:block" />
                </li>
                <li className="group flex w-64 cursor-pointer items-center justify-between gap-2 rounded-md p-3 text-sm transition-colors hover:bg-white hover:shadow-sm">
                  <div className="flex items-center gap-2">
                    <Star size={14} />
                    <span>Diretoria executiva</span>
                  </div>
                  <ArrowRight size={14} className="hidden group-hover:block" />
                </li>
                <li className="group flex w-64 cursor-pointer items-center justify-between gap-2 rounded-md p-3 text-sm transition-colors hover:bg-white hover:shadow-sm">
                  <div className="flex items-center gap-2">
                    <Code2 size={14} />
                    <span>TI</span>
                  </div>
                  <ArrowRight size={14} className="hidden group-hover:block" />
                </li>
                <li className="group flex w-64 cursor-pointer items-center justify-between gap-2 rounded-md p-3 text-sm transition-colors hover:bg-white hover:shadow-sm">
                  <div className="flex items-center gap-2">
                    <Briefcase size={14} />
                    <span>RH</span>
                  </div>
                  <ArrowRight size={14} className="hidden group-hover:block" />
                </li>
                <li className="group flex w-64 cursor-pointer items-center justify-between gap-2 rounded-md p-3 text-sm transition-colors hover:bg-white hover:shadow-sm">
                  <div className="flex items-center gap-2">
                    <DollarSign size={14} />
                    <span>Financeiros</span>
                  </div>
                  <ArrowRight size={14} className="hidden group-hover:block" />
                </li>
              </ul>
            </div>
          </div>
          <div className="min-w-0 flex-1 border-l-2 border-blue-200 pl-8">
            <div role="searchbox" className="flex w-full justify-end pb-5">
              <div className="relative right-0 max-w-7xl">
                <Search
                  className="absolute top-1/2 left-2 -translate-y-1/2 text-blue-500"
                  size={14}
                />
                <Input
                  placeholder="Buscar pessoa ou área"
                  className="w-full pr-3 pl-9 text-base outline-none focus-visible:border-blue-400 focus-visible:ring-3 focus-visible:ring-blue-400/50"
                />
              </div>
            </div>
            <Separator />
          </div>
        </SectionWrapper>
      </div>
    </main>
  )
}
