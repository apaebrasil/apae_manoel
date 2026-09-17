import Image from "next/image"
import { CalendarDays, ImageOff, User2 } from "lucide-react"
import { SectionWrapper } from "@/components/section"
import { BackLink } from "@/components/common/back-link"
import { DetailHeader } from "@/components/common/detail-header"
import { fetch } from "@/services"
import { formatedDate } from "@/lib/formated-date"
import { NewsContent } from "@/components/news/news-content"

interface NewsParams {
  params: Promise<{ siteId: string; slug: string }>
}

export default async function Page({ params }: NewsParams) {
  const { siteId, slug } = await params
  const news = await fetch.newsBySlug({ id: slug })

  return (
    <main className="min-h-dvh overflow-x-hidden bg-blue-50 px-5">
      <SectionWrapper className="py-8 md:py-16">
        <article className="container mx-auto max-w-3xl">
          <BackLink href={`/noticias/${siteId}`}>Voltar às notícias</BackLink>

          <DetailHeader
            badge={news.categoria}
            title={news.titulo}
            titleSize="lg"
            meta={[
              { icon: User2, label: news.autor, emphasis: true },
              {
                icon: CalendarDays,
                label: formatedDate({
                  dayOfMonth: news.criadoEm.dayOfMonth,
                  monthValue: news.criadoEm.monthValue,
                  year: news.criadoEm.year,
                }),
              },
            ]}
          />

          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-blue-100 shadow-sm shadow-blue-950/10">
            {news.url ? (
              <Image
                src={news.url}
                alt={news.titulo}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
                title={news.titulo}
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-blue-900/40">
                <ImageOff className="h-10 w-10" strokeWidth={1.5} />
                <p className="text-center text-sm font-medium">
                  Imagem {news.titulo}
                </p>
              </div>
            )}
          </div>

          <NewsContent newsContent={news.conteudo_json} />

          <div className="mt-10 border-t border-blue-900/10 pt-6">
            <BackLink href={`/noticias/${siteId}`} variant="pill">
              Ver outras notícias
            </BackLink>
          </div>
        </article>
      </SectionWrapper>
    </main>
  )
}
