# Arquitetura e Estrutura de Pastas — APAE Brasil Portal

> Documento de referência. Descreve o estado atual do projeto e a estrutura-alvo recomendada. Nenhuma mudança de código foi aplicada — isto é só documentação para orientar decisões futuras.

## 1. Stack atual

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 16 (App Router, React Server Components) |
| UI Library | React 19 |
| Linguagem | TypeScript (strict) |
| Estilo | Tailwind CSS v4 + `tw-animate-css` |
| Design system | shadcn/ui (estilo `base-vega`, ícones `lucide-react`) |
| Animação | `motion`, `embla-carousel-react` |
| Gerenciador de pacotes | pnpm (workspace) |
| Qualidade | ESLint (`eslint-config-next`), Prettier + `prettier-plugin-tailwindcss` |

Não há, hoje, camada de dados dinâmica: `constants/news.ts`, `constants/service.ts` e `constants/navigation-links.ts` são dados mockados/estáticos consumidos diretamente pelos componentes.

## 2. Princípios que orientam a estrutura proposta

Estes princípios seguem convenções amplamente adotadas pela comunidade React/Next.js (docs oficiais do Next.js sobre *project organization*, e o padrão conhecido como **Bulletproof React** para organização por *feature*):

1. **Colocation** — o que muda junto, fica junto. Um componente, seus subcomponentes, tipos e hooks exclusivos vivem na mesma pasta.
2. **`app/` só cuida de rotas** — páginas, layouts, `loading`/`error`/`not-found`. Nada de lógica de UI complexa ou dados dentro de `page.tsx`; ele só compõe componentes vindos de `components/`.
3. **Separação por responsabilidade, não por tipo de arquivo** — evitar pastas genéricas gigantes (`utils/`, `helpers/`) sem contexto; preferir agrupar por domínio/feature.
4. **Aliases de import absolutos** (`@/...`) em vez de `../../../`, já configurado em `tsconfig.json` — deve ser usado de forma consistente (hoje o projeto mistura os dois estilos, ver seção 6).
5. **Sem abstração prematura** — só criar `services/`, `features/`, `types/` globais quando houver necessidade real (ex.: quando entrar uma API/CMS). Estrutura deve crescer com o projeto, não antecipar complexidade que não existe ainda.
6. **`components/ui` é território do shadcn** — não editar manualmente esses arquivos além do que o CLI gera; customizações de tema ficam em `globals.css`/tokens.

## 3. Árvore de estrutura recomendada

```
apae_brasil/
├── app/                          # Somente rotas (App Router)
│   ├── (public)/                 # Route group: site público
│   │   ├── (comunicacao)/
│   │   │   └── noticias/
│   │   │       ├── page.tsx
│   │   │       └── [slug]/       # (futuro) página de notícia individual
│   │   │           └── page.tsx
│   │   └── page.tsx              # Home
│   ├── layout.tsx
│   ├── globals.css
│   └── not-found.tsx
│
├── components/
│   ├── ui/                       # Primitivas shadcn/ui — gerado via CLI, não editar à mão
│   ├── <feature>/                # Um componente "grande" por pasta (hero, news, about, ...)
│   │   ├── index.tsx             # Barrel + componente principal (export nomeado)
│   │   ├── <subcomponente>.tsx   # Subcomponentes privados da feature
│   │   ├── use-<algo>.ts         # Hook local, só usado aqui
│   │   └── types.ts              # Tipos locais (renomear type.tsx -> types.ts)
│   └── theme-provider.tsx        # Providers globais soltos na raiz de components/
│
├── constants/                    # Configuração fixa: enums, valores fixos, links de navegação
│   ├── navigation-links.ts
│   └── index.ts                  # Barrel só se reduzir fricção real (ver seção 5)
│
├── content/  (ou data/)          # Dados de conteúdo/mock hoje estático (news, services)
│   ├── news.ts
│   └── services.ts
│
├── types/                        # Tipos compartilhados entre múltiplas features
│   └── news.ts                   # ex.: NewsItem, usado por components/news e app/.../noticias
│
├── hooks/                        # Hooks reutilizáveis por mais de uma feature
│   └── use-media-query.ts
│
├── lib/                          # Utilitários puros e client de dados
│   ├── utils.ts                  # cn(), formatadores, etc.
│   └── api/                      # (futuro) camada de acesso a dados externos/CMS
│
├── public/
│   ├── images/                   # Fotos de conteúdo (congresso.jpg, doacao.jpg, ...)
│   └── icons/
│
├── docs/                         # Documentação do projeto (este arquivo)
│
├── components.json
├── tsconfig.json
└── package.json
```

