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

export interface Documento {
  id: number
  uuid: string
  nome: string
  tipo: string
  tamanho: string
  link: string
  descricao: string
  ordem: number
  idCategoria: number
  criadoEm: DateDetails
  criadoPor: string
  ano: string
}

export interface DocumentoItems {
  itens: Documento[]
}

export interface CategoriaTransparencia {
  id: number
  uuid: string
  titulo: string
  tipo: string
  descricao: string
  ordem: number
  idSite: number
}
