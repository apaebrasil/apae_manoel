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
        <header className="container mx-auto mb-10">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-medium text-emerald-900 uppercase before:mr-1 before:h-px before:w-10 before:bg-emerald-900 before:content-['-']">
              Notícias de hoje
            </h2>
          </div>

          <p className="pl-4 text-base font-normal text-emerald-900">
            Notícias, histórias e perspectivas para entender o mundo em
            movimento.
          </p>
        </header>
        <NewsHighlightCarousel newsHighlights={newsHighlights} />
      </SectionWrapper>
    </main>
  )
}
