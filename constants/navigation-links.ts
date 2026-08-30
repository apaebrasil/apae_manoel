export type NavItem = {
  href: string
  title: string
  description: string
}

export type NavGroup = {
  id: number
  uuid?: string
  nome: string
  href: string
  children: NavItem[]
}

export const navLinks: NavGroup[] = [
  {
    id: 1,
    nome: "Apae Brasil",
    href: "",
    children: [
      {
        href: "/quem-somos",
        title: "Quem Somos",
        description:
          "Conheça a história, a missão e os valores que fundamentam a Federação Nacional das Apaes.",
      },
      {
        href: "/estrutura-organizacional",
        title: "Estrutura Organizacional",
        description:
          "Diretoria, conselhos e organograma institucional da Apae Brasil.",
      },
      {
        href: "/certificacao-parceiros",
        title: "Certificações e Parcerias",
        description:
          "Parcerias estratégicas e certificações de qualidade do movimento.",
      },
      {
        href: "/eventos",
        title: "Eventos",
        description:
          "Agenda de eventos, encontros e atividades do movimento apaeano.",
      },
      {
        href: "/sobre-deficiencia-intelectual",
        title: "Deficiência Intelectual",
        description:
          "Informações técnicas e de conscientização sobre deficiência intelectual e múltipla.",
      },
      {
        href: "/sustentabilidade",
        title: "Sustentabilidade",
        description:
          "Iniciativas e compromisso com o desenvolvimento sustentável da rede.",
      },
      {
        href: "/sistema-gestao-qualidade",
        title: "Sistema de Gestão da Qualidade",
        description:
          "Processos que garantem excelência nos serviços prestados pela Rede Apae.",
      },
    ],
  },
  {
    id: 2,
    nome: "Institucional",
    href: "",
    children: [
      {
        href: "/pddee",
        title: "PDDE",
        description:
          "Programa Dinheiro Direto na Escola: recursos e diretrizes para a rede.",
      },
      {
        href: "/articulacao-institucional",
        title: "Articulação Institucional",
        description:
          "Projetos e ações de articulação entre as esferas do movimento apaeano.",
      },
      {
        href: "/coordenadoria-tecnicas",
        title: "Coordenadorias Técnicas",
        description:
          "Acompanhe as ações das coordenadorias técnicas da Apae Brasil.",
      },
    ],
  },
  {
    id: 3,
    nome: "Faculdade",
    href: "",
    children: [
      {
        href: "https://ead.apaebrasil.org.br/login/index.php",
        title: "Faculdade Apae Brasil",
        description: "Acesso à plataforma EAD para alunos e professores.",
      },
      {
        href: "https://apaebrasil.org.br/cursos",
        title: "Cursos",
        description:
          "Cursos de formação, especialização e extensão voltados ao desenvolvimento humano.",
      },
      {
        href: "https://biblioteca.apaebrasil.org.br/",
        title: "Biblioteca Virtual",
        description:
          "Acervo digital com publicações e materiais técnicos de referência.",
      },
      {
        href: "https://www.apaebrasil.org.br/menu/publicacao",
        title: "Publicações",
        description:
          "Documentos, manuais e materiais de apoio produzidos pela Apae Brasil.",
      },
      {
        href: "https://apaeciencia.org.br/index.php/revista",
        title: "Revista Apae Ciência",
        description:
          "Periódico científico dedicado à pesquisa sobre deficiência intelectual.",
      },
      {
        href: "https://www.apaebrasil.org.br/menu/pesquisas",
        title: "Pesquisas",
        description:
          "Iniciativas e resultados de pesquisa do movimento apaeano.",
      },
      {
        href: "https://apaebrasil.org.br/mapa",
        title: "Mapa das Apaes",
        description:
          "Localize as unidades da Rede Apae em todo o território nacional.",
      },
      {
        href: "https://apaebrasil.org.br/conteudo/teativo",
        title: "TEAtivo",
        description:
          "Projeto de inclusão de crianças e adolescentes com autismo no ambiente escolar.",
      },
    ],
  },
  {
    id: 4,
    nome: "Procuradoria Jurídica",
    href: "",
    children: [
      {
        href: "/juridico",
        title: "Jurídico",
        description:
          "Resoluções, normas e pareceres de apoio jurídico à Rede Apae.",
      },
      {
        href: "/assembleia-geral-ordinaria",
        title: "Assembleia Geral Ordinária",
        description:
          "Atas, convocações e deliberações das assembleias do movimento.",
      },
    ],
  },
  {
    id: 5,
    nome: "Comunicação",
    href: "",
    children: [
      {
        href: "/noticias",
        title: "Notícias",
        description:
          "Últimas novidades e informes oficiais do movimento apaeano.",
      },
      {
        href: "/semana-nacional",
        title: "Semana Nacional",
        description:
          "Semana Nacional da Pessoa com Deficiência Intelectual e Múltipla.",
      },
      {
        href: "/marca-apae",
        title: "Marca Apae",
        description:
          "Manual de uso da marca e diretrizes de identidade visual da Apae.",
      },
      {
        href: "/revista-mensagem-apae",
        title: "Revista Mensagem da Apae",
        description:
          "Publicação periódica com reportagens e artigos do movimento.",
      },
      {
        href: "/assesoria-imprensa",
        title: "Assessoria de Imprensa",
        description:
          "Canal de contato para jornalistas e veículos de comunicação.",
      },
    ],
  },
  {
    id: 6,
    nome: "Transparência",
    href: "/transparencia",
    children: [],
  },
]
