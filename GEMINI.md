# Diretrizes do Projeto - Calang.io Site (`calangio-site`)

Este documento serve como guia de arquitetura, estrutura de pastas, instruções de construção/execução e padronização de mensagens de commit para o projeto **Calang.io Site**.

---

## 1. Visão Geral

O **Calang.io Site** é o portal institucional oficial da Calang.io, desenvolvido com foco em alta performance, responsividade, SEO avançado e renderização do lado do servidor (SSR).

### Tecnologias Principais
- **Framework:** Angular 21 (Standalone Components)
- **Renderização:** Angular SSR (`@angular/ssr` + Express 5)
- **Linguagem:** TypeScript (~5.9)
- **Estilos:** CSS puro modularizado e variáveis CSS para temas Dark/Light
- **Internacionalização (i18n):** Rotas bilíngues (`/pt` e `/en`) com dicionários de conteúdo
- **Containerização:** Docker com build multi-stage (Node 22 Alpine) e Docker Compose
- **Qualidade e Testes:** Vitest (`ng test`) e Prettier

---

## 2. Estrutura do Projeto

Abaixo está o mapa hierárquico dos principais diretórios e arquivos:

```text
calangio-site/
├── .vscode/                     # Configurações do VS Code
├── public/                      # Arquivos estáticos servidos diretamente
│   ├── assets/                  # Legado / recursos estáticos agrupados
│   ├── fonts/                   # Tipografia (Família de fontes Prompt)
│   ├── icons/                   # Ícones vetoriais SVG e imagens de apoio
│   ├── images/                  # Logotipos, ilustrações e fotos institucionais
│   ├── models/                  # Modelos 3D (.glb) renderizados na interface
│   ├── favicon.ico              # Favicon principal
│   ├── robots.txt               # Configurações para rastreadores web (SEO)
│   └── sitemap.xml              # Mapa do site para motores de busca
├── src/
│   ├── app/
│   │   ├── core/                # Serviços centrais, estados globais e conteúdo
│   │   │   ├── content/         # Dicionários de tradução e conteúdo estático
│   │   │   │   ├── pt/          # Conteúdos em Português
│   │   │   │   └── en/          # Conteúdos em Inglês
│   │   │   └── services/        # Serviços singleton (SEO, Tema, Tradução)
│   │   │       ├── seo.service.ts
│   │   │       ├── theme.service.ts
│   │   │       └── translation.service.ts
│   │   ├── features/            # Módulos/Páginas de funcionalidades (Standalone)
│   │   │   ├── home/            # Página inicial
│   │   │   ├── services/        # Apresentação de serviços
│   │   │   ├── portfolio/       # Casos de sucesso e projetos
│   │   │   ├── about/           # Sobre a empresa
│   │   │   ├── team/            # Equipe e membros
│   │   │   ├── contact/         # Formulário e dados de contato
│   │   │   ├── privacy/         # Política de privacidade
│   │   │   └── terms/           # Termos de uso
│   │   ├── shared/              # Componentes, diretivas e pipes reutilizáveis
│   │   │   └── components/
│   │   │       ├── header/      # Barra de navegação e controles (tema/idioma)
│   │   │       └── footer/      # Rodapé institucional
│   │   ├── app.config.ts        # Configurações do cliente Angular (Providers, Rotas)
│   │   ├── app.config.server.ts # Configurações para renderização SSR
│   │   ├── app.routes.ts        # Definição e redirecionamento de rotas (/pt e /en)
│   │   ├── app.routes.server.ts # Configurações de rotas no servidor
│   │   ├── app.ts               # Componente raiz da aplicação
│   │   ├── app.html             # Template raiz
│   │   └── app.css              # Estilos globais da raiz
│   ├── index.html               # Documento HTML principal
│   ├── main.ts                  # Ponto de entrada do cliente
│   ├── main.server.ts           # Ponto de entrada para renderização SSR
│   ├── server.ts                # Servidor Express integrado com Angular SSR
│   └── styles.css               # Folha de estilos globais e variáveis de tema
├── angular.json                 # Configurações do workspace Angular CLI
├── Dockerfile                   # Build multi-stage para ambiente de produção
├── docker-compose.yml           # Compose base do container
├── docker-compose.dev.yml       # Overlay do Compose para desenvolvimento
├── docker-compose.prod.yml      # Overlay do Compose para produção
├── package.json                 # Dependências e scripts do projeto
├── tsconfig.json                # Configurações do compilador TypeScript
└── CONTACT_INTEGRATION_GUIDE.md # Guia de integração para o formulário de contato
```