### O que muda em relação ao estado atual

| Hoje | Proposta | Motivo |
|---|---|---|
| `constants/news.ts` e `constants/service.ts` misturados com `navigation-links.ts` | Separar em `content/` (dados de conteúdo) vs `constants/` (config fixa: links, enums, feature flags) | `news`/`services` são *dados de domínio* que um dia virão de uma API/CMS; `navigation-links` é config estrutural do site. Misturar os dois dificulta saber o que é "conteúdo editorial" e o que é "configuração de app". |
| `components/navigation/type.tsx` | `components/navigation/types.ts` | `.tsx` é para arquivos com JSX; arquivo só com `type`/`interface` deve ser `.ts`. |
| Tipo `NewsItem` provavelmente definido dentro de `constants/news.ts` | Extrair para `types/news.ts` (ou `content/news.types.ts`) | Assim que outro lugar do app (ex.: página de detalhe `/noticias/[slug]`) precisar do tipo, evita import cruzado de um arquivo de dados. |
| Imports relativos (`../billboard`, `../ui/button`) dentro de `components/news/index.tsx` | Sempre `@/components/billboard`, `@/components/ui/button` | Consistência — o projeto já importa `@/constants` em outros pontos; padronizar remove ambiguidade de "quantos `../` subir". |
| `public/*.jpg` soltos na raiz | `public/images/` | Facilita escalar quando houver mais assets (ícones, og-images, etc.). |
| Sem `docs/` | `docs/` com este documento e futuros ADRs | Onboarding e decisões de arquitetura documentadas em um só lugar, fora do `README.md` (que deve ficar enxuto/genérico). |

## 4. Convenções de nomenclatura

- **Pastas e arquivos**: `kebab-case` (`hero-carousel.tsx`, `nav-dropdown-item.tsx`) — já é o padrão do projeto, manter.
- **Componentes React**: exportação nomeada em `PascalCase` (`export function HeroSection()`), já seguido consistentemente.
- **Hooks**: prefixo `use-` no arquivo e `use` no nome exportado (`use-media-query.ts` → `useMediaQuery`).
- **Tipos**: arquivo `types.ts` (plural, sem JSX) por pasta, ou `<dominio>.types.ts` quando compartilhado globalmente. Evitar `.tsx` para arquivos sem JSX.
- **Barrel files (`index.ts`/`index.tsx`)**: usar **um por feature** para expor a API pública da pasta (ex.: `components/news/index.tsx` exporta `News`). Evitar barrels aninhados profundos — eles dificultam tree-shaking e "vá para definição" no editor.
- **Route groups** `(nome)`: já usados corretamente (`(public)`, `(comunicacao)`) para organizar rotas sem afetar a URL — manter esse padrão para segmentar áreas do site (ex.: futura `(institucional)`, `(doacoes)`).

## 5. Convenção de imports

Regra única e simples: **dentro de `components/`, `app/`, `lib/`, sempre importar via alias `@/...`.** Import relativo (`./`) só entre arquivos da **mesma pasta de feature** (ex.: `hero/index.tsx` importando `./hero-carousel`).

```ts
// ✅ bom — mesma feature
import { HeroCarousel } from "./hero-carousel"

// ✅ bom — cruzando features
import { Button } from "@/components/ui/button"
import { news } from "@/content/news"

// ❌ evitar — sobe pastas com ../
import { Button } from "../ui/button"
```

Sobre barrels em `constants/index.ts` (e futuramente `content/index.ts`): só valem a pena se **todo mundo** importar de lá. Se o projeto crescer e passar a ter dezenas de entradas, considerar importar direto do arquivo (`@/content/news`) para evitar que um barrel gigante puxe módulos desnecessários no bundle client.

