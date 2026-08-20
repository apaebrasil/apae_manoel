export interface Submenu {
  id: number
  uuid: string
  nome: string
  descricao: string
  link: string
  ordem: number
  ativo: boolean
  interno: boolean
  idMenu: number | null
}

export interface MenuItem {
  id: number
  uuid: string
  nome: string
  ativo: boolean
  apae: unknown | null
  submenus: Submenu[]
  interno: boolean
  link: string
}
