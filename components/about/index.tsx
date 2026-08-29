import { Button } from "../ui/button"
import { ImpactStatCard } from "./impact-stat-card"

const data = {
  title: "Balanço Social",
  description:
    "Veja alguns dos nossos números e como transformamos a vida de milhões de pessoas",
  summary:
    "Somos uma Rede sem fins lucrativos que há mais de 70 anos se dedica à defesa de direitos e prestação de serviços à pessoa com deficiência no Brasil. Sendo responsável pela inclusão social em diversos níveis de milhares de pessoas ao longo de sua história.",
  impactStats: [
    {
      value: 2265,
      label: "Apaes em todo Brasil",
      description: "Presença em todos os estados",
    },
    {
      value: 25969341,
      label: "Atendimentos por ano",
      description: "Promovendo saúde e educação",
    },
    {
      value: 1770666,
      label: "Pessoas assistidas",
      description: "Vidas transformadas",
    },
    {
      value: 70,
      suffix: "+",
      label: "Anos de história",
      description: "Construindo inclusão",
    },
  ],
}

export async function About() {
  const response: typeof data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, 5000)
  })

  const aboutData = response

  return (
    <div className="panel container mx-auto px-4">
      <div className="mb-12 text-center">
        <h2
          id="impact-heading"
          className="md:text-4x l mb-4 text-3xl font-bold text-balance text-white"
        >
          {aboutData.title}
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-pretty text-primary-foreground/80">
          {aboutData.description}
        </p>
      </div>

      <div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4"
        role="list"
        aria-label="Estatísticas de impacto"
      >
        {aboutData.impactStats.map((stat, index) => (
          <ImpactStatCard key={index} stat={stat} index={index} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="mx-auto max-w-3xl leading-relaxed text-primary-foreground/80">
          {aboutData.summary}
        </p>
      </div>
    </div>
  )
}
