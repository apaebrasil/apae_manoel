import Image from "next/image"
import Link from "next/link"
import { Billboard } from "../billboard"
import { Button } from "../ui/button"
import { SquareArrowOutUpRight } from "lucide-react"
import { news } from "@/constants"

export function News() {
  const featuredNews = news.filter((item) => item.featured)
  const [highlight, ...rest] = featuredNews

  if (!highlight) {
    return null
  }

  return (
    <div className="container mx-auto space-y-5 px-4">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <h2
            id="news-heading"
            className="md:text-4x l mb-4 text-3xl font-bold text-balance text-zinc-800"
          >
            Últimas notícias da Rede
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-pretty text-zinc-700">
            Acompanhe os acontecimentos, eventos e conquistas do movimento em
            defesa dos direitos das pessoas com deficiência.
          </p>
        </div>

        <Button className="cursor-pointer justify-end rounded-3xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
          <span className="text-sm font-medium">Ver todas notícias</span>
          <SquareArrowOutUpRight />
        </Button>
      </div>

      <Billboard data={featuredNews} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="group relative min-h-150 overflow-hidden rounded-3xl">
          <Image
            src={highlight.image as string}
            alt={highlight.title}
            fill
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

          <div className="relative flex h-full flex-col justify-end p-8 text-white">
            <span className="mb-4 w-fit rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-sm">
              {highlight.category}
            </span>
            <h3 className="mb-2 text-2xl leading-tight font-bold md:text-3xl">
              {highlight.title}
            </h3>
            {highlight.subtitle && (
              <p className="mb-4 text-sm text-white/80">{highlight.subtitle}</p>
            )}
            <Link
              href={`/noticias/${highlight.id}`}
              className="flex items-center gap-2 text-sm font-medium hover:underline"
            >
              Ler matéria completa
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          {rest.map((item) => (
            <Link
              key={item.id}
              href={`/noticias/${item.id}`}
              className="flex items-center gap-4 rounded-2xl border border-zinc-300 bg-white p-4 transition-all duration-300 hover:border-blue-700 hover:bg-white/50 lg:hover:translate-x-8"
            >
              <div className="h-20 w-24 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={item.image as string}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="min-w-0">
                <p className="mb-1 text-xs font-medium tracking-wide text-zinc-800 uppercase">
                  {item.category} <span className="mx-1">·</span>{" "}
                  {new Date(item.created_at).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <h4 className="line-clamp-2 text-sm font-bold text-zinc-800 md:text-base">
                  {item.title}
                </h4>
                <p className="mt-1 text-xs text-zinc-800/80">
                  {item.read_time} de leitura
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
