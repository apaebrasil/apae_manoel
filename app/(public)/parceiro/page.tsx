import Link from "next/link"
import { ArrowRight, Building2, CheckCircle2, Handshake, Heart, Users } from "lucide-react"

import { SectionWrapper } from "@/components/section"

const benefits = [
  { icon: Heart, title: "Impacto que chega na ponta", text: "Apoie serviços que promovem autonomia, cuidado e inclusão em todo o país." },
  { icon: Users, title: "Uma rede para construir junto", text: "Conecte sua empresa a profissionais, famílias e instituições comprometidas com a causa." },
  { icon: Building2, title: "Responsabilidade com propósito", text: "Transforme metas de responsabilidade social em ações acompanhadas e concretas." },
]

export default function Page() {
  return (
    <main className="container mx-auto">
      <SectionWrapper className="px-5 py-10 md:py-24">
        <div className="rounded-2xl bg-blue-950 p-8 text-white sm:p-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-blue-200 uppercase"><Handshake size={16} /> Seja parceiro</span>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold sm:text-6xl">Parcerias que transformam compromisso em inclusão.</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-blue-100">Sua empresa pode caminhar com a APAE Brasil para ampliar oportunidades, fortalecer serviços e defender direitos de pessoas com deficiência intelectual e múltipla.</p>
          <a href="mailto:contato@fenapaes.org.br?subject=Quero%20ser%20parceiro%20da%20APAE%20Brasil" className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-blue-950 hover:bg-blue-50">Falar com a equipe <ArrowRight size={17} /></a>
        </div>
      </SectionWrapper>
      <SectionWrapper className="px-5 pb-16 md:pb-24">
        <div className="grid gap-5 md:grid-cols-3">
          {benefits.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"><div className="flex size-11 items-center justify-center rounded-full bg-blue-100 text-blue-800"><Icon size={20} /></div><h2 className="mt-5 text-lg font-bold text-blue-950">{title}</h2><p className="mt-3 text-sm leading-relaxed text-zinc-700">{text}</p></article>)}
        </div>
      </SectionWrapper>
      <SectionWrapper className="bg-blue-50 px-5 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div><span className="text-sm font-bold tracking-widest text-blue-700 uppercase">Construímos relações duradouras</span><h2 className="mt-3 text-3xl font-bold text-blue-950 sm:text-4xl">A parceria começa com uma conversa.</h2><p className="mt-5 text-zinc-700">Vamos entender os objetivos da sua organização e encontrar uma forma de colaboração coerente com sua estratégia e com as necessidades da Rede Apae.</p></div>
          <ul className="grid gap-4 text-sm font-medium text-blue-950">{["Ações de investimento social privado", "Projetos de empregabilidade e inclusão", "Campanhas de mobilização e doação", "Apoio técnico, institucional ou em serviços"].map((item) => <li key={item} className="flex items-center gap-3 rounded-xl bg-white p-4"><CheckCircle2 size={18} className="shrink-0 text-blue-700" />{item}</li>)}</ul>
        </div>
      </SectionWrapper>
      <SectionWrapper className="px-5 py-16 text-center md:py-24"><h2 className="text-3xl font-bold text-blue-950">Sua empresa quer fazer parte?</h2><p className="mx-auto mt-3 max-w-xl text-zinc-700">Nossa equipe está pronta para ouvir sua ideia e apresentar os próximos passos.</p><a href="mailto:contato@fenapaes.org.br?subject=Quero%20ser%20parceiro%20da%20APAE%20Brasil" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-800 hover:underline">Enviar mensagem <ArrowRight size={16} /></a><p className="mt-5"><Link href="/encontre-apae" className="text-sm text-zinc-600 hover:underline">Conheça também nossas unidades</Link></p></SectionWrapper>
    </main>
  )
}
