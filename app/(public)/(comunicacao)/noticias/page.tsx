import { News } from "@/components/news"
import { SectionWrapper } from "@/components/section"
import { fetch } from "@/services"

export default async function Page() {
  // const responseNews = await fetch.getNews()
  const responseNewsDestaque = await fetch.getNewsHighlight()

  return (
    <main>
      <SectionWrapper className="py-16 md:py-20">
        <News noticias={responseNewsDestaque} isShowHeaderNews={false} />
      </SectionWrapper>
    </main>
  )
}
