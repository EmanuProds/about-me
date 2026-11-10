# Portfólio

[![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

Um portfólio moderno e responsivo desenvolvido com as tecnologias mais recentes do ecossistema React. Apresenta minhas habilidades, projetos e formação acadêmica de forma interativa e atrativa.

## Funcionalidades

- **Integração GitHub**: Estatísticas e perfil diretamente do GitHub
- **Multilíngue**: Suporte completo para português brasileiro e inglês
- **Design Moderno**: Interface elegante com tema escuro/claro automático
- **Responsivo**: Otimizado para desktop, tablet e mobile
- **Tecnologias em Destaque**: Scroll horizontal das principais tecnologias
- **Projetos Interativos**: Cards com vídeos demonstrativos e links diretos
- **Formação Acadêmica**: Seção dedicada com certificados e cursos
- **Performance**: Otimizado com Next.js 16 e React Compiler

## Tecnologias Utilizadas

### Core Framework
- **Next.js 16** - Framework React com App Router
- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset JavaScript com tipagem estática

### Estilização
- **Tailwind CSS v4** - Framework CSS utilitário
- **Geist Fonts** - Tipografia moderna do Google Fonts

### Desenvolvimento
- **ESLint** - Linting e formatação de código
- **React Compiler** - Otimização automática de componentes

### Ícones e UI
- **React Icons** - Biblioteca abrangente de ícones

### Integrações
- **GitHub Readme Stats** - Estatísticas dinâmicas como imagens SVG

## Estrutura do Projeto

```
src/
├── app/ # Páginas Next.js (App Router)
│ ├── api/ # Endpoints da API
│ ├── globals.css # Estilos globais
│ ├── layout.tsx # Layout raiz da aplicação
│ └── page.tsx # Página inicial
├── components/ # Componentes React
│ ├── github/ # Integração com GitHub
│ ├── layout/ # Header e Footer
│ ├── providers/ # Context Providers
│ ├── ui/ # Componentes da interface
│ └── ...
├── hooks/ # Hooks customizados
├── lib/ # Utilitários e dados
│ ├── constants.ts # Constantes da aplicação
│ ├── data.ts # Dados estáticos (projetos, cursos)
│ └── translations/ # Sistema de internacionalização
├── types/ # Definições TypeScript
└── ...
```

## Seções do Portfólio

### Início
- Perfil profissional com foto e informações básicas
- Integração com dados do GitHub

### Sobre Mim
- Biografia detalhada com experiência profissional
- Destaques em desenvolvimento e infraestrutura
- Experiência multidisciplinar em TI

### Projetos
- **Image2DOC**: Aplicação GTK4 para OCR e organização de documentos
- **Notary Connect X**: Sistema de atendimento automatizado via WhatsApp

### Formação Acadêmica
- Cursos de especialização em desenvolvimento
- Certificações em LGPD e programação
- Formação contínua em tecnologias modernas

### Tecnologias
- Linguagens de programação (HTML, CSS, JS, TS, Python)
- Frameworks e bibliotecas (React, Next.js, Node.js)
- Ferramentas de desenvolvimento (Git, Docker, Linux)

## Internacionalização

O portfólio suporta dois idiomas:

- **Português Brasileiro (pt-BR)** - Idioma padrão
- **English (en)** - Suporte completo

O sistema de tradução é baseado em arquivos JSON organizados por seções da aplicação.

## Tema

- **Modo Claro/Escuro**: Alternância automática baseada no sistema do usuário
- **Design System**: Paleta de cores consistente
- **Animações**: Transições suaves e micro-interações

## Responsividade

- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: Adaptação para tablet e desktop
- **Performance**: Imagens e vídeos otimizados

## Desenvolvimento

### Hooks Customizados
- `useTranslations` - Gerenciamento de idiomas
- `useTheme` - Controle de tema claro/escuro
- `useVideoPlayer` - Controle de vídeos nos projetos
- `useCertificateModal` - Modal para certificados

### Componentes Reutilizáveis
- `Profile` - Seção de perfil com GitHub
- `Projects` - Grid responsivo de projetos
- `TechScroll` - Carrossel horizontal de tecnologias
- `Academic` - Lista de formações acadêmicas

## Performance

- **Next.js 16**: App Router e otimizações automáticas
- **React Compiler**: Compilação otimizada de componentes
- **Lazy Loading**: Carregamento sob demanda
- **Code Splitting**: Divisão automática de bundles

## Deploy no GitHub Pages

Este projeto está configurado para deploy automático no GitHub Pages usando GitHub Actions.

### Configuração Inicial

1. **No seu repositório GitHub**, vá para **Settings > Pages**
2. **Source**: Selecione "GitHub Actions"
3. **Commit e push** as mudanças para a branch `main`

### Como Funciona

- O workflow `.github/workflows/deploy.yml` é executado automaticamente em cada push
- O Next.js gera arquivos estáticos na pasta `out/`
- Os arquivos são publicados no GitHub Pages
- O site fica disponível em `https://[username].github.io/[repository-name]`

### Arquivos de Configuração

- `next.config.ts`: Configurado para exportação estática
- `.github/workflows/deploy.yml`: Workflow de CI/CD
- `package.json`: Script de build otimizado

### Limitações do GitHub Pages

- Sem suporte a APIs server-side (por isso usamos GitHub Readme Stats)
- Apenas arquivos estáticos
- Rate limits nas APIs externas
