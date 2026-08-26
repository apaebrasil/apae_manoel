import { News } from "@/components/news"
import { SectionWrapper } from "@/components/section"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { fetch } from "@/services"
import { Calendar } from "lucide-react"
import Image from "next/image"

export default async function Page() {
  const responseNews = await fetch.getNews()
  const responseNewsDestaque = await fetch.getNewsHighlight()
  console.log("responseNews: ", responseNews)
  return (
    <main className="container mx-auto space-y-5 px-4">
      <SectionWrapper className="py-16 md:py-20">
        <header className="mb-10">
          <h1 className="text-center text-xl leading-relaxed font-bold lg:text-4xl">
            Notícias | Apae Brasil
          </h1>
          <p className="mx-auto max-w-4xl text-center text-base font-semibold">
            Acompanhe as principais ações, eventos e conquistas do movimento
            apaeano no Brasil. Fique por dentro das iniciativas em saúde,
            educação, esporte e garantia de direitos para a pessoa com
            deficiência intelectual e múltipla.
          </p>
        </header>
        <News noticias={responseNewsDestaque} isShowHeaderNews={false} />
      </SectionWrapper>

      <SectionWrapper className="py-16 md:py-20">
        <header>
          <h2 className="text-start text-xl leading-relaxed font-bold lg:text-4xl">
            Últimas notícias
          </h2>
        </header>
        <div>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full p-5"
          >
            <CarouselContent className="-ml-4 py-5 select-none">
              {responseNews.itens.slice(0, 10).map((item, index) => (
                <CarouselItem key={index} className="basis-1/3 pl-4">
                  {item.url !== null ? (
                    <Card className="flex h-full flex-col p-0">
                      <CardHeader className="p-0">
                        <div className="relative h-72">
                          <Image
                            src={item.url as string}
                            alt={item.titulo}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </CardHeader>

                      <CardContent className="flex w-full flex-1 flex-col p-2.5 space-y-5">
                        <div className="flex items-center justify-between">
                          <Badge className="bg-blue-400 text-white">
                            {item.categoria}
                          </Badge>
                          <p className="flex items-center gap-1 text-sm">
                            <Calendar size={16} />
                            {new Date(
                              item.criadoEm.year,
                              item.criadoEm.monthValue - 1,
                              item.criadoEm.dayOfMonth
                            ).toLocaleDateString("pt-BR", {
                              day: "2-digit",
                              month: "long",
                              year: "numeric",
                            })}
                          </p>
                        </div>

                        <div className="flex flex-1 flex-col gap-2.5">
                          <h3 className="line-clamp-2 text-lg font-bold">
                            {item.titulo}
                          </h3>
                          <p className="mt-auto">Publicado por: {item.autor}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ) : (
                    <div>Sem imagem</div>
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselNext className="cursor-pointer bg-blue-400 text-white hover:bg-blue-500 hover:text-white" />
            <CarouselPrevious className="cursor-pointer bg-blue-400 text-white hover:bg-blue-500 hover:text-white" />
          </Carousel>
        </div>
      </SectionWrapper>
    </main>
  )
}
