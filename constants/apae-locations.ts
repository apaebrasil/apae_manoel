export interface ApaeLocation {
  id: string
  name: string
  city: string
  address: string
  phone: string
  email: string
  hours: string
  description: string
  services: string[]
}

export const apaeLocations: ApaeLocation[] = [
  {
    id: "sao-paulo",
    name: "APAE São Paulo",
    city: "São Paulo, SP",
    address: "Rua Dr. Diogo de Faria, 558 — Vila Clementino",
    phone: "(11) 5080-7000",
    email: "contato@apaesp.org.br",
    hours: "Segunda a sexta, das 8h às 17h",
    description: "Atendimento interdisciplinar para pessoas com deficiência intelectual e suas famílias em diferentes fases da vida.",
    services: ["Assistência social", "Educação especial", "Saúde e reabilitação"],
  },
  {
    id: "campinas",
    name: "APAE Campinas",
    city: "Campinas, SP",
    address: "Rua Francisco Bueno Lacerda, 120 — Jardim das Paineiras",
    phone: "(19) 3772-2800",
    email: "contato@apaecampinas.org.br",
    hours: "Segunda a sexta, das 8h às 17h",
    description: "Serviços de apoio, educação e inclusão para ampliar a autonomia e a participação social.",
    services: ["Educação especial", "Oficinas profissionalizantes", "Apoio às famílias"],
  },
  {
    id: "rio-de-janeiro",
    name: "APAE Rio de Janeiro",
    city: "Rio de Janeiro, RJ",
    address: "Rua Bom Pastor, 41 — Tijuca",
    phone: "(21) 2570-2494",
    email: "contato@apaerj.org.br",
    hours: "Segunda a sexta, das 8h às 17h",
    description: "Uma rede de cuidado que acompanha pessoas com deficiência e fortalece a autonomia de cada família.",
    services: ["Clínica interdisciplinar", "Defesa de direitos", "Capacitação profissional"],
  },
  {
    id: "belo-horizonte",
    name: "APAE Belo Horizonte",
    city: "Belo Horizonte, MG",
    address: "Rua da Bahia, 570 — Centro",
    phone: "(31) 3115-7600",
    email: "contato@apaebh.org.br",
    hours: "Segunda a sexta, das 8h às 17h",
    description: "Atendimento próximo e especializado para promover desenvolvimento, inclusão e qualidade de vida.",
    services: ["Estimulação precoce", "Atendimento psicológico", "Inclusão no trabalho"],
  },
]

export function getApaeLocation(id: string) {
  return apaeLocations.find((location) => location.id === id)
}