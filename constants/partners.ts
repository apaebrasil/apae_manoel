import { StaticImageData } from "next/image"
import burguerKingLogo from "@/public/burguer-king.png"

export interface PartnerItem {
  name: string
  logo: StaticImageData
  href: string
}

export const partners: PartnerItem[] = [
  {
    name: "Burger King Brasil",
    logo: burguerKingLogo,
    href: "https://www.burgerking.com.br",
  },
]
