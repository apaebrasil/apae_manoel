import { Newspaper } from "lucide-react"
import { SectionWrapper } from "@/components/section"
import { fetch } from "@/services"
import { NewsHighlightCarousel } from "@/components/news/carousel-news"

export default async function Page() {
  const responseNews = await fetch.getNews()
  const newsHighlights = await fetch.getNewsHighlight()
  const nonFeaturedNews = responseNews.itens.filter(
    (news) => news.destaque == false
  )

  return (
    <main className="bg-blue-50">
      <SectionWrapper className="py-16 md:py-24">
        <header className="relative container mx-auto mb-10">
          <span className="pointer-events-none absolute -top-10 left-0 z-0 text-[6rem] leading-none font-black text-blue-950/5 select-none sm:text-[8rem]">
            NOTÍCIAS
          </span>

          <div className="relative z-10">
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase shadow-sm shadow-blue-600/30">
              <Newspaper className="h-3.5 w-3.5" />
              Atualizado hoje
            </span>

            <h2 className="text-3xl font-bold text-blue-900 sm:text-4xl">
              Notícias{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-10">de hoje</span>
                <span className="absolute inset-x-0 bottom-0.5 z-0 h-3 -rotate-1 bg-blue-300/70 sm:h-4" />
              </span>
            </h2>

            <p className="mt-3 max-w-xl text-base font-normal text-blue-900/80">
              Notícias, histórias e perspectivas para entender o mundo em
              movimento.
            </p>
          </div>
        </header>
        <NewsHighlightCarousel newsHighlights={newsHighlights} />
      </SectionWrapper>
    </main>
  )
}
