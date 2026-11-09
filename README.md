# 🚀 Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

Personal portfolio of **Emanuel da Costa Pereira** — Software Engineer building ERPs and automation. Built with the latest technologies in the React ecosystem. Live at [emanuprods.github.io/about-me](https://emanuprods.github.io/about-me).

## ✨ Features

- 📊 **GitHub Integration**: Statistics and profile directly from the GitHub API
- 🌍 **Multilingual**: English (default) and Brazilian Portuguese
- 🎨 **Modern Design**: Elegant interface with light/dark theme
- 📱 **Responsive**: Optimized for desktop, tablet and mobile
- 🔧 **Featured Technologies**: Horizontal scroll of main technologies
- 🎥 **Interactive Projects**: Cards with demonstration videos and direct links (video optional — private projects render as case studies)
- 💼 **Experience Timeline**: Compact timeline of professional experience
- 🎓 **Education**: Dedicated section with certificates and courses
- ⚡ **Performance**: Optimized with Next.js 16 and React Compiler

## 🛠️ Technologies Used

### Core Framework
- **Next.js 16** - React framework with App Router (static export for GitHub Pages)
- **React 19** - Library for user interfaces
- **TypeScript** - JavaScript superset with static typing

### Styling
- **Tailwind CSS v4** - Utility-first CSS framework
- **Geist Fonts** - Modern typography from Google Fonts

### Development
- **ESLint** - Code linting and formatting
- **React Compiler** - Automatic component optimization

### Icons and UI
- **React Icons** - Comprehensive icon library

### Integrations
- **GitHub API** - Profile statistics and data

## 📁 Project Structure

```
src/
├── app/                    # Next.js entry (App Router)
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root application layout
│   └── page.tsx            # Home page
└── shared/                 # Application source
    ├── components/
    │   ├── github/         # GitHub integration (stats, avatar)
    │   ├── layout/         # Header, Footer, Card primitives
    │   ├── providers/      # Context providers (theme)
    │   └── ui/             # Profile, About, Experience, Projects, Academic, TechScroll
    ├── hooks/              # Custom hooks
    ├── lib/                # Static data, constants, translations (en, pt-BR)
    └── types/              # TypeScript definitions
```

## 🎯 Portfolio Sections

### 🏠 Home
- Professional profile with photo and basic information
- Live integration with GitHub statistics

### 👨‍💻 About Me
- **Perains ON Sistemas** — my own SaaS for Brazilian accounting at [perainson.duckdns.org](https://perainson.duckdns.org)
- Oracle Cloud Infrastructure administration
- AI-assisted engineering harness built on OpenCode

### 💼 Experience
- **Perains ON Technology** — Software Engineer (May 2026 — Present)
- **Campos Development** — Software Development Intern (Dec 2025 — May 2026)

### 🚀 Projects
- **Perains ON Sistemas**: my own SaaS for Brazilian accounting — Go, Angular, PostgreSQL, OpenAPI · [perainson.duckdns.org](https://perainson.duckdns.org)
- **Client On**: WhatsApp customer-service platform organized by department — Next.js, Express, PostgreSQL
- **Image2File**: GTK4 desktop app for OCR-powered document organization to PDF
- **OmniCatalog**: Go CLI that discovers, validates and catalogs free OmniRoute models
- **archpi & fedorapi**: Shell toolkits that turn a fresh Arch/Fedora install into a dev workstation
- **AI Agent Harness (OpenCode)**: custom subagents, skills, SQLite memory and model routing

### 🎓 Education
- **Bachelor's in Computer Science** — Descomplica Uniamerica (2025 — 2029)
- Specialization courses (React Native, React e C#, LGPD, and more) with verifiable certificates

### 🛠️ Technologies
- Languages (Go, TypeScript, JavaScript, Python)
- Frameworks (Angular, React, Next.js, Node.js)
- Data & Infrastructure (PostgreSQL, Docker, Oracle Cloud, AWS)
- Tooling (OpenAPI, Vitest, Playwright, Linux, ShellScript)

## 🌐 Internationalization

- **English (en)** — default language
- **Brazilian Portuguese (pt-BR)** — full translation

Translations live in `src/shared/lib/translations/` as typed dictionaries; the default locale in `translations/index.ts` controls SSR rendering and can be overridden by the language toggle (persisted in `localStorage`).

## 🎨 Theme

- **Light/Dark Mode**: Automatic switching based on user system, persisted
- **Design System**: Consistent color palette
- **Animations**: Smooth transitions and micro-interactions

## 📱 Responsiveness

- **Mobile First**: Design optimized for mobile devices
- **Breakpoints**: Adaptation for tablet and desktop
- **Performance**: Optimized images and videos

## 🔧 Development

### Custom Hooks
- `useTranslations` - Language management
- `useTheme` - Light/dark theme control
- `useVideoPlayer` - Video control in projects
- `useCertificateModal` - Modal for certificates

### Reusable Components
- `Profile` - Profile section with GitHub
- `Experience` - Compact professional timeline
- `Projects` - Project grid (optional video / case-study cards)
- `TechScroll` - Horizontal technology carousel
- `Academic` - Academic background list

### Running locally

```bash
npm install
npm run dev      # development server
npm run build    # static export to out/ (used for GitHub Pages)
npm run lint     # eslint
```

## 📈 Performance

- **Next.js 16**: App Router and automatic optimizations
- **React Compiler**: Optimized component compilation
- **Lazy Loading**: On-demand loading
- **Code Splitting**: Automatic bundle splitting

---

**Made with ❤️**
