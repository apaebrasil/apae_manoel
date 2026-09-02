import { About } from "@/components/about"
import { ContactMe } from "@/components/contact-me"
import { CTASection } from "@/components/cta-section"
import { HeroSection } from "@/components/hero"
import { News } from "@/components/news"
import { Partners } from "@/components/partners"
import { SectionWrapper } from "@/components/section"
import { ServiceSection } from "@/components/service-section"
import { fetch } from "@/services"

export default async function Page() {
  const response = await fetch.getInfoWebSite({
    domain: "apaebrasil.org.br",
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

      {response.noticias.length > 0 && (
        <SectionWrapper
          id="news"
          className="relative flex min-h-screen items-center overflow-hidden py-16 md:py-24"
          aria-labelledby="news-heading"
        >
          <News
            noticias={response.noticias}
            isShowHeaderNews={true}
            siteId={response.id}
          />
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
        <Partners siteId={response.id} sponsor={response.parceiros} />
      </SectionWrapper>
    </main>
  )
}
