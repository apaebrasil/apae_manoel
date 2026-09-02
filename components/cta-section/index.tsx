import Link from "next/link"
import { Card, CardContent } from "../ui/card"
import { ctaOptions } from "@/constants"
import { DynamicIcon } from "lucide-react/dynamic"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <div className="container mx-auto px-4">
      <div className="mb-12 text-center">
        <h2
          id="cta-heading"
          className="mt-2 mb-4 text-3xl font-bold text-foreground md:text-4xl"
        >
          Como Você Pode Ajudar
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-pretty text-muted-foreground">
          Existem diversas formas de contribuir com o movimento apaeano e fazer
          parte dessa rede de inclusão e cidadania
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {ctaOptions.map((option, index) => (
          <Card
            key={index}
            className="group border-2 border-transparent text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl"
            role="listitem"
          >
            <CardContent className="p-8">
              <div
                className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-800 text-white transition-transform duration-300 group-hover:scale-110`}
              >
                <DynamicIcon name={option.icon} className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {option.title}
              </h3>
              <p className="mb-6 text-pretty text-muted-foreground">
                {option.description}
              </p>

              <Link
                href={option.href}
                className="hover:text-whtie flex w-full items-center justify-center rounded-lg bg-blue-800 px-5 py-3 text-white transition-colors duration-300 group-hover/btn:bg-blue-700 hover:bg-blue-700"
              >
                {option.buttonText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
