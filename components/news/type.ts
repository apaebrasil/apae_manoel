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

export interface Noticies {
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
  tipo: string
  descricao: string
}
