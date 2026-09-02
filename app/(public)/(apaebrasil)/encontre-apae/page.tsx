import { SectionWrapper } from "@/components/section"
import { Zap } from "lucide-react"

export default function Page() {
  return (
    <main>
      <SectionWrapper className="py-10 md:py-24">
        <header className="relative container mx-auto mb-10 overflow-hidden rounded-lg border-2 border-blue-200 bg-blue-100/20 p-6 sm:p-10">
          <div className="pointer-events-none absolute -top-10 -right-8 h-32 w-32 animate-[float_6s_ease-in-out_infinite] rounded-full border-4 border-blue-300 bg-blue-200/40 sm:-top-16 sm:-right-10 sm:h-56 sm:w-56" />

          <div className="relative z-10 flex flex-col gap-5">
            <span className="inline-flex items-center gap-2 text-xs font-bold text-zinc-800 uppercase">
              <Zap size={16} /> Encontre uma unidade
            </span>

            <h2 className="max-w-2xl text-3xl font-bold text-balance text-black sm:text-4xl md:text-5xl lg:text-6xl">
              Localize a APAE mais perto.
            </h2>

            <p className="max-w-2xl text-sm font-normal text-zinc-800">
              Encontre atendimento, apoio e informação onde você estiver.
            </p>
          </div>
        </header>
      </SectionWrapper>
    </main>
  )
}
