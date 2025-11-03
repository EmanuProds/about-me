import { PortfolioData } from '@/types'; // Assumindo que você criou o types/index.d.ts

export const portfolioData: PortfolioData = {
  name: "EmanuProds",
  title: "Desenvolvedor Fullstack",
  profilePicture: "/profile.jpg", // Coloque sua foto em public/profile.jpg
  about: "Olá! Sou um desenvolvedor fullstack apaixonado por criar experiências digitais intuitivas e visualmente atraentes. Tenho experiência em construir aplicações web robustas usando React, Next.js e TypeScript, com um olhar atento para o design e a usabilidade.",
  email: "emanuprods@proton.me",
  
  projects: [
    {
      id: "1",
      name: "Ecommerce de Roupas Modernas",
      description: "Uma plataforma completa de e-commerce com carrinho de compras, autenticação de usuário e painel de administração.",
      image: "/projects/project1.jpg", // Coloque a imagem em public/projects/project1.jpg
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe API"],
      githubUrl: "https://github.com/seu-usuario/ecommerce-moderno",
      demoUrl: "https://ecommerce-moderno.vercel.app",
    },
    {
      id: "2",
      name: "Dashboard de Gestão de Tarefas",
      description: "Um dashboard interativo para organizar e gerenciar tarefas diárias, com recursos de arrastar e soltar.",
      image: "/projects/project2.jpg",
      tags: ["React", "TypeScript", "Zustand", "Sass"],
      githubUrl: "https://github.com/seu-usuario/task-dashboard",
      demoUrl: "https://task-dashboard.vercel.app",
    },
    // Adicione mais projetos aqui
  ],

  skills: [
    { name: "HTML5", icon: "FaHtml5" },
    { name: "CSS3", icon: "FaCss3Alt" },
    { name: "JavaScript", icon: "FaJs" },
    { name: "TypeScript", icon: "SiTypescript" }, // Será necessário instalar react-icons
    { name: "React", icon: "FaReact" },
    { name: "Next.js", icon: "SiNextdotjs" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" },
    { name: "Git", icon: "FaGitAlt" },
    { name: "GitHub", icon: "FaGithub" },
    // Adicione mais habilidades e ícones
  ],

  socialLinks: [
    { name: "GitHub", url: "https://github.com/EmanuProds", icon: "FaGithub" },
    { name: "LinkedIn", url: "https://linkedin.com/in/seu-perfil", icon: "FaLinkedin" },
    { name: "WhatsApp", url: "https://twitter.com/seu-usuario", icon: "FaWhatsapp" },
    // Adicione mais links
  ],
};