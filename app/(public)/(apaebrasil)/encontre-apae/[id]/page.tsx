import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Clock3, Mail, MapPin, Phone, Sparkles } from "lucide-react"
import { notFound } from "next/navigation"

import { apaeLocations, getApaeLocation } from "@/constants/apae-locations"
import { SectionWrapper } from "@/components/section"

export function generateStaticParams() {
  return apaeLocations.map((location) => ({ id: location.id }))
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const location = getApaeLocation(id)
  if (!location) notFound()

  return (
    <main className="container mx-auto">
      <SectionWrapper className="px-5 py-10 md:py-20">
        <Link href="/encontre-apae" className="inline-flex items-center gap-2 text-sm text-blue-800 hover:underline"><ArrowLeft size={16} /> Voltar para unidades</Link>
        <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-blue-700 uppercase"><Sparkles size={15} /> Unidade APAE</span>
            <h1 className="mt-5 text-4xl font-bold text-blue-950 sm:text-6xl">{location.name}</h1>
            <p className="mt-4 text-lg text-blue-700">{location.city}</p>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-zinc-700">{location.description}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-blue-950 px-4 py-2 text-sm font-medium text-white hover:bg-blue-900">Ver rota <ArrowUpRight size={16} /></a>
              <a href={`mailto:${location.email}`} className="inline-flex items-center gap-2 rounded-md border border-blue-200 px-4 py-2 text-sm font-medium text-blue-950 hover:bg-blue-50">Entrar em contato <Mail size={16} /></a>
            </div>
          </div>
          <aside className="rounded-2xl bg-blue-950 p-7 text-white sm:p-9">
            <h2 className="text-xl font-bold">Informações da unidade</h2>
            <div className="mt-7 grid gap-5 text-sm text-blue-100">
              <p className="flex gap-3"><MapPin className="shrink-0" size={18} />{location.address}</p>
              <p className="flex gap-3"><Phone className="shrink-0" size={18} />{location.phone}</p>
              <p className="flex gap-3"><Clock3 className="shrink-0" size={18} />{location.hours}</p>
              <p className="flex gap-3"><Mail className="shrink-0" size={18} />{location.email}</p>
            </div>
          </aside>
        </div>
      </SectionWrapper>
      <SectionWrapper className="bg-blue-50 px-5 py-16 md:py-20">
        <h2 className="text-3xl font-bold text-blue-950">Serviços disponíveis</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {location.services.map((service) => <div key={service} className="rounded-xl border border-blue-100 bg-white p-5 text-sm font-semibold text-blue-900">{service}</div>)}
        </div>
      </SectionWrapper>
    </main>
  )
}