---

## 3. Construção e Execução (Build & Run)

### Pré-requisitos
- **Node.js**: v22.x ou superior
- **npm**: v11.x ou superior (especificado no `packageManager`: `npm@11.19.0`)
- **Docker & Docker Compose** (opcional, para execução em containers)

---

### Execução Local (Sem Docker)

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Servidor de desenvolvimento:**
   ```bash
   npm start
   # ou
   ng serve
   ```
   Acesse a aplicação em `http://localhost:4200/`. A página é atualizada automaticamente em modificações nos arquivos fonte.

3. **Compilação de produção (Build):**
   ```bash
   npm run build
   ```
   Gera os artefatos compilados no diretório `dist/calangio-site/` (contendo as pastas `browser/` e `server/`).

4. **Execução do servidor SSR localmente:**
   Após executar o build, suba o servidor Node.js/Express:
   ```bash
   npm run serve:ssr:calangio-site
   ```
   O servidor iniciará atendendo requisições com SSR ativado.

5. **Testes unitários:**
   ```bash
   npm test
   ```

---

### Execução com Docker

O projeto possui suporte a ambientes de desenvolvimento e produção isolados via Docker:

- **Desenvolvimento (`docker-compose.dev.yml`):**
  ```bash
  docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build
  ```
  Expõe a porta `4000` em modo de desenvolvimento (`NODE_ENV=development`).

- **Produção (`docker-compose.prod.yml`):**
  ```bash
  docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build
  ```
  Executa a imagem otimizada com a rede externa `infra-net`.

- **Parar containers:**
  ```bash
  docker compose -f docker-compose.yml -f docker-compose.dev.yml down
  # ou
  docker compose -f docker-compose.yml -f docker-compose.prod.yml down
  ```

---

## 4. Padrão de Commits (Conventional Commits in English)

> ⚠️ **REGRA OBRIGATÓRIA**: Todas as mensagens de commit **DEVEM ser escritas em INGLÊS** seguindo o padrão **Conventional Commits**.

### Formato da Mensagem

```text
<type>(<scope>): <short summary in imperative mood>

[optional body providing additional context]

[optional footer(s), e.g., references to issues]
```

### Tipos Permitidos (`<type>`)

| Tipo | Descrição |
| :--- | :--- |
| `feat` | Nova funcionalidade ou recurso para o usuário |
| `fix` | Correção de bug ou falha de comportamento |
| `docs` | Alterações puramente em documentação (README, guias, comentários) |
| `style` | Formatação de código, espaçamentos, pontuação (sem alteração de lógica) |
| `refactor` | Refatoração de código sem adicionar funcionalidade nem corrigir bug |
| `perf` | Melhorias de performance e carregamento |
| `test` | Adição ou correção de testes automatizados |
| `build` | Mudanças que afetam o sistema de build, dependências ou Docker |
| `ci` | Modificações em scripts e pipelines de integração contínua |
| `chore` | Tarefas de manutenção rotineira que não afetam código de produção |

### Escopos Comuns (`<scope>`)
- `home`, `services`, `portfolio`, `about`, `team`, `contact`, `privacy`, `terms`
- `theme`, `seo`, `i18n`, `ui`, `content`, `docker`, `router`

### Exemplos Válidos (Baseados no Histórico do Projeto)

```bash
# Adição de funcionalidade
git commit -m "feat(theme): set dark mode as default theme"
git commit -m "feat(seo): add official calang.io favicon icons for browsers and mobile devices"

# Correção de bugs
git commit -m "fix(home): update social impact pillar icon to bi-people-fill"
git commit -m "fix(ui): move login toast outside header backdrop-filter container"
git commit -m "fix(content): update home page pillars and icon text in PT and EN"

# Documentação e infraestrutura
git commit -m "docs: add GEMINI.md with architecture and build guidelines"
git commit -m "build(docker): optimize multi-stage build steps in Dockerfile"
git commit -m "chore(deps): update angular core packages to latest patch"
```

### Boas Práticas
1. **Verbo no imperativo**: Use `add` (não `added` ou `adds`), `update` (não `updated`), `fix` (não `fixed`).
2. **Caixa baixa**: Inicie a descrição em letras minúsculas após os dois pontos.
3. **Sem ponto final**: Não adicione ponto final no título do commit.
4. **Clareza e objetividade**: Descreva claramente o que foi alterado e o porquê quando necessário.