## 6. Padrão de componentes (Server vs Client)

- **Server Components por padrão** (sem `"use client"`). É o padrão do App Router e reduz JS enviado ao browser — a maioria dos componentes atuais (`About`, `News`, `ServiceSection`) não precisa de interatividade e pode continuar assim.
- **`"use client"` só onde há**: hooks de estado/efeito, listeners de evento, bibliotecas client-only (`embla-carousel-react`, `motion`, `next-themes`). Isolar esses componentes no menor escopo possível (ex.: `hero-carousel.tsx` como client component, mas `hero/index.tsx` que o envolve pode continuar server).
- **Props tipadas via `interface`/`type` local**, exportadas apenas se outro arquivo precisar (evitar exportar tipos "só por garantia").

## 7. Dados e futura camada de serviços

Hoje `news`, `services` e `navigation-links` são arrays estáticos importados diretamente. Quando isso mudar para uma API/CMS (ex.: buscar notícias reais, formulário de doação, etc.), o caminho recomendado é:

```
lib/api/
├── client.ts        # fetch wrapper (base URL, headers, error handling)
└── news.ts          # getNews(), getNewsBySlug() — chamadas isoladas por domínio
```

Os Server Components chamam essas funções diretamente (`await getNews()`), sem necessidade de React Query/SWR — o App Router já lida com cache/revalidação no servidor. Só considerar uma lib client-side de data-fetching (TanStack Query) se surgir necessidade real de refetch/mutação no cliente (ex.: formulário de inscrição, dashboard autenticado).

## 8. Estilo e design system

- Tokens de tema/cor devem viver em `app/globals.css` (já é onde o Tailwind v4 + shadcn configuram variáveis) — evitar cores "soltas" (`bg-blue-600`, `text-zinc-800`) espalhadas pelos componentes quando já existe um token equivalente do tema; usar token semântico do shadcn (`bg-primary`, `text-foreground`) sempre que possível para manter consistência ao trocar tema claro/escuro.
- `components/ui/` só deve ser alterado via `npx shadcn add`/regeneração — mudanças manuais devem ser mínimas e documentadas, para não perder compatibilidade com updates do shadcn.
- Prettier já ordena classes Tailwind automaticamente (`prettier-plugin-tailwindcss`) — não reordenar classes manualmente.

## 9. Qualidade e automação (sugestões, não aplicadas)

Nada disso existe ainda no projeto — são recomendações comuns para projetos Next.js em produção:

- **Testes**: Vitest + React Testing Library para componentes; Playwright para e2e das rotas principais (home, notícias).
- **Git hooks**: Husky + lint-staged rodando `eslint` e `prettier --check` no pre-commit, evitando que código fora do padrão chegue ao repositório.
- **CI**: pipeline (GitHub Actions) rodando `pnpm lint`, `pnpm typecheck`, `pnpm build` em cada PR.
- **ADRs** (*Architecture Decision Records*): pequenos arquivos em `docs/adr/` registrando decisões relevantes (ex.: "por que Tailwind v4 + shadcn `base-vega`", "por que sem TanStack Query por enquanto") — útil para quando o time crescer.

## 10. Roadmap de adoção incremental

Como o pedido é só documentar (nada foi alterado no código), esta é a ordem sugerida para aplicar futuramente, da menor para a maior fricção:

1. Renomear `components/navigation/type.tsx` → `types.ts`.
2. Padronizar todos os imports internos de `components/` para usar `@/...`.
3. Mover `public/*.jpg|png` para `public/images/`.
4. Criar `content/` e mover `constants/news.ts` e `constants/service.ts` para lá; manter `constants/` só com `navigation-links.ts` e futuras configs fixas.
5. Extrair tipos de domínio (`NewsItem`, `Service`) para `types/`.
6. Quando a primeira integração de dados dinâmicos chegar (API/CMS), introduzir `lib/api/`.
7. Introduzir testes e CI quando o projeto tiver massa crítica de componentes/rotas que justifique.

---
*Última atualização: 2026-08-10.*
