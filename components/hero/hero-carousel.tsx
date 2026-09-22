"use client"

import Image from "next/image"
import Link from "next/link"

import { useEffect, useMemo, useState } from "react"
import Autoplay from "embla-carousel-autoplay"
import { ArrowLeft, ArrowRight } from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { Noticies } from "../news/type"

const AUTOPLAY_DELAY = 10000

interface HeroCarouselProps {
  noticias: Noticies[]
  siteId: number
}

export function HeroCarousel({ noticias, siteId }: HeroCarouselProps) {
  const plugin = useMemo(() => {
    return Autoplay({ delay: AUTOPLAY_DELAY, stopOnInteraction: false })
  }, [])

  const [api, setApi] = useState<CarouselApi>()
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    if (!api) return
    const onSelect = () => setSelected(api.selectedScrollSnap())
    onSelect()
    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <div
      className="w-full bg-linear-to-b from-blue-50/20 to-blue-100/10"
      role="region"
      aria-label="Destaques da APAE"
    >
      <div className="mx-auto max-w-[1680px] px-6 pt-16 pb-10 sm:px-12 sm:pt-20 lg:px-20 lg:pt-24 xl:px-28">
        <Carousel
          setApi={setApi}
          plugins={[plugin]}
          opts={{ loop: true }}
          className="w-full"
        >
          <CarouselContent className="ml-0">
            {noticias.map((item) => (
              <CarouselItem key={item.id} className="basis-full pl-0">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
                  <div className="relative order-2 lg:order-1 lg:col-span-5">
                    <div className="relative">
                      <p className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase">
                        {item.categoria}
                      </p>
                      <h2 className="mt-4 text-4xl leading-[0.98] font-bold tracking-tight text-blue-950 sm:text-5xl lg:text-[3.4rem]">
                        {item.titulo}
                      </h2>
                      <p className="mt-5 max-w-sm text-justify text-base leading-relaxed font-medium text-blue-950/80">
                        {item.descricao}
                      </p>
                      <Link
                        href={`/noticias/${siteId}/${item.uuid}`}
                        target="_blank"
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-blue-600/30 transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      >
                        Visualizar campanha
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  <div className="group relative order-1 pb-5 lg:order-2 lg:col-span-7">
                    <div className="relative">
                      <div className="relative h-75 w-full cursor-pointer overflow-hidden rounded-2xl bg-blue-950/5 sm:h-100 lg:h-120">
                        <Image
                          src={item.url}
                          alt={item.titulo}
                          fill
                          priority
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-blue-950/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      </div>

                      <div className="absolute -bottom-5 left-6 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-[0_8px_24px_-4px_rgba(23,37,84,0.18)] sm:left-8">
                        <span className="text-xs font-semibold text-blue-950">
                          {item.categoria}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="mx-auto max-w-[1680px] border-t border-blue-950/10 px-6 py-6 sm:px-12 lg:px-20 xl:px-28">
        <div className="flex items-center justify-between gap-6">
          <span className="hidden text-xs font-medium tracking-wide text-blue-950/50 tabular-nums sm:block">
            {String(selected + 1).padStart(2, "0")} —{" "}
          </span>

          <div className="flex flex-1 items-center justify-center gap-3 sm:justify-start">
            {noticias.map((item, index) => {
              const isActive = index === selected
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Ir para o slide ${index + 1}: ${item.titulo}`}
                  aria-current={isActive}
                  className="group/thumb flex flex-col gap-1.5"
                >
                  <span
                    className={cn(
                      "relative block h-11 w-16 overflow-hidden rounded-lg ring-offset-2 transition-all duration-300 sm:h-14 sm:w-20",
                      isActive
                        ? "bg-blue-950 ring-2 ring-blue-600"
                        : "opacity-50 ring-1 ring-blue-950/10 hover:opacity-80"
                    )}
                  >
                    <Image
                      src={item.url}
                      alt=""
                      fill
                      sizes="80px"
                      className="object-cover transition-transform duration-500 group-hover/thumb:scale-110"
                    />
                    {isActive && (
                      <span
                        key={`${item.id}-${selected}`}
                        style={{ animationDuration: `${AUTOPLAY_DELAY}ms` }}
                        className="absolute inset-x-0 bottom-0 h-75 origin-left scale-x-0 animate-[progress_linear_forwards] bg-amber-400"
                      />
                    )}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => api?.scrollPrev()}
              aria-label="Slide anterior"
              className="flex size-10 cursor-pointer items-center justify-center rounded-full text-blue-950/80 transition-colors hover:bg-blue-600/10 hover:text-blue-600"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => api?.scrollNext()}
              aria-label="Próximo slide"
              className="flex size-10 cursor-pointer items-center justify-center rounded-full text-blue-950/80 transition-colors hover:bg-blue-600/10 hover:text-blue-600"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
