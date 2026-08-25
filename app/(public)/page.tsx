import { About } from "@/components/about"
import { ContactMe } from "@/components/contact-me"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero"
import { News } from "@/components/news"
import { SectionWrapper } from "@/components/section"
import { ServiceSection } from "@/components/service-section"
import { Separator } from "@/components/ui/separator"
import { fetch } from "@/services"

interface PageParams {
  searchParams: { id: string }
}

export default async function Page({ searchParams }: PageParams) {
  const response = await fetch.getInfoWebSite({
    domain: "apaebrasil",
  })

  return (
    <main>
      <SectionWrapper
        id="hero"
        className="swipe-section relative flex min-h-screen items-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <HeroSection />
      </SectionWrapper>

      <SectionWrapper
        id="news"
        className="relative flex min-h-screen items-center overflow-hidden py-16 md:py-24"
        aria-labelledby="news-heading"
      >
        <News noticias={response.noticias} isShowHeaderNews={true} />
      </SectionWrapper>

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

      <Separator className="bg-blue-900 shadow-2xl shadow-blue-200" />

      <SectionWrapper id="footer" aria-labelledby="footer-heading">
        <Footer />
      </SectionWrapper>
    </main>
  )
}
