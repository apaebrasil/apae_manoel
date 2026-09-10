export interface PddeDocumento {
  id: number
  nome: string
  tipo: string
  tamanho: string
  descricao?: string
  link: string
}

export interface PddeCategoria {
  id: number
  titulo: string
  descricao: string
  documentos: PddeDocumento[]
}

export const categoriasPdde: PddeCategoria[] = [
  {
    id: 1,
    titulo: "Guias e Orientações",
    descricao: "Materiais de apoio para execução dos recursos do PDDE.",
    documentos: [
      {
        id: 1,
        nome: "Guia de execução do PDDE",
        tipo: "pdf",
        tamanho: "2,4 MB",
        link: "/",
      },
    ],
  },
  {
    id: 2,
    titulo: "Prestação de Contas",
    descricao: "Relatórios de aplicação dos recursos recebidos pela unidade.",
    documentos: [
      {
        id: 2,
        nome: "Prestação de contas 2024",
        tipo: "pdf",
        tamanho: "1,1 MB",
        link: "/",
      },
      {
        id: 3,
        nome: "Prestação de contas 2023",
        tipo: "pdf",
        tamanho: "980 KB",
        link: "/",
      },
    ],
  },
  {
    id: 3,
    titulo: "Atas e Editais",
    descricao: "Documentos de assembleias e processos de aquisição.",
    documentos: [
      {
        id: 4,
        nome: "Ata de assembleia de definição de prioridades",
        tipo: "pdf",
        tamanho: "540 KB",
        link: "/",
      },
    ],
  },
]
