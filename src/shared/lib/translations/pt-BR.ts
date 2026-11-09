/**
 * Brazilian Portuguese (pt-BR) translations.
 * Contains all user interface strings translated to Portuguese.
 */

import { Translations } from "@/types/translations";

export const ptBR: Translations = {
  // Navigation and header translations
  header: {
    home: "Início",
    about: "Sobre",
    experience: "Experiência",
    projects: "Projetos",
    education: "Formação",
  },
  profile: {
    name: "Emanuel da Costa Pereira",
    title: "Engenheiro de Software — Construindo ERPs & Automação",
  },
  about: {
    title: "Sobre mim",
    description: `Olá, meu nome é Emanuel da Costa Pereira — engenheiro de software apaixonado por transformar regras de negócio complexas em software confiável e automatizado. Sou o único desenvolvedor da Perains ON Technology (desde maio de 2026), onde pesquisei, arquitetei e entreguei um ERP completo para a contabilidade brasileira — do schema do banco e regras tributárias à API, interface, geração de documentos e CI. Também administro minha própria infraestrutura em nuvem na Oracle Cloud.

Atuação atual

• ERP Perains ON — desenho e construção da plataforma de ponta a ponta: backend em Go com abordagem API-first (chi, sqlc, pgx, OpenAPI/orval) e frontend em Angular + TypeScript, com fluxo de folha de pagamento (prévia, apontamentos, aprovação do operador, confirmação/cancelamento), exportação CSV, trilhas de auditoria e CI a cada alteração.

• Oracle Cloud Infrastructure — provisionamento, administração e otimização de ambientes OCI com contêineres Docker e redes virtuais, sempre mirando alta disponibilidade e eficiência de custos.

• Engenharia assistida por IA — desenho do meu próprio agent harness de IA no OpenCode: subagentes e skills customizados, integração de ferramentas LSP e MCP, memória persistente em SQLite e um roteador de modelos multi-provedor com uma bateria de avaliação de 75 modelos.

Trajetória

• Estagiário de Desenvolvimento de Software na Campos Development (dez/2025 — mai/2026): construí um sistema escalável de marketplace / registro de cartórios como microsserviços serverless na AWS Lambda, com frontend em React, backend em Python e Amazon Aurora PostgreSQL.

• Bacharelado em Ciência da Computação na Descomplica Uniamerica (2025 — 2029), com foco em Computação em Nuvem e Arquitetura de Software.

• Linux é meu dia a dia — automatizo meus próprios fluxos de pós-instalação e mantenho toolkits para Arch e Fedora.`,
  },
  experience: {
    title: "Experiência",
    entries: {
      perains: {
        role: "Engenheiro de Software",
        period: "Maio de 2026 — Presente",
        summary:
          "Único desenvolvedor de um ERP para a contabilidade brasileira construído do zero — schema, regras de negócio, API e interface. Backend em Go com abordagem API-first e frontend em Angular; fluxo de folha de pagamento com aprovação e trilha de auditoria; infraestrutura em Oracle Cloud e CI a cada alteração.",
      },
      campos: {
        role: "Estagiário de Desenvolvimento de Software",
        period: "Dez de 2025 — Maio de 2026",
        summary:
          "Desenvolvimento de um marketplace / registro de cartórios escalável como microsserviços serverless na AWS Lambda — frontend em React, backend em Python e Amazon Aurora PostgreSQL provisionado via DDL.",
      },
    },
  },
  github: {
    publicRepos: "Repositórios Públicos",
    contributions: (year: number) => `Contribuições em ${year}`,
    yearsExperience: "Anos de Experiência",
  },
  projects: {
    title: "Alguns Projetos",
    viewProject: "Ver Projeto",
    videoComingSoon: "Vídeo em breve",
    caseStudy: "Privado — Estudo de caso",
    titles: {
      perainsErp: "ERP Perains ON",
      clientOn: "Client On",
      image2file: "Image2File",
      omnicatalog: "OmniCatalog",
      archpiFedorapi: "archpi & fedorapi",
      aiHarness: "AI Agent Harness (OpenCode)",
    },
    descriptions: {
      perainsErp:
        "Único desenvolvedor de um ERP privado para a contabilidade brasileira — projetado e construído do zero: schema do banco, regras tributárias e de folha, backend em Go com abordagem API-first, frontend em Angular, geração de documentos e CI.",
      clientOn:
        "Plataforma de atendimento ao cliente que organiza mensagens recebidas via WhatsApp por setor. Construída com Next.js, Express, PostgreSQL e whatsapp-web.js, orquestrada com Docker Compose.",
      image2file:
        "Aplicação desktop em GTK4/Libadwaita que converte imagens de documentos em PDFs organizados usando OCR (Tesseract) — detecta automaticamente os números de página e permite correção manual quando o OCR falha.",
      omnicatalog:
        "CLI em Go que descobre, valida e cataloga modelos gratuitos do OmniRoute — construído para medir a capacidade real de uso de ferramentas entre provedores.",
      archpiFedorapi:
        "Toolkits em shell que transformam uma instalação recém-feita de Arch Linux ou Fedora em uma estação de desenvolvimento completa em minutos — dotfiles, pacotes e configs totalmente automatizados.",
      aiHarness:
        "Agent harness de IA pessoal construído sobre o OpenCode — subagentes e skills customizados, integração de ferramentas LSP e MCP, memória persistente em SQLite e um roteador de modelos multi-provedor com bateria de avaliação de 75 modelos.",
    },
  },
  academic: {
    title: "Formação Acadêmica",
    viewCertificate: "Ver certificado",
    certificateNotIssued: "Certificado não emitido",
    inProgress: "Em andamento",
    types: {
      specializationCourse: "Curso de Especialização",
      degree: "Graduação",
    },
    titles: {
      bachelorCs: "Bacharelado em Ciência da Computação",
      reactNativeExpo: "React Native com Expo",
      bootcampReactCSharp: "Bootcamp React e C#",
      lgpdEnnor: "LGPD e seus Serviços",
      devlinks: "Devlinks",
      logicaProgramacao: "Lógica de programação",
    },
    descriptions: {
      bachelorCs:
        "Graduação em Ciência da Computação na Descomplica Uniamerica (2025 — 2029), cobrindo algoritmos, estruturas de dados, engenharia de software, bancos de dados, sistemas distribuídos e redes de computadores.",
      reactNativeExpo:
        "Curso intensivo focado no desenvolvimento de aplicações móveis nativas para iOS e Android utilizando TypeScript, React Native e Expo Framework, abrangendo desde conceitos fundamentais até técnicas avançadas de desenvolvimento mobile.",
      bootcampReactCSharp:
        "Programa completo de formação full-stack que combina desenvolvimento frontend moderno com TypeScript, React e Vite, e desenvolvimento backend robusto utilizando C# e ASP.NET, preparando para construção de aplicações web completas.",
      lgpdEnnor:
        "Formação especializada em Lei Geral de Proteção de Dados (LGPD) que aborda os princípios fundamentais da legislação, responsabilidades das organizações e implementação prática de medidas de compliance para proteção de dados pessoais.",
      devlinks:
        "Curso introdutório aos fundamentos do desenvolvimento web moderno, cobrindo HTML5 semântico, CSS3 para estilização avançada, JavaScript para interatividade, controle de versão com Git e colaboração através do GitHub.",
      logicaProgramacao:
        "Formação abrangente em lógica de programação que estabelece as bases fundamentais do pensamento computacional, desde algoritmos básicos e estruturas de controle até conceitos avançados como recursão, otimização e resolução de problemas complexos.",
    },
  },
  footer: {
    copyright: " Todos os direitos reservados.",
  },
};
