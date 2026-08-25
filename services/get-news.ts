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

interface GetNewsProps {
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

export async function getNews(): Promise<GetNewsProps[]> {
  const response = await fetch(
    "https://fluigdev.apaebrasil.org.br/portalapi/v1/noticia"
  )

  if (!response.ok) {
    throw new Error("Erro ao fazer requisiçaõ das notícias")
  }

  const data = response.json()

  return data
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
