import { IconName } from "lucide-react/dynamic"

export interface ServicesItems {
  title: string
  description: string
  icon: IconName
  href: string
  highlights: string[]
}

export const services: ServicesItems[] = [
  {
    title: "Educacao",
    description:
      "Educacao especial de qualidade que respeita as individualidades e promove o desenvolvimento integral de cada pessoa.",
    icon: "graduation-cap",
    href: "#educacao",
    highlights: [
      "Educação Infantil",
      "Ensino Fundamental",
      "EJA",
      "Formação Profissíonal",
    ],
  },
  {
    title: "Saude",
    description:
      "Atendimento multi-disciplinar em saude com equipes especializadas para habilitação e reabilitação.",
    icon: "heart",
    href: "#saude",
    highlights: [
      "Fisioterapia",
      "Fonoaudiologia",
      "Psicologia",
      "Terapia Ocupacional",
    ],
  },
  {
    title: "Assistencia Social",
    description:
      "Protecao social e fortalecimento de vinculos familiares e comunitarios para garantir direitos.",
    icon: "users",
    href: "#assistencia",
    highlights: [
      "CRAS",
      "CREAS",
      "Residencias Inclusivas",
      "Beneficios Sociais",
    ],
  },
  {
    title: "Trabalho e Emprego",
    description:
      "Capacitacao profissional e inclusão no mercado de trabalho para promover autonomia e independência.",
    icon: "briefcase-business",
    href: "#trabalho",
    highlights: [
      "Qualificação",
      "Emprego Apoiado",
      "Cooperativas",
      "Empreendedorismo",
    ],
  },
  {
    title: "Esporte e Lazer",
    description:
      "Atividades esportivas e de lazer que promovem saúde, socialização e desenvolvimento de habilidades.",
    icon: "sport-shoe",
    href: "#esporte",
    highlights: ["Olimpiadas Especiais", "Festival nossa arte"],
  },
  {
    title: "Defesa de Direitos",
    description:
      "Advocacia e mobilização pela garantia dos direitos das pessoas com deficiência e suas familáas.",
    icon: "shield-plus",
    href: "#direitos",
    highlights: [
      "Políticas Públicas",
      "Legislação",
      "Autodefensoria",
      "Representação",
    ],
  },
]
