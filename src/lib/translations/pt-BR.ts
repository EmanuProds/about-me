/**
 * Translation file for Brazilian Portuguese (pt-BR).
 * Contains all interface strings translated to Portuguese.
 */

import { Translations } from "@/types/translations";

export const ptBR: Translations = {
  header: {
    home: "Início",
    about: "Sobre",
    projects: "Projetos",
    education: "Formação",
  },
  profile: {
    name: "Emanuel Pereira",
    title: "Desenvolvedor Fullstack | DevOps | Técnico de TI",
  },
  about: {
    title: "Sobre mim",
    description: `Olá, meu nome é Emanuel da Costa Pereira, sou um desenvolvedor Fullstack e profissional de TI com uma sólida base em tecnologia, movido pela curiosidade e pela busca contínua por inovação e aprendizado. Possuo experiência prática na criação de soluções de automação e otimização de processos, combinada com uma forte aptidão para infraestrutura e suporte técnico. Minha paixão por compartilhar conhecimento foi consolidada pela experiência como instrutor de TI, enfatizando minha capacidade de orientação e liderança técnica.

Destaques e Projetos de Desenvolvimento

• Desenvolvimento de Plataforma de Atendimento - Notary Connect X (TypeScript, React/React Native, TailwindCSS/Nativewind, Expo, Node.js, Express.js, Python, Django, SQLite): Criação e implementação de soluções integradas ao WhatsApp para otimização do atendimento ao cliente, incluindo funcionalidades de redirecionamento setorial e gestão de arquivos.

• Automação Técnica: Demonstração de aptidão em programação através do desenvolvimento de um shellscript para automatizar a complexa pós-instalação do Arch Linux.

Experiência em Tecnologia e Infraestrutura

• Suporte e Manutenção de TI: Prestação de serviços de infraestrutura de TI, incluindo manutenção e suporte técnico para computadores, redes locais e servidores, visando a continuidade e segurança das operações.

• Instrutor de TI (Microlins): Orientação e auxílio a alunos em cursos de administração, informática, programação, design e marketing, reforçando a habilidade de comunicação e ensino de conceitos técnicos.

• Transição e Gestão Digital: Atuação proativa na transição digital de uma organização, responsável pela produção técnica de lives no YouTube, edição de conteúdo audiovisual e gráfico, e gerenciamento de site e aplicativo.

Experiência Multidisciplinar

• Suporte a Serviços Extrajudiciais: Atuação especializada em rotinas de cartórios (RCPN e Tabelionatos de Notas), prestando auxílio em buscas, emissão de certidões, apostilamentos de Haia e gerenciamento de índices.

• Serviços Complementares: Experiência em digitalização de documentos, atendimento ao cliente, vendas e organização de estoque, complementando um perfil proativo e versátil.`,
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
    titles: {
      image2doc: "Image2DOC",
      notaryConnect: "Notary Connect X (antigo)",
    },
    descriptions: {
      image2doc:
        "Uma aplicação em GTK4/Libadwaita com foco em extração de dados via OCR para conversão, renomiação e organização de documentos.",
      notaryConnect:
        "Um sistema local com interface web, focado em antendimento automatizado e humanizado, utilizando a API do WhatsApp",
    },
  },
  academic: {
    title: "Formação Acadêmica",
    viewCertificate: "Ver certificado",
    certificateNotIssued: "Certificado não emitido",
    types: {
      specializationCourse: "Curso de Especialização",
    },
    titles: {
      reactNativeExpo: "React Native com Expo",
      bootcampReactCSharp: "Akad - Desenvolvedor Fullstack",
      lgpdEnnor: "LGPD e seus Serviços",
      devlinks: "Devlinks",
      logicaProgramacao: "Lógica de programação",
    },
    descriptions: {
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
