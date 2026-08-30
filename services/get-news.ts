interface DateDetails {
  nano: number
  year: number
  monthValue: number
  dayOfMonth: number
  hour: number
  minute: number
  second: number
  month: string
  dayOfYear: number
  dayOfWeek: string
  chronology: {
    id: string
    calendarType: string
  }
}

type CreatedAt = DateDetails
type UpdatedAt = DateDetails

export interface GetNewsData {
  id: number
  uuid: string
  categoria: string
  nacional: boolean
  ativo: boolean
  autor: string
  titulo: string
  pasta: number
  destaque: boolean
  conteudo: string
  documentid: number
  url: string
  criadoEm: CreatedAt
  criadoPor: string
  atualizadoEm: UpdatedAt
  atualizadoPor: string
  sitesIds: string
}

interface GetNewsProps {
  siteId: string
  page?: number
  limit?: number
  slug?: string
  ativo?: boolean
  titulo?: string
  dataInicio?: string
  dataFim?: string
}

export async function getNews({
  page = 1,
  limit = 5,
  slug,
  siteId,
}: GetNewsProps) {
  console.log("siteId: ", siteId)
  let url = ""

  if (slug) {
    url = `https://fluigdev.apaebrasil.org.br/portalapi/v1/noticia?siteId=${siteId}&id=${slug}`
  }

  if (page && limit) {
    url = `https://fluigdev.apaebrasil.org.br/portalapi/v1/noticia?siteId=${siteId}&pagina=${page}&tamanho=${limit}`
  }
  const response = await fetch(url)
  console.log(response)
  if (!response.ok) {
    throw new Error("Erro ao fazer requisiçaõ das notícias")
  }

  const data: {
    itens: GetNewsData[]
    total: number
    paginaAtual: number
    totalPaginas: number
  } = await response.json()

  return {
    news: data.itens,
    totalPaginas: data.totalPaginas,
  }
}

export async function getNewsHighlight(): Promise<GetNewsProps[]> {
  const response = await fetch(
    "https://fluigdev.apaebrasil.org.br/portalapi/v1/noticia/destaques"
  )

  if (!response.ok) {
    throw new Error("Erro ao fazer requisiçaõ das notícias em destaque")
  }

  const data = await response.json()
  return data
}

interface newsBySlugProps {
  id: string
}

export async function newsBySlug({
  id,
}: newsBySlugProps): Promise<GetNewsData> {
  const response = await fetch(
    `https://fluigdev.apaebrasil.org.br/portalapi/v1/noticia/${id}`
  )

  if (!response.ok) {
    throw new Error("Erro ao fazer requisiçaõ das notícias em destaque")
  }

  const data = await response.json()
  return data
}
