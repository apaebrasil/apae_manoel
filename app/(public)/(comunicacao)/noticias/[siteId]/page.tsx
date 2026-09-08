import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"
import {
  ImageOff,
  Newspaper,
  Search,
  Filter,
  User2,
  CalendarDays,
} from "lucide-react"
import { SectionWrapper } from "@/components/section"
import { fetch } from "@/services"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxList,
} from "@/components/ui/combobox"
import { Card, CardHeader } from "@/components/ui/card"
import { formatedDate } from "@/lib/formated-date"
import { PaginationControls } from "@/components/news/pagination-controls"
import { BraszilianCalendar } from "@/components/calendar"

interface PageProps {
  params: Promise<{ siteId: string }>
  searchParams: Promise<{ page?: string; titulo: string }>
}

export default async function Page({ params, searchParams }: PageProps) {
  const itemPerPage = 5

  const { siteId } = await params
  const currentParams = await searchParams
  const { page, titulo } = await searchParams

  const currentPage = Number(page) || 1

  const responseNews = await fetch.getNews({
    page: currentPage,
    limit: itemPerPage,
    siteId,
    titulo,
  })

  const newsData = responseNews.news
  const totalPages = Math.ceil(
    responseNews.totalPaginas / responseNews.news.length
  )
  console.log("newsData: ", responseNews, responseNews.news.length)
  async function removeFilter() {
    "use server"
    const params = new URLSearchParams(currentParams as Record<string, string>)
    params.delete("titulo")

    const targetUrl = params.toString()
      ? `/noticias?${params.toString()}`
      : `/noticias/${siteId}`
    redirect(targetUrl)
  }

  return (
    <main className="min-h-dvh overflow-x-hidden bg-blue-50 px-5">
      <SectionWrapper className="py-12 md:py-24">
        <header className="relative container mx-auto mb-10 overflow-hidden">
          <span className="pointer-events-none absolute -top-6 left-0 z-0 text-5xl leading-none font-black text-blue-950/5 select-none sm:-top-10 sm:text-7xl md:text-[8rem]">
            NOTÍCIAS
          </span>

          <div className="relative z-10">
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase shadow-sm shadow-blue-600/30">
              <Newspaper className="h-3.5 w-3.5" />
              Atualizado hoje
            </span>

            <h2 className="text-2xl font-bold text-blue-900 sm:text-3xl md:text-4xl">
              Notícias{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-10">de hoje</span>
              </span>
            </h2>

            <p className="mt-3 max-w-xl text-base font-normal text-blue-900/80">
              Notícias, histórias e perspectivas para entender o mundo em
              movimento.
            </p>
          </div>
        </header>
      </SectionWrapper>

      <SectionWrapper className="container mx-auto">
        <form
          method="GET"
          role="search"
          aria-label="Filtrar notícias"
          className="flex flex-col gap-4 rounded-2xl border border-blue-200 bg-white p-5 shadow-sm shadow-blue-950/5 lg:flex-row lg:items-end"
        >
          <div className="flex flex-1 flex-col gap-1.5">
            <label
              htmlFor="titulo"
              className="text-xs font-semibold text-blue-900/70 uppercase"
            >
              Buscar
            </label>
            <div className="relative">
              <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-blue-400" />
              <Input
                key={titulo ?? ""}
                name="titulo"
                placeholder="Buscar pelo título da notícia"
                className="pl-9"
                defaultValue={titulo ?? ""}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5 lg:w-48">
            <label className="text-xs font-semibold text-blue-900/70 uppercase">
              Categoria
            </label>
            <Select>
              <SelectTrigger className="w-full">
                <Filter className="h-4 w-4 text-blue-400" />
                <SelectValue placeholder="Todas" />
              </SelectTrigger>
              <SelectContent alignItemWithTrigger={false} sideOffset={4}>
                <SelectItem value="faculdade">Faculdade</SelectItem>
                <SelectItem value="campanha">campanha</SelectItem>
                <SelectItem value="evento">Evento</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-1.5 lg:w-56">
            <label className="text-xs font-semibold text-blue-900/70 uppercase">
              Período
            </label>
            <Combobox>
              <div className="relative">
                <ComboboxInput
                  className="placeholder:pl-9"
                  placeholder="Selecione uma data"
                />
              </div>
              <ComboboxContent
                side="bottom"
                align="start"
                sideOffset={4}
                className="w-auto"
              >
                <ComboboxList className="p-0">
                  <BraszilianCalendar />
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </div>

          <div className="space-x-5">
            <Button
              type="submit"
              className="cursor-pointer bg-blue-600 px-6 hover:bg-blue-700 lg:mb-0"
            >
              Filtrar
            </Button>
            <Link
              href={`/noticias/${siteId}`}
              className="cursor-pointer lg:mb-0"
            >
              Limpar filtro
            </Link>
          </div>
        </form>
      </SectionWrapper>

      <SectionWrapper className="py-12 md:py-24">
        <div className="container mx-auto mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {newsData.map((news) => (
            <Link
              key={news.uuid}
              href={`/noticias/${siteId}/${news.uuid}`}
              title={news.titulo}
              className="flex h-full"
            >
              <Card className="group/card flex h-full w-full cursor-pointer flex-col gap-0 overflow-hidden rounded-2xl p-0 shadow-sm shadow-blue-950/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-950/10 hover:ring-blue-200">
                <CardHeader className="relative h-56 w-full overflow-hidden p-0">
                  {news.url ? (
                    <>
                      <Image
                        src={news.url}
                        alt={news.titulo}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        fill
                        className="object-cover transition-transform duration-500 group-hover/card:scale-110"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-blue-950/60 via-blue-950/0 to-transparent" />
                    </>
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-blue-50 text-blue-900/40">
                      <ImageOff className="h-8 w-8" strokeWidth={1.5} />
                      <p className="text-xs font-medium">
                        Imagem não encontrada
                      </p>
                    </div>
                  )}

                  <span className="absolute top-3 left-3 w-fit rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-blue-900 shadow-sm backdrop-blur-sm">
                    {news.categoria}
                  </span>
                </CardHeader>

                <div className="relative flex flex-1 flex-col gap-3 p-5">
                  <h3 className="line-clamp-2 text-lg leading-snug font-bold text-blue-900 transition-colors group-hover/card:text-blue-700">
                    {news.titulo}
                  </h3>

                  <div className="mt-auto flex items-center justify-between gap-2 border-t border-blue-100 pt-3 text-xs text-blue-900/60">
                    <span className="inline-flex min-w-0 items-center gap-1.5 font-medium">
                      <User2 className="h-3.5 w-3.5 shrink-0" />
                      <span className="truncate">{news.autor}</span>
                    </span>
                    <span className="inline-flex shrink-0 items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {formatedDate({
                        dayOfMonth: news.criadoEm.dayOfMonth,
                        monthValue: news.criadoEm.monthValue,
                        year: news.criadoEm.year,
                      })}
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <PaginationControls totalPages={totalPages} />
      </SectionWrapper>
    </main>
  )
}
