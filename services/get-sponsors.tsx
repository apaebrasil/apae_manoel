import { Sponsor } from "@/types/sponsor-type"

export async function getSponsors({
  siteId,
  slug,
}: {
  siteId: number | string
  slug?: string
}): Promise<Sponsor[]> {
  try {
    if (!siteId) {
      throw new Error("O siteId é obrigatório para buscar os patrocinadores")
    }

    let url = `https://fluigdev.apaebrasil.org.br/portalapi/v1/parceiro?siteId=${siteId}`

    if (slug) {
      url += `&slug=${slug}`
    }

    const response = await fetch(url)

    if (!response.ok) {
      throw new Error("Erro ao buscar os patrocinadores")
    }

    const data = await response.json()
    return data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Erro ao buscar dados: ", error.message as ErrorOptions)
    }
    throw new Error("Erro ao buscar os dados da página Home")
  }
}

interface sponsorBySlugProps {
  id: string
}

export async function sponsorBySlug({
  id,
}: sponsorBySlugProps): Promise<Sponsor> {
  try {
    const response = await fetch(
      `https://fluigdev.apaebrasil.org.br/portalapi/v1/parceiro/${id}`
    )

    if (!response.ok) {
      throw new Error("Erro ao fazer requisição dos patrocinadores")
    }

    const data = await response.json()
    return data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Erro ao buscar dados: ", error.message as ErrorOptions)
    }
    throw new Error("Erro ao buscar os dados da página Home")
  }
}
