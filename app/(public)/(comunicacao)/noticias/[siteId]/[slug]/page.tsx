import { SectionWrapper } from "@/components/section"
import { fetch } from "@/services"
import Image from "next/image"

interface NewsParams {
  params: Promise<{ slug: number }>
}

export default async function Page({ params }: NewsParams) {
  const { slug } = await params
  const news = await fetch.newsBySlug({ id: slug })
  console.log(news)
  return (
    <main className="h-dvh bg-blue-50">
      <SectionWrapper className="py-16 md:py-24">
        <div className="relative container mx-auto aspect-video h-80 w-80 bg-blue-200">
          <Image
            src={news.url}
            alt={news.titulo}
            fill
            sizes="1500"
            className="rounded-md object-cover"
          />
        </div>
      </SectionWrapper>
    </main>
  )
}
