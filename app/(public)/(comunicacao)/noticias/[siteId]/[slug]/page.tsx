import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CalendarDays, ImageOff, User2 } from "lucide-react"
import { SectionWrapper } from "@/components/section"
import { fetch } from "@/services"
import { formatedDate } from "@/lib/formated-date"

interface NewsParams {
  params: Promise<{ siteId: string; slug: string }>
}

export default async function Page({ params }: NewsParams) {
  const { siteId, slug } = await params
  const news = await fetch.newsBySlug({ id: slug })

  const paragraphs = news.conteudo
    .split("\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)

  return (
    <main className="min-h-dvh overflow-x-hidden bg-blue-50 px-5">
      <SectionWrapper className="py-8 md:py-16">
        <article className="container mx-auto max-w-3xl">
          <Link
            href={`/noticias/${siteId}`}
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-blue-900/70 transition-colors hover:text-blue-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar às notícias
          </Link>

          <header className="mb-8">
            <span className="inline-flex w-fit items-center rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase shadow-sm shadow-blue-600/30">
              {news.categoria}
            </span>

            <h1 className="mt-4 text-3xl leading-tight font-bold text-balance text-blue-950 sm:text-4xl">
              {news.titulo}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-blue-900/10 pb-6 text-sm text-blue-900/60">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <User2 className="h-4 w-4" />
                {news.autor}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" />
                {formatedDate({
                  dayOfMonth: news.criadoEm.dayOfMonth,
                  monthValue: news.criadoEm.monthValue,
                  year: news.criadoEm.year,
                })}
              </span>
            </div>
          </header>

          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-blue-100 shadow-sm shadow-blue-950/10">
            {news.url ? (
              <Image
                src={news.url}
                alt={news.titulo}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-blue-900/40">
                <ImageOff className="h-10 w-10" strokeWidth={1.5} />
                <p className="text-sm font-medium">Imagem não encontrada</p>
              </div>
            )}
          </div>

          <div className="mt-8 space-y-4 text-base leading-relaxed text-blue-950/80">
            {paragraphs.length > 0 ? (
              paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              <p>{news.conteudo}</p>
            )}
          </div>

          <div className="mt-10 border-t border-blue-900/10 pt-6">
            <Link
              href={`/noticias/${siteId}`}
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-2.5 text-sm font-semibold text-blue-900 shadow-sm shadow-blue-950/5 transition-colors hover:border-blue-300 hover:bg-blue-50"
            >
              <ArrowLeft className="h-4 w-4" />
              Ver outras notícias
            </Link>
          </div>
        </article>
      </SectionWrapper>
    </main>
  )
}
