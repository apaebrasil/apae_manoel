import "server-only"
import { MenuItem, Submenu } from "@/components/navigation/type"
import { Noticies } from "@/components/news/type"
import { CategoriaTransparencia } from "@/components/transparency/type"
import { Sponsor } from "@/types/sponsor-type"

interface QueryParams {
  domain: string
}

interface ResponseWebsiteInfo {
  id: number
  uuid: string
  dominio: string
  nomeApae: string
  cnpj: string
  email: string
  telefone: string
  endereco: string
  ativo: true
  tipo: string
  menusIds: string
  noticiasIds: string
  menus: MenuItem[]
  submenus: Submenu[]
  noticias: Noticies[]
  categorias: CategoriaTransparencia[]
  parceiros: Sponsor[]
}

export async function getInfoWebSite({
  domain,
}: QueryParams): Promise<ResponseWebsiteInfo> {
  const websiteInfo = await fetch(
    `https://fluigdev.apaebrasil.org.br/portalapi/v1/sites/dominio/${domain}`
  )

  if (!websiteInfo.ok) {
    throw new Error("Erro ao buscar os dados da página Home")
  }
  const data = await websiteInfo.json()
  return data
}
