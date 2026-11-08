// Aqui ficam os "formatos" dos dados do site.
// Se você errar um campo em src/data/portfolio.ts, o TypeScript avisa antes de rodar.

// Union type: o status só pode ser um destes dois textos.
export type ProjectStatus = "finalizado" | "em-andamento";

// "wide" = prints de computador (horizontais); "tall" = prints de celular (verticais).
export type ImageShape = "wide" | "tall";

export interface Project {
  id: string;
  title: string;
  status: ProjectStatus;
  // Texto curto: aparece no card.
  summary: string;
  // Texto detalhado: aparece quando a pessoa clica no card.
  // Use "\n\n" para separar parágrafos.
  description: string;
  // Até 3 imagens, guardadas em public/projects/<id>/
  images: string[];
  tags: string[];
  imageShape?: ImageShape;
  repoUrl?: string;
  liveUrl?: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Language {
  name: string;
  level: string;
}

export interface Profile {
  name: string;
  fullName: string;
  role: string;
  summary: string;
  about: string[];
  email: string;
  linkedinUrl: string;
  linkedinHandle: string;
  githubUrl: string;
  githubUser: string;
  resumeUrl: string;
}

export interface RepoLink {
  label: string;
  url: string;
}

export interface Project {
  repos?: RepoLink[]; 
  liveUrl?: string;
}
