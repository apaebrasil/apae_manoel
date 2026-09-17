import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { SquareArrowOutUpRight } from "lucide-react"
import { Noticies } from "./type"

interface NewsProps {
  noticias: Noticies[]
  isShowHeaderNews: boolean
  siteId: number
}

export function News({ noticias: news, isShowHeaderNews, siteId }: NewsProps) {
  const featuredNews = news?.filter((item) => item.destaque)
  const [highlight, ...rest] = featuredNews

  if (!highlight) {
    return null
  }
  const url = highlight.url

  const hasShowHeaderNews = isShowHeaderNews

  return (
    <div className="container mx-auto space-y-5 px-4">
      {hasShowHeaderNews && (
        <div className="mb-12 flex flex-col items-end justify-between lg:flex-row">
          <div>
            <h2
              id="news-heading"
              className="mb-4 text-xl font-bold text-balance text-zinc-800 md:text-4xl lg:text-3xl"
            >
              Últimas notícias da Rede
            </h2>
            <p className="mx-auto max-w-2xl text-justify text-base text-pretty text-zinc-700 lg:text-lg">
              Acompanhe os acontecimentos, eventos e conquistas do movimento em
              defesa dos direitos das pessoas com deficiência.
            </p>
          </div>

          <Button className="mt-10 cursor-pointer justify-end rounded-3xl bg-blue-600 p-6 text-white hover:bg-blue-700">
            <Link
              href={`/noticias/${siteId}`}
              className="flex items-center gap-2.5"
            >
              <span className="text-sm font-medium">Ver todas notícias</span>
              <SquareArrowOutUpRight />
            </Link>
          </Button>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        <Link
          href={`/noticias/${siteId}/${highlight.uuid}`}
          className="group relative col-start-1 col-end-4 min-h-96 overflow-hidden rounded-3xl lg:min-h-150"
        >
          <Image
            src={url}
            alt={highlight.titulo}
            fill
            sizes="500"
            className="absolute inset-0 w-28 object-contain transition-transform duration-300 group-hover:scale-105 lg:h-full lg:w-full lg:object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

          <div className="relative flex h-full flex-col justify-end p-8 text-white">
            <span className="mb-4 w-fit rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-sm">
              {highlight.categoria}
            </span>
            <h3 className="mb-2 text-2xl leading-tight font-bold md:text-3xl">
              {highlight.titulo}
            </h3>
            <p className="truncate">{highlight.conteudo}</p>

            <div className="mt-5 flex items-center gap-2.5 hover:underline">
              <p>Ler matéria completa</p>
              <span aria-hidden>→</span>
            </div>
          </div>
        </Link>

        <div className="flex flex-col items-center justify-start gap-4">
          {rest.map((item) => (
            <Link
              key={item.id}
              href={`/noticias/${siteId}/${item.uuid}`}
              className="flex w-full items-center gap-4 rounded-2xl border border-zinc-300 bg-white p-4 transition-all duration-300 hover:border-blue-700 hover:bg-white/50 lg:hover:translate-x-8"
            >
              <div className="h-20 w-24 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={item.url as string}
                  alt={item.titulo}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="w-full">
                <p className="mb-1 text-xs font-medium tracking-wide text-zinc-800 uppercase">
                  {item.categoria} <span className="mx-1">·</span>{" "}
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
                <h4 className="line-clamp-2 text-sm font-bold text-zinc-800 md:text-base">
                  {item.titulo}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
