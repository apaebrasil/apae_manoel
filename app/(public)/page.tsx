import { About } from "@/components/about"
import { ContactMe } from "@/components/contact-me"
import { LocationMap } from "@/components/contact-me/location-map"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero"
import { News } from "@/components/news"
import { SectionWrapper } from "@/components/section"
import { ServiceSection } from "@/components/service-section"
import { fetch } from "@/services"

interface PageParams {
  searchParams: { id: string }
}

export default async function Page({ searchParams }: PageParams) {
  const response = await fetch.getInfoWebSite({
    domain: "apaebrasil.org.br",
  })

  console.log("site: ", response)
  return (
    <main>
      <SectionWrapper
        id="hero"
        className="swipe-section relative flex min-h-screen items-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <HeroSection />
      </SectionWrapper>

      {response.noticias.length > 0 && (
        <SectionWrapper
          id="news"
          className="relative flex min-h-screen items-center overflow-hidden py-16 md:py-24"
          aria-labelledby="news-heading"
        >
          <News noticias={response.noticias} isShowHeaderNews={true} />
        </SectionWrapper>
      )}

      <SectionWrapper
        id="about"
        className="bg-blue-950 py-16 md:py-24"
        aria-labelledby="about-heading"
      >
        <About />
      </SectionWrapper>

      <SectionWrapper
        id="service"
        className="px-5 py-16 md:py-24"
        aria-labelledby="service-heading"
      >
        <ServiceSection />
      </SectionWrapper>

      <SectionWrapper
        id="cta"
        className="bg-blue-50 px-5 py-16 md:py-24"
        aria-labelledby="cta-heading"
      >
        <CTASection />
      </SectionWrapper>

      <SectionWrapper
        id="contact-me"
        className="bg-blue-950 px-5 py-16 md:py-24"
        aria-labelledby="contact-me-heading"
      >
        <ContactMe />
      </SectionWrapper>

      <SectionWrapper
        id="location-me"
        className="bg-blue-50 px-5 py-16 md:py-24"
        aria-labelledby="contact-me-location"
      >
        <h2 className="mb-10 text-center text-xl leading-relaxed font-bold text-zinc-900 lg:text-3xl">
          Como nós encontrar
        </h2>

        <LocationMap />
      </SectionWrapper>

      <SectionWrapper id="footer" aria-labelledby="footer-heading">
        <Footer />
      </SectionWrapper>
    </main>
  )
}
