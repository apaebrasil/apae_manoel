import Link from "next/link"
import { ArrowRight, HeartHandshake, Lightbulb, Megaphone, Users } from "lucide-react"

import { SectionWrapper } from "@/components/section"

const opportunities = [
  { icon: Users, title: "Apoio em eventos", text: "Ajude na organização de campanhas, encontros e ações de conscientização." },
  { icon: Lightbulb, title: "Compartilhe seu talento", text: "Coloque seus conhecimentos em comunicação, tecnologia, educação ou gestão a serviço da inclusão." },
  { icon: Megaphone, title: "Mobilize sua comunidade", text: "Amplie a conversa sobre direitos e fortaleça a presença da causa onde você vive." },
]

export default function Page() {
  return (
    <main className="container mx-auto">
      <SectionWrapper className="px-5 py-10 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-blue-700 uppercase"><HeartHandshake size={16} /> Seja voluntário</span>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold text-blue-950 sm:text-6xl">Seu tempo pode abrir novos caminhos.</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-700">A Rede Apae reúne pessoas dispostas a transformar disponibilidade, conhecimento e cuidado em oportunidades para pessoas com deficiência intelectual e múltipla.</p>
            <a href="mailto:voluntariado@apaebrasil.org.br?subject=Quero%20ser%20voluntário" className="mt-8 inline-flex items-center gap-2 rounded-md bg-blue-950 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-900">Quero fazer parte <ArrowRight size={17} /></a>
          </div>
          <div className="rounded-2xl bg-blue-100 p-8 sm:p-10">
            <p className="text-sm font-bold tracking-widest text-blue-700 uppercase">Uma escolha com impacto</p>
            <p className="mt-6 text-3xl font-bold leading-tight text-blue-950">Quando você participa, uma rede inteira fica mais forte.</p>
            <p className="mt-5 text-sm leading-relaxed text-blue-900/80">Conte para a gente quais são seus interesses, sua disponibilidade e a cidade onde gostaria de contribuir. A equipe encaminhará você para a melhor oportunidade.</p>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper className="bg-blue-50 px-5 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center"><span className="text-sm font-bold tracking-widest text-blue-700 uppercase">Como contribuir</span><h2 className="mt-3 text-3xl font-bold text-blue-950 sm:text-4xl">Há um lugar para o que você sabe fazer</h2></div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {opportunities.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl border border-blue-100 bg-white p-6"><div className="flex size-11 items-center justify-center rounded-full bg-blue-100 text-blue-800"><Icon size={20} /></div><h3 className="mt-5 text-lg font-bold text-blue-950">{title}</h3><p className="mt-3 text-sm leading-relaxed text-zinc-700">{text}</p></article>)}
        </div>
      </SectionWrapper>
      <SectionWrapper className="px-5 py-16 text-center md:py-24"><h2 className="text-3xl font-bold text-blue-950">Prefere conhecer uma unidade primeiro?</h2><p className="mx-auto mt-3 max-w-xl text-zinc-700">Veja as APAEs mais próximas e encontre uma forma de participar na sua região.</p><Link href="/encontre-apae" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-800 hover:underline">Encontrar uma APAE <ArrowRight size={16} /></Link></SectionWrapper>
    </main>
  )
}
