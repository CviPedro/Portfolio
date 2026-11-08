import type { Language, Profile, Project, ProjectStatus, SkillGroup } from "../types";

export const profile: Profile = {
  name: "Pedro Vieira",
  fullName: "Pedro Davi Campos Vieira",
  role: "Desenvolvedor full-stack júnior",
  summary:
    "Desenvolvedor full-stack júnior com experiência em desenvolvimento web e back-end, buscando oportunidades para aplicar minhas habilidades e contribuir para projetos inovadores.",
  about: [
    "Atualmente estou cursando o 5°, e último, período do curso de Análise e Desenvolvimento de Sistemas na Unifor.",
    "Estou mais acostumado a desenvolver projetos que utilizem, no front, TypeScript, node.js, React e Next.js enquanto no back, Java Spring Boot. Nos projetos da faculdade também trabalho com Haskell, IHP além de usar ferramentas de desenvolvimento do Ubuntu e nix.",
  ],
  email: "ViPedro016@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/pedro-vieira-850292279",
  linkedinHandle: "pedro-vieira-850292279",
  githubUrl: "https://github.com/CviPedro",
  githubUser: "CviPedro",
  // Coloque o seu PDF em public/curriculo.pdf
  resumeUrl: "/curriculo.pdf",
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Uso no dia a dia",
    items: [
      "HTML",
      "CSS",
      "TypeScript",
      "React Native",
      "Next.js",
      "Node.js",
      "Java Spring Boot",
      "PostgreSQL",
      "Firebase",
      "Python",
      "Git e GitHub",
    ],
  },
  {
    title: "Já tive contato",
    items: [
      "Angular",
      "JavaScript",
      "Kotlin Spring Boot",
      "MySQL",
      "Supabase",
      "Vercel",
    ],
  },
  {
    title: "Diferenciais",
    items: [
      "Haskell e IHP",
      "Linux (Ubuntu e Fedora)",
      "Testes de API (Postman e Insomnia)",
      "Metodologias ágeis (GitHub Projects e Trello)",
    ],
  },
];

export const languages: Language[] = [
  { name: "Inglês", level: "Fluente" },
  { name: "Francês", level: "Intermediário" },
  { name: "Alemão", level: "Básico" },
];

export const statusLabel: Record<ProjectStatus, string> = {
  finalizado: "Finalizado",
  "em-andamento": "Em andamento",
};

// Como preencher cada projeto:
//  - summary: 1 ou 2 frases, aparece no card.
//  - description: texto completo, aparece ao clicar. "\n\n" separa parágrafos.
//  - images: até 3 arquivos dentro de public/projects/<id>/ (troque .png por .jpg se for o caso).
//    Enquanto o arquivo não existir, o card mostra um quadrado "Em breve".
//  - imageShape: "tall" para prints de celular, "wide" (padrão) para prints de computador.
export const projects: Project[] = [
  {
    id: "gamecontrol",
    title: "GameControl",
    status: "finalizado",
    summary:
      "Rede social para jogadores de videogame: perfis, posts, resenhas de jogos e pastas de favoritos.",
    description:
      "O GameControl é um sistema que hospeda uma rede social para jogadores de videogame, permitindo que eles se conectem, compartilhem experiências e façam resenhas de jogos. O sistema oferece recursos como criação de perfis, postagem de conteúdo, comentários e criação de pastas de jogos favoritos (ou pastas personalizadas que o usuário criar), proporcionando uma experiência completa para os entusiastas de videogames.\n\nNeste trabalho, tive maior participação no backend e no gerenciamento de banco de dados.",
    images: [
      "/projects/gamecontrol/1.jpg",
      "/projects/gamecontrol/2.jpg",
      "/projects/gamecontrol/3.jpg",
    ],
    imageShape: "tall", // app de celular (React Native)
    tags: [
      "Java",
      "Spring Boot",
      "Firebase",
      "React Native",
      "Expo",
      "TypeScript",
      "TanStack Query",
      "API IGDB",
    ],
    repos: [
  { label: "Back-end no GitHub", url: "https://github.com/Jose-Matheus748/GameControl-Backend.git" },
  { label: "App no GitHub", url: "https://github.com/SimonSousa25/GameControl-Mobile.git" },
],
  },
  {
    id: "sga-func",
    title: "SGA Func",
    status: "em-andamento",
    summary:
      "Sistema de gerenciamento de atividades universitárias." ,
    description:
      "O SGA Func é um sistema que visa otimizar a gestão de funcionalidades para os usuários (Alunos, professores e cordenadores) do SGA, proporcionando uma interface intuitiva e eficiente para gerenciar suas tarefas e responsabilidades.",
    images: [
      "/projects/sga-func/1.png",
      "/projects/sga-func/2.png",
      "/projects/sga-func/3.png",
    ],
    tags: [
    "Haskell",
    "IHP",
    "PostgreSQL",
    "Nix",
    "Bootstrap",
    "HSX",
    "Python",
    "HSpec",
    "GitHub Actions"
    ],
    repos: [
      { label: "Repositório no GitHub", url: "https://github.com/juliallino/sga-func.git" }
    ],
  },
  {
    id: "cora-ecommerce",
    title: "Cora E-commerce",
    status: "em-andamento",
    summary: "Sistema de e-commerce e gerenciamento de produtos da Cora.",
    description:
      "O e-commerce da Cora é uma plataforma online que permite aos clientes explorar e adquirir produtos exclusivos feitos em impressora 3D. Com uma interface amigável e recursos de navegação intuitivos, os usuários podem facilmente encontrar produtos, visualizar detalhes, adicionar itens ao carrinho e finalizar suas compras de forma segura e conveniente. \n\n Além disso, o sistema permite os admins gerenciarem estoque e administrarem pedidos, garantindo uma experiência completa tanto para os clientes quanto para a equipe da Cora.",
    images: [
      "/projects/cora-ecommerce/1.png",
      "/projects/cora-ecommerce/2.png",
      "/projects/cora-ecommerce/3.png",
    ],
    tags: [],
    repos: [
      { label: "Repositório no GitHub", url: "https://github.com/CviPedro/NOME-DO-REPOSITORIO" }
    ],
  },
];
