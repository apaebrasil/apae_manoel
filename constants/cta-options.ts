import { IconName } from "lucide-react/dynamic"

export interface ctaOptionsItems {
  title: string
  description: string
  icon: IconName
  href: string
  buttonText: string
  variant:
    | "link"
    | "default"
    | "outline"
    | "secondary"
    | "ghost"
    | "destructive"
    | null
    | undefined
}

export const ctaOptions: ctaOptionsItems[] = [
  {
    title: "Faça uma Doação",
    description:
      "Sua contribuição transforma vidas e ajuda a manter nossos serviços para milhares de famílias.",
    icon: "heart",
    href: "https://doeeajudeapaebrasil.com.br/",
    buttonText: "Doar Agora",
    variant: "default" as const,
  },
  {
    title: "Seja Voluntário",
    description:
      "Doe seu tempo e talento. Temos diversas oportunidades para você fazer a diferença.",
    icon: "users",
    href: "/voluntario",
    buttonText: "Quero Ajudar",
    variant: "outline" as const,
  },
  {
    title: "Encontre uma APAE",
    description:
      "Localize a APAE mais próxima de você e conheça os serviços disponíveis na sua região.",
    icon: "map-pin",
    href: "/encontre-apae",
    buttonText: "Buscar APAE",
    variant: "outline" as const,
  },
]
