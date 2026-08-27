// components/news-highlight-carousel.tsx
"use client"

import * as React from "react"
import Image from "next/image"
import { useMemo, useEffect } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { formatedDate } from "@/lib/formated-date"
import Autoplay from "embla-carousel-autoplay"
import { GetNewsProps } from "@/services/get-news"
import { Dot, SquareArrowOutUpRight } from "lucide-react"

interface Props {
  newsHighlights: GetNewsProps[]
}

export function NewsHighlightCarousel({ newsHighlights }: Props) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const autoplay = useMemo(() => {
    return Autoplay({ delay: 10000, stopOnInteraction: false })
  }, [])
  const plugins = useMemo(() => [autoplay], [autoplay])
  const opts = useMemo(() => ({ loop: true }), [])

  useEffect(() => {
    if (!api) return

    const onSelect = () => setCurrent(api.selectedScrollSnap())
    api.on("select", onSelect)

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <Carousel
      setApi={setApi}
      opts={opts}
      plugins={plugins}
      className="mx-auto w-full overflow-hidden rounded-xl sm:max-w-xs md:max-w-7xl"
    >
      <CarouselContent>
        {newsHighlights.map((newsHighlight) => (
          <CarouselItem
            key={newsHighlight.uuid}
            className="grid grid-cols-2 gap-8 bg-white"
          >
            <div role="banner" className="relative h-full w-full">
              <Image
                src={newsHighlight.url}
                sizes="(max-width: 768px) 100vw, 50vw"
                fill
                alt={newsHighlight.titulo}
                className="object-cover"
              />
            </div>

            <div role="contentinfo" className="flex flex-col gap-4 px-8 py-10">
              <span className="inline-block text-xs font-medium text-emerald-800 uppercase">
                {newsHighlight.categoria}
              </span>

              <h2 className="text-[42px] leading-snug font-normal tracking-tighter text-black">
                {newsHighlight.titulo}
              </h2>

              <p className="text-sm font-normal text-zinc-800">
                Confira as principais mudanças e novos recursos lançados nesta
                versão.
              </p>

              <div className="flex gap-2">
                <span className="text-xs font-normal text-zinc-700">
                  {newsHighlight.autor}
                </span>
                <Dot size={11} />
                <span className="text-xs font-normal text-zinc-700">
                  {formatedDate({
                    dayOfMonth: newsHighlight.criadoEm.dayOfMonth,
                    monthValue: newsHighlight.criadoEm.monthValue,
                    year: newsHighlight.criadoEm.year,
                  })}
                </span>
              </div>

              <Button className="mt-auto ml-auto cursor-pointer bg-blue-500 px-5 py-2.5 transition-colors duration-500 hover:bg-blue-600">
                <span>Ler notícia</span>
                <SquareArrowOutUpRight size={16} />
              </Button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="flex items-center justify-between gap-3 py-6">
        <CarouselPrevious className="static translate-y-0 cursor-pointer rounded-md p-5" />

        <div
          role="tablist"
          aria-label="Selecionar notícia em destaque"
          className="flex items-center gap-2"
        >
          {newsHighlights.map((newsHighlight, index) => (
            <button
              key={newsHighlight.uuid}
              type="button"
              role="tab"
              aria-selected={current === index}
              aria-label={`Ir para notícia ${index + 1}: ${newsHighlight.titulo}`}
              onClick={() => api?.scrollTo(index)}
              className={`h-2.5 cursor-pointer rounded-full transition-all duration-300 ${
                current === index
                  ? "w-6 bg-blue-500"
                  : "w-2.5 bg-blue-200 hover:bg-blue-300"
              }`}
            />
          ))}
        </div>

        <CarouselNext className="static translate-y-0 cursor-pointer rounded-md p-5" />
      </div>
    </Carousel>
  )
}
