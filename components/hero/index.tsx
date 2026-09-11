import { Noticies } from "../news/type"
import { GridBackgroundHero } from "./grid-background-hero"
import { HeroCarousel } from "./hero-carousel"

interface HeroSection {
  noticias: Noticies[]
  siteId: number
}

export function HeroSection({ noticias, siteId }: HeroSection) {
  return (
    <>
      <div
        className="panel bg-linera-to-b absolute inset-0 mb-10 bg-linear-to-br from-sky-50 to-white"
        aria-hidden="true"
      />

      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="animate-pulse-slow absolute -top-40 -right-40 h-60 w-60 rounded-full bg-blue-500/5 blur-3xl sm:h-80 sm:w-80 lg:h-96 lg:w-96" />
        <div className="animate-pulse-slow animation-delay-hero absolute -bottom-40 -left-40 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl sm:h-96 sm:w-96 lg:h-112 lg:w-md" />
        <div className="absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/3 blur-3xl sm:h-64 sm:w-64 lg:h-96 lg:w-96" />
      </div>

      <GridBackgroundHero />

      <div className="relative z-10 h-screen w-full">
        <HeroCarousel noticias={noticias} siteId={siteId} />
      </div>
    </>
  )
}
