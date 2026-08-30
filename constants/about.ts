import { IconName } from "lucide-react/dynamic"

export interface AboutStat {
  icon: IconName
  titleCounter: string
  description: string
  color: string
  bgColor: string
}

export interface AboutValue {
  icon: IconName
  title: string
  description: string
}

export interface HistoryMilestone {
  year: string
  title: string
  description: string
}

export const aboutInfo: AboutStat[] = [
  {
    icon: "calendar-heart",
    titleCounter: "70+",
    description: "Anos de história",
    color: "text-blue-900",
    bgColor: "bg-blue-100",
  },
  {
    icon: "building-2",
    titleCounter: "2.200+",
    description: "Unidades pelo Brasil",
    color: "text-blue-800",
    bgColor: "bg-blue-50",
  },
  {
    icon: "users-round",
    titleCounter: "1,7 milhão+",
    description: "Pessoas atendidas",
    color: "text-blue-900",
    bgColor: "bg-blue-100",
  },
  {
    icon: "heart-handshake",
    titleCounter: "27 estados",
    description: "Presença em todo o Brasil",
    color: "text-blue-800",
    bgColor: "bg-blue-50",
  },
]

export const aboutValues: AboutValue[] = [
  {
    icon: "hand-heart",
    title: "Acolhimento",
    description:
      "Recebemos cada pessoa e cada família com respeito, escuta ativa e cuidado individualizado.",
  },
  {
    icon: "scale",
    title: "Ética e Transparência",
    description:
      "Atuamos com responsabilidade na gestão dos recursos e no compromisso com toda a sociedade.",
  },
  {
    icon: "users",
    title: "Participação da Família",
    description:
      "Envolvemos pais, responsáveis e a comunidade em todas as etapas do cuidado e do desenvolvimento.",
  },
  {
    icon: "shield-check",
    title: "Defesa de Direitos",
    description:
      "Lutamos pela garantia e ampliação dos direitos das pessoas com deficiência intelectual e múltipla.",
  },
]

export const historyMilestones: HistoryMilestone[] = [
  {
    year: "1954",
    title: "Fundação da primeira Apae",
    description:
      "Um grupo de pais, técnicos e amigos funda a primeira Apae no Rio de Janeiro, dando início ao movimento em defesa da inclusão no Brasil.",
  },
  {
    year: "1962",
    title: "Criação da Federação Nacional das Apaes",
    description:
      "A Fenapaes é criada para coordenar e fortalecer a atuação das unidades Apae em todo o território nacional.",
  },
  {
    year: "1980–1990",
    title: "Expansão pelo país",
    description:
      "A rede se expande para milhares de municípios, ampliando o acesso a educação, saúde e assistência social.",
  },
  {
    year: "Hoje",
    title: "A maior rede da América Latina",
    description:
      "Com mais de 2.200 unidades, a Apae Brasil segue como a maior rede de atendimento e defesa de direitos da pessoa com deficiência intelectual e múltipla na América Latina.",
  },
]
