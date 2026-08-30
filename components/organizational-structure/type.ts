export interface Colaborador {
  id: number
  uuid: string
  nome: string
  cargo: string
  foto: string
  contato: string
  email: string
  descricao: string
  lotacao: string
  data_admissao: string
  idSetor: number
}

export interface Setor {
  id: number
  uuid: string
  nome: string
  ordem: number
  icon: string
  colaboradores: Colaborador[]
  idSite: number
}
