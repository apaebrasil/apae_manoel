import { FeatureGridCard } from "../common"
import { Badge } from "../ui/badge"
import { services } from "@/constants"

export function ServiceSection() {
  return (
    <>
      <div className="relative z-10 container mx-auto mb-16">
        <div className="flex flex-col items-center gap-4">
          <Badge className="mb-4 inline-block h-auto rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-950">
            Nossos Serviços
          </Badge>
          <h2
            id="service-heading"
            className="text-3xl font-bold text-zinc-950 md:text-5xl"
          >
            Atendimento Integrado
          </h2>
          <p className="max-w-2xl text-center font-medium text-zinc-800 lg:text-[18px]">
            Oferecemos atendimento especializado em diversas areas para garantir
            qualidade de vida e inclusão social
          </p>
        </div>
      </div>

      <FeatureGridCard
        className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        datas={services}
      />
    </>
  )
}